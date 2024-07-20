package handlers

import (
	"fmt"
	"insash-website-backend/internal/utils"
	"net/http"
	"os"
	"path"
	"path/filepath"

	"github.com/gorilla/mux"
)

func GetCheatsheetMarkdownByName(w http.ResponseWriter, r *http.Request) {
	GetMarkdownByName(w, r, "cheatsheet")
}

func GetTipsMarkdownByName(w http.ResponseWriter, r *http.Request) {
	GetMarkdownByName(w, r, "tips")
}

func GetNewsMarkdownByName(w http.ResponseWriter, r *http.Request) {
	GetMarkdownByName(w, r, "news")
}

func GetProjectMarkdownByName(w http.ResponseWriter, r *http.Request) {
	GetMarkdownByName(w, r, "project")
}

// Récupérer un fichier markdown via son nom
func GetMarkdownByName(w http.ResponseWriter, r *http.Request, documentType string) {
	params := mux.Vars(r)
	filename := path.Base(params["filename"]) // EMPECHE D'ALLER VOIR D'AUTRES DOSSIERS

	markdownPath := filepath.Join("..", "assets", "markdown", "document", documentType, filename)
	fmt.Println(markdownPath)

	content, err := os.ReadFile(markdownPath)
	if os.IsNotExist(err) {
		utils.LogEvent(fmt.Sprintf("%s - %s (%s) 404 GetMarkdownByName File_not_found filename=%s", r.Method, r.URL.Path, r.RemoteAddr, filename))
		http.Error(w, "File not found", http.StatusNotFound)
		return
	}

	w.Header().Set("Content-Type", "text/markdown")
	utils.LogEvent(fmt.Sprintf("%s - %s (%s) 200 GetMarkdownByName filename=%s", r.Method, r.URL.Path, r.RemoteAddr, filename))
	w.WriteHeader(http.StatusOK)
	w.Write(content)
}
