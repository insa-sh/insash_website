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
func GetArticleImageByName(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	imageName := path.Base(params["documentslug"]) + "/" + path.Base(params["filename"]) // EMPECHE D'ALLER VOIR D'AUTRES DOSSIERS
	imagePath := filepath.Join("..", "assets", "images", "article", imageName)
	fmt.Printf("imagePath: %s\n", imagePath)

	getImageByName(w, r, imageName, imagePath)
}

// Obtenir l'image d'un projet selon le nom du fichier
func GetProjectImageByName(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	imageName := path.Base(params["documentslug"]) + "/" + path.Base(params["filename"]) // EMPECHE D'ALLER VOIR D'AUTRES DOSSIERS
	imagePath := filepath.Join("..", "assets", "images", "project", imageName)
	fmt.Printf("imagePath: %s\n", imagePath)

	getImageByName(w, r, imageName, imagePath)
}

// Obtenir l'image de profil d'un membre selon le nom du fichier
func GetMemberImageByName(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	imageName := path.Base(params["filename"]) // EMPECHE D'ALLER VOIR D'AUTRES DOSSIERS
	imagePath := filepath.Join("..", "assets", "images", "member", imageName)

	getImageByName(w, r, imageName, imagePath)
}

// Récupérer une image via son chemin (le nom est aussi en parametre pour le LogEvent)
func getImageByName(w http.ResponseWriter, r *http.Request, imageName string, imagePath string) {

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
		utils.LogEvent(fmt.Sprintf("%s - %s (%s) 415 GetImageByName Unsupported_file_type imageName=%s", r.Method, r.URL.Path, r.RemoteAddr, imageName))

		return
	}

	_, err := os.Stat(imagePath)
	if os.IsNotExist(err) {
		utils.LogEvent(fmt.Sprintf("%s - %s (%s) 404 GetImageByName File_not_found imageName=%s", r.Method, r.URL.Path, r.RemoteAddr, imageName))
		http.Error(w, "File not found", http.StatusNotFound)
		return
	}

	utils.LogEvent(fmt.Sprintf("%s - %s (%s) 200 GetImageByName imageName=%s", r.Method, r.URL.Path, r.RemoteAddr, imageName))
	http.ServeFile(w, r, imagePath)
}
