package handlers

import "net/http"

func GetNews(w http.ResponseWriter, r *http.Request) {
	GetDocument(w, r, "news")
}

func GetNewsTags(w http.ResponseWriter, r *http.Request) {
	GetDocumentTags(w, r, "news")
}
