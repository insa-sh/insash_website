package handlers

import (
	"encoding/json"
	"fmt"
	"insash-website-backend/internal/models"
	"insash-website-backend/internal/utils"
	"log"
	"net/http"
	"strings"
)

// Obtenir la liste de tous les membres à afficher sur le site web
func GetMembers(w http.ResponseWriter, r *http.Request) {

	var members []models.Member
	var query string
	var args []interface{}
	var options []string

	queryParams := r.URL.Query()
	status := utils.NormalizeInputSearch(queryParams.Get("status"))
	username := queryParams.Get("username")
	archived := utils.NormalizeInputSearch(queryParams.Get("archived"))

	query = "SELECT firstname, lastname, role, website, custom_image, image_address, linkedin, github, citation, username, status, archived, instagram, has_custom_website, surname FROM member"

	if status != "" {
		options = append(options, fmt.Sprintf("status = $%d", len(args)+1))
		args = append(args, status)
	}

	if username != "" {
		options = append(options, fmt.Sprintf("username = $%d", len(args)+1))
		args = append(args, username)
	}

	if archived == "true" || archived == "false" {
		options = append(options, fmt.Sprintf("$%d = document.archived", len(args)+1))
		args = append(args, archived)
	}

	if len(options) > 0 {
		query += " WHERE " + strings.Join(options, " AND ")
	}

	query += " ORDER BY firstname ASC"

	err := Db.Select(&members, query+";", args...)
	if err != nil {
		log.Fatal(err)
	}

	w.Header().Add("Content-Type", "application/json")
	utils.LogEvent(fmt.Sprintf("%s - %s (%s) 200 GetMembers", r.Method, r.URL.Path, r.RemoteAddr))

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(members)
}
