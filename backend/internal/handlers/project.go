package handlers

import "net/http"

func GetProject(w http.ResponseWriter, r *http.Request) {
	GetDocument(w, r, "project")
}

func GetProjectTags(w http.ResponseWriter, r *http.Request) {
	GetDocumentTags(w, r, "project")
}

func GetProjectAuthorsBySlug(w http.ResponseWriter, r *http.Request) {
	GetDocumentAuthorsBySlug(w, r, "project")
}
