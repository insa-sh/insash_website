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

	router.HandleFunc("/documents", handlers.GetDocument).Methods("GET")
	router.HandleFunc("/documents/years", handlers.GetDocumentYears).Methods("GET")
	router.HandleFunc("/documents/tags", handlers.GetDocumentTags).Methods("GET")
	router.HandleFunc("/documents/authors", handlers.GetDocumentAuthors).Methods("GET")

	router.HandleFunc("/members", handlers.GetMembers).Methods("GET")

	err := http.ListenAndServe(":8080", gorillaHandlers.CORS(originsOk)(router))
	if err != nil {
		log.Fatal("Server Failed: ", err)
	}
}
