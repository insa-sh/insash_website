package handlers

import (
	"encoding/json"
	"fmt"
	"insash-website-backend/internal/models"
	"insash-website-backend/internal/utils"
	"net/http"
	"strconv"
	"strings"

	"github.com/lib/pq"
)

func AddQueryParameterDocument(r *http.Request, documentTypeParameter string) (string, []interface{}, error) {

	var query string
	var options []string
	var args []interface{}

	options = append(options, "document.uuid = document_author.document_uuid", "member.uuid = document_author.member_uuid")

	options = append(options, fmt.Sprintf("document.type = $%d", len(args)+1))
	args = append(args, documentTypeParameter)

	queryParams := r.URL.Query()
	tags := queryParams["tag"]
	search := queryParams.Get("search")
	uuid := queryParams.Get("uuid")
	slug := queryParams.Get("slug")
	nbr := queryParams.Get("nbr")
	year := queryParams["year"]
	surname := queryParams["author"]

	// Construction de la requête SQL dynamiquement
	// recherche d'une chaine de caractère dans le titre ou la description
	if search != "" {
		options = append(options, fmt.Sprintf("( LOWER(document.title) LIKE LOWER($%d) OR LOWER(document.description) LIKE LOWER($%d) )", len(args)+1, len(args)+1))
		args = append(args, "%"+search+"%")
	}

	if len(year) > 0 {
		var options_year []string
		for _, v := range year {
			options_year = append(options_year, fmt.Sprintf("DATE_PART('YEAR', document.date) = $%d", len(args)+1))
			args = append(args, v)
		}
		options = append(options, "("+strings.Join(options_year, " OR ")+")")
	}

	// si on cherches des documents avec des tags particuliers
	if len(tags) > 0 {
		options = append(options, fmt.Sprintf("$%d <@ document.tags", len(args)+1))
		args = append(args, pq.Array(tags))
	}

	if len(surname) > 0 {
		for _, v := range surname {
			options = append(options, fmt.Sprintf("document.uuid IN (SELECT document_author.document_uuid FROM document_author, member WHERE member.uuid = document_author.member_uuid AND member.surname = $%d)", len(args)+1))
			args = append(args, v)
		}
	}

	// chercher le document par UUID
	if uuid != "" {
		options = append(options, fmt.Sprintf("$%d = document.uuid", len(args)+1))
		args = append(args, uuid)
	}

	// chercher le document par slug
	if slug != "" {
		options = append(options, fmt.Sprintf("$%d = document.slug", len(args)+1))
		args = append(args, slug)
	}

	query += " WHERE " + strings.Join(options, " AND ")

	// tri par date asc/desc
	switch queryParams.Get("sort") {
	case "date_desc":
		query += " ORDER BY document.date DESC"
	case "date_asc":
		query += " ORDER BY document.date ASC"
	case "name_desc":
		query += " ORDER BY document.title DESC"
	case "name_asc":
		query += " ORDER BY document.title ASC"
	default:
		break
	}

	if nbr != "" {
		value, err := strconv.Atoi(nbr)
		if err != nil {
			utils.LogEvent(fmt.Sprintf("%s - %s (%s) ERR ACCESS DATABASE GetDocument %s", r.Method, r.URL.Path, r.RemoteAddr, err))
			return query, args, fmt.Errorf("error: invalid value for 'nbr' parameter: %s, can't use strcon.Atoi on it", nbr)
		}
		query += " LIMIT " + strconv.Itoa(value)
	}

	return query, args, nil
}

