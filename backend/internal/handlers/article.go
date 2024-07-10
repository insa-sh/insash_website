package handlers

import "net/http"

func GetArticle(w http.ResponseWriter, r *http.Request) {
	GetDocument(w, r, "article")
}

func GetArticleTags(w http.ResponseWriter, r *http.Request) {
	GetDocumentTags(w, r, "article")
}

func GetArticleAuthorsBySlug(w http.ResponseWriter, r *http.Request) {
	GetDocumentAuthorsBySlug(w, r, "article")
}
