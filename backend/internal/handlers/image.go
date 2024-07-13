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

// Obtenir l'image d'un article selon le nom du fichier
func GetCheatsheetImageByName(w http.ResponseWriter, r *http.Request) {
	GetDocumentImageByName(w, r, "cheatsheet")
}

func GetTipsImageByName(w http.ResponseWriter, r *http.Request) {
	GetDocumentImageByName(w, r, "tips")
}

func GetNewsImageByName(w http.ResponseWriter, r *http.Request) {
	GetDocumentImageByName(w, r, "news")
}

func GetProjectImageByName(w http.ResponseWriter, r *http.Request) {
	GetDocumentImageByName(w, r, "project")
}

func GetDocumentImageByName(w http.ResponseWriter, r *http.Request, documentType string) {
	params := mux.Vars(r)
	imageName := path.Base(params["documentslug"]) + "/" + path.Base(params["filename"]) // EMPECHE D'ALLER VOIR D'AUTRES DOSSIERS
	imagePath := filepath.Join("..", "assets", "images", "document", documentType, imageName)

	getImageByName(w, r, imagePath)
}

// Obtenir l'image de profil d'un membre selon le nom du fichier
func GetMemberImageByName(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	imageName := path.Base(params["filename"]) // EMPECHE D'ALLER VOIR D'AUTRES DOSSIERS
	imagePath := filepath.Join("..", "assets", "images", "member", imageName)

	getImageByName(w, r, imagePath)
}

// Récupérer une image via son chemin (le nom est aussi en parametre pour le LogEvent)
func getImageByName(w http.ResponseWriter, r *http.Request, imagePath string) {

	switch filepath.Ext(imagePath) {
	case ".jpg", ".jpeg":
		w.Header().Set("Content-Type", "image/jpeg")
	case ".png":
		w.Header().Set("Content-Type", "image/png")
	case ".gif":
		w.Header().Set("Content-Type", "image/gif")
	case ".webp":
		w.Header().Set("Content-Type", "image/webp")
	case ".svg":
		w.Header().Set("Content-Type", "image/svg+xml")
	default:
		http.Error(w, "Unsupported file type", http.StatusUnsupportedMediaType)
		utils.LogEvent(fmt.Sprintf("%s - %s (%s) 415 GetImageByName Unsupported_file_type imagePath=%s", r.Method, r.URL.Path, r.RemoteAddr, imagePath))

		return
	}

	_, err := os.Stat(imagePath)
	if os.IsNotExist(err) {
		utils.LogEvent(fmt.Sprintf("%s - %s (%s) 404 GetImageByName File_not_found imagePath=%s", r.Method, r.URL.Path, r.RemoteAddr, imagePath))
		http.Error(w, "File not found", http.StatusNotFound)
		return
	}

	utils.LogEvent(fmt.Sprintf("%s - %s (%s) 200 GetImageByName imagePath=%s", r.Method, r.URL.Path, r.RemoteAddr, imagePath))
	http.ServeFile(w, r, imagePath)
}
