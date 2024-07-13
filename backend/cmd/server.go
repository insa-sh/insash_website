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
	router.HandleFunc("/documents/cheatsheet", handlers.GetCheatsheet).Methods("GET")
	router.HandleFunc("/documents/tips", handlers.GetTips).Methods("GET")
	router.HandleFunc("/documents/news", handlers.GetNews).Methods("GET")

	router.HandleFunc("/documents/project/tags", handlers.GetProjectTags).Methods("GET")
	router.HandleFunc("/documents/cheatsheet/tags", handlers.GetCheatsheetTags).Methods("GET")
	router.HandleFunc("/documents/tips/tags", handlers.GetTipsTags).Methods("GET")
	router.HandleFunc("/documents/news/tags", handlers.GetNewsTags).Methods("GET")

	router.HandleFunc("/documents/authors", handlers.GetDocumentAuthors).Methods("GET")

	router.HandleFunc("/members", handlers.GetMembers).Methods("GET")

	router.HandleFunc("/images/documents/project/{documentslug}/{filename}", handlers.GetProjectImageByName).Methods("GET")
	router.HandleFunc("/images/documents/cheatsheet/{documentslug}/{filename}", handlers.GetCheatsheetImageByName).Methods("GET")
	router.HandleFunc("/images/documents/tips/{documentslug}/{filename}", handlers.GetTipsImageByName).Methods("GET")
	router.HandleFunc("/images/documents/news/{documentslug}/{filename}", handlers.GetNewsImageByName).Methods("GET")
	router.HandleFunc("/images/members/{filename}", handlers.GetMemberImageByName).Methods("GET")

	router.HandleFunc("/markdown/documents/project/{filename}", handlers.GetProjectMarkdownByName).Methods("GET")
	router.HandleFunc("/markdown/documents/cheatsheet/{filename}", handlers.GetCheatsheetMarkdownByName).Methods("GET")
	router.HandleFunc("/markdown/documents/tips/{filename}", handlers.GetTipsMarkdownByName).Methods("GET")
	router.HandleFunc("/markdown/documents/news/{filename}", handlers.GetNewsMarkdownByName).Methods("GET")

	err := http.ListenAndServe(":8080", gorillaHandlers.CORS(originsOk)(router))
	if err != nil {
		log.Fatal("Server Failed: ", err)
	}
}
