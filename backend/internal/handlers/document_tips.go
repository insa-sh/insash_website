package handlers

import "net/http"

func GetTips(w http.ResponseWriter, r *http.Request) {
	GetDocument(w, r, "tips")
}

func GetTipsTags(w http.ResponseWriter, r *http.Request) {
	GetDocumentTags(w, r, "tips")
}