// Obtenir les documents avec des options de tri/filtrage via les url parameters
func GetDocument(w http.ResponseWriter, r *http.Request, documentTypeParameter string) {

	var documents []models.Document

	var args []interface{}

	parameterQuery, args, err := AddQueryParameterDocument(r, documentTypeParameter)
	if err != nil {
		utils.LogEvent(fmt.Sprintf("%s - %s (%s) ERR ACCESS DATABASE GetDocument %s", r.Method, r.URL.Path, r.RemoteAddr, err))
		return
	}
	query := "SELECT DISTINCT document.title, document.type, document.tags, document.content_address, document.date, document.description, document.image_address, document.slug, document.is_image_icon FROM document, document_author, member" + parameterQuery

	err = Db.Select(&documents, query+";", args...)
	if err != nil {
		utils.LogEvent(fmt.Sprintf("%s - %s (%s) ERR ACCESS DATABASE GetDocument %s", r.Method, r.URL.Path, r.RemoteAddr, err))
		return
	}

	// A FAIRE PARTOUT
	//1. mettre le type du renvoi
	w.Header().Add("Content-Type", "application/json")
	// 2. log en utilisant les info déjà fournies par la request
	utils.LogEvent(fmt.Sprintf("%s - %s (%s) 200 GetDocument", r.Method, r.URL.Path, r.RemoteAddr))
	// 3. définir le statut du renvoi
	w.WriteHeader(http.StatusOK)
	// 4. encoder le json et le renvoyer dans le writer 'w'
	json.NewEncoder(w).Encode(documents)
}

// récupérer tous les tags, renvoyer un json de la forme {tag : nombre_d'documents_avec_ce_tag}
func GetDocumentTags(w http.ResponseWriter, r *http.Request, documentTypeParameter string) {
	tags := make(map[string]int)

	var args []interface{}
	query := "SELECT tags AS count FROM document"

	if documentTypeParameter != "" {
		query = query + " WHERE type = $1"
		args = append(args, documentTypeParameter)

	}

	rows, err := Db.Queryx(query+";", args...)
	if err != nil {
		utils.LogEvent(fmt.Sprintf("%s - %s (%s) ERR ACCESS DATABASE GetDocumentAuthorsBySlug %s", r.Method, r.URL.Path, r.RemoteAddr, err))
		return
	}
	defer rows.Close()

	for rows.Next() {
		var tag []string
		err := rows.Scan(pq.Array(&tag))
		if err != nil {
			utils.LogEvent(fmt.Sprintf("%s - %s (%s) ERR ACCESS DATABASE GetDocumentAuthorsBySlug %s", r.Method, r.URL.Path, r.RemoteAddr, err))
			return
		}
		// fmt.Println(tag)
		for _, v := range tag {
			if _, ok := tags[v]; !ok {
				tags[v] = 1
			} else {
				tags[v] += 1
			}
		}
	}

	w.Header().Add("Content-Type", "application/json")
	utils.LogEvent(fmt.Sprintf("%s - %s (%s) 200 GetDocumentTags", r.Method, r.URL.Path, r.RemoteAddr))
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(tags)

}

func GetDocumentAuthors(w http.ResponseWriter, r *http.Request) {

	var members []models.Member

	queryParams := r.URL.Query()
	slug := queryParams.Get("slug")

	var args []interface{}
	var options []string
	query := "SELECT DISTINCT member.firstname, member.lastname, member.year, member.role, member.website, member.mail, member.image_address, member.linkedin, member.github, member.citation, member.surname, member.status FROM document, document_author, member WHERE document.uuid = document_author.document_uuid AND member.uuid = document_author.member_uuid"

	if slug != "" {
		options = append(options, fmt.Sprintf("document.slug = $%d", len(args)+1))
		args = append(args, slug)
	}

	if len(options) > 0 {
		query += " WHERE " + strings.Join(options, " AND ")
	}

	err := Db.Select(&members, query+";", args...)
	if err != nil {
		utils.LogEvent(fmt.Sprintf("%s - %s (%s) ERR ACCESS DATABASE GetDocumentAuthors %s", r.Method, r.URL.Path, r.RemoteAddr, err))
		return
	}

	w.Header().Add("Content-Type", "application/json")
	utils.LogEvent(fmt.Sprintf("%s - %s (%s) 200 GetDocumentAuthors", r.Method, r.URL.Path, r.RemoteAddr))
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(members)
}
