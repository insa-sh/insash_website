package handlers

import "net/http"

func GetCheatsheet(w http.ResponseWriter, r *http.Request) {
	GetDocument(w, r, "cheatsheet")
}

func GetCheatsheetTags(w http.ResponseWriter, r *http.Request) {
	GetDocumentTags(w, r, "cheatsheet")
}
