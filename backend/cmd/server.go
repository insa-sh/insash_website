package main

import (
	"fmt"
	"insash-website-backend/internal/handlers"
	"log"
	"net/http"
	"os"

	gorillaHandlers "github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	_ "github.com/lib/pq"
)

func main() {

	fmt.Println("POSTGRES_HOST:", os.Getenv("POSTGRES_HOST"))

	handlers.InitDatabase()
	router := mux.NewRouter()

	originsOk := gorillaHandlers.AllowedOrigins([]string{os.Getenv("ORIGIN_ALLOWED")})

	router.HandleFunc("/documents/project", handlers.GetProject).Methods("GET")
	router.HandleFunc("/documents/article", handlers.GetArticle).Methods("GET")
	router.HandleFunc("/documents/project/tags", handlers.GetProjectTags).Methods("GET")
	router.HandleFunc("/documents/article/tags", handlers.GetArticleTags).Methods("GET")

	router.HandleFunc("/documents/project/authors/{slug}", handlers.GetProjectAuthorsBySlug).Methods("GET")
	router.HandleFunc("/documents/article/authors/{slug}", handlers.GetArticleAuthorsBySlug).Methods("GET")

	router.HandleFunc("/images/documents/article/{documentslug}/{filename}", handlers.GetArticleImageByName).Methods("GET")
	router.HandleFunc("/images/documents/project/{documentslug}/{filename}", handlers.GetProjectImageByName).Methods("GET")
	router.HandleFunc("/images/members/{filename}", handlers.GetMemberImageByName).Methods("GET")

	router.HandleFunc("/markdown/article/{filename}", handlers.GetArticleMarkdownByName).Methods("GET")
	router.HandleFunc("/markdown/project/{filename}", handlers.GetProjectMarkdownByName).Methods("GET")

	// router.HandleFunc("/members/{firstname}", handlers.GetMembersByFirstname).Methods("GET")
	router.HandleFunc("/members", handlers.GetMembers).Methods("GET")

	// REMPLACER PAR LES VRAIS ELEMENTS DE CERTIFICATION HTTPS
	err := http.ListenAndServe(":8080", gorillaHandlers.CORS(originsOk)(router))
	if err != nil {
		log.Fatal("Server Failed: ", err)
	}
}
