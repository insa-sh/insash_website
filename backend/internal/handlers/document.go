package handlers

import (
	"encoding/json"
	"fmt"
	"insash-website-backend/internal/models"
	"insash-website-backend/internal/utils"
	"net/http"
	"strings"

	"github.com/gorilla/mux"
	"github.com/lib/pq"
)

// Obtenir les documents avec des options de tri/filtrage via les url parameters
func GetDocument(w http.ResponseWriter, r *http.Request, documentType string) {

	var documents []models.Document
	var options []string
	var args []interface{}

	query := "SELECT * FROM document"

	options = append(options, fmt.Sprintf("type = $%d", len(args)+1))
	args = append(args, documentType)

	queryParams := r.URL.Query()
	tags := queryParams["tag"]
	search := queryParams.Get("search")
	uuid := queryParams.Get("uuid")
	slug := queryParams.Get("slug")

	// Construction de la requête SQL dynamiquement
	// recherche d'une chaine de caractère dans le titre ou la description
	if search != "" {
		options = append(options, fmt.Sprintf("title LIKE $%d OR description LIKE $%d", len(args)+1, len(args)+1))
		args = append(args, "%"+search+"%")
	}

	// si on cherches des documents avec des tags particuliers
	if len(tags) > 0 {
		options = append(options, fmt.Sprintf("$%d <@ tags", len(args)+1))
		args = append(args, pq.Array(tags))
	}

	// chercher le document par UUID
	if uuid != "" {
		options = append(options, fmt.Sprintf("$%d = uuid", len(args)+1))
		args = append(args, uuid)
	}

	// chercher le document par slug
	if slug != "" {
		options = append(options, fmt.Sprintf("$%d = slug", len(args)+1))
		args = append(args, slug)
	}

	if len(options) > 0 {
		query += " WHERE " + strings.Join(options, " AND ")
	}

	// tri par date asc/desc
	switch queryParams.Get("sort") {
	case "desc":
		query += " ORDER BY date DESC"
	case "asc":
		query += " ORDER BY date ASC"
	default:
		break
	}

	rows, err := Db.Queryx(query+";", args...)
	if err != nil {
		utils.LogEvent(fmt.Sprintf("%s - %s (%s) ERR ACCESS DATABASE GetDocument %s", r.Method, r.URL.Path, r.RemoteAddr, err))
		return
	}
	defer rows.Close()

	for rows.Next() {
		var document models.Document
		err := rows.Scan(&document.UUID, &document.Title, pq.Array(&document.Tags), &document.Content, &document.Date, &document.Description, &document.Image, &document.Slug, &document.Type)
		if err != nil {
			utils.LogEvent(fmt.Sprintf("%s - %s (%s) ERR ACCESS DATABASE GetDocument %s", r.Method, r.URL.Path, r.RemoteAddr, err))
			return
		}
		documents = append(documents, document)
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
func GetDocumentTags(w http.ResponseWriter, r *http.Request, documentType string) {
	tags := make(map[string]int)

	query := `SELECT tags AS count FROM document WHERE type = $1 GROUP BY tags;`
	rows, err := Db.Queryx(query, documentType)
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

// Récupérer les auteurs d'un document selon son slug
func GetDocumentAuthorsBySlug(w http.ResponseWriter, r *http.Request, documentType string) {
	params := mux.Vars(r)
	slug := params["slug"]
	query := "SELECT member.uuid, member.firstname, member.lastname, member.surname, member.role, member.image_address FROM document, document_author, member WHERE type = $1 AND document.uuid = document_author.document_uuid AND member.uuid = document_author.member_uuid AND document.slug = $2;"
	var members []models.Member

	rows, err := Db.Queryx(query, documentType, slug)
	if err != nil {
		utils.LogEvent(fmt.Sprintf("%s - %s (%s) ERR ACCESS DATABASE GetDocumentAuthorsBySlug %s", r.Method, r.URL.Path, r.RemoteAddr, err))
		return
	}
	defer rows.Close()

	for rows.Next() {
		var member models.Member
		err := rows.Scan(&member.UUID, &member.FirstName, &member.LastName, &member.Surname, &member.Role, &member.Image)
		if err != nil {
			utils.LogEvent(fmt.Sprintf("%s - %s (%s) ERR ACCESS DATABASE GetDocumentAuthorsBySlug %s", r.Method, r.URL.Path, r.RemoteAddr, err))
			return
		}
		members = append(members, member)
	}

	w.Header().Add("Content-Type", "application/json")
	utils.LogEvent(fmt.Sprintf("%s - %s (%s) 200 GetDocumentAuthorsBySlug", r.Method, r.URL.Path, r.RemoteAddr))
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(members)
}
