package handlers

import (
	"encoding/json"
	"fmt"
	"insash-website-backend/internal/models"
	"insash-website-backend/internal/utils"
	"log"
	"net/http"
)

// Obtenir la liste de tous les membres à afficher sur le site web
func GetMembers(w http.ResponseWriter, r *http.Request) {

	var members []models.Member

	query := "SELECT firstname, lastname, year, role, website, mail, image_address, linkedin, github, citation, surname FROM member"

	err := Db.Select(&members, query)
	if err != nil {
		log.Fatal(err)
	}

	w.Header().Add("Content-Type", "application/json")
	utils.LogEvent(fmt.Sprintf("%s - %s (%s) 200 GetMembers", r.Method, r.URL.Path, r.RemoteAddr))

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(members)
}

// func GetMembersByFirstname(w http.ResponseWriter, r *http.Request) {

// 	var members []models.Member
// 	vars := mux.Vars(r)
// 	firstname := vars["firstname"]

// 	query := "SELECT * FROM member WHERE firstname = $1"

// 	err := Db.Select(&members, query, firstname)
// 	if err != nil {
// 		log.Fatal(err)
// 	}

// 	w.Header().Add("Content-Type", "application/json")
// 	utils.LogEvent(fmt.Sprintf("%s - %s (%s) 200 GetMemberByFirstname Firstname=%s", r.Method, r.URL.Path, r.RemoteAddr, firstname))
// 	w.WriteHeader(http.StatusOK)
// 	json.NewEncoder(w).Encode(members)

// }

// func GetMemberByUUID(w http.ResponseWriter, r *http.Request) {

// 	var member models.Member
// 	vars := mux.Vars(r)
// 	uuid := vars["UUID"]

// 	query := "SELECT * FROM member WHERE uuid = $1"

// 	err := Db.Select(&member, query, uuid)
// 	if err != nil {
// 		log.Fatal(err)
// 	}

// 	w.Header().Add("Content-Type", "application/json")
// 	utils.LogEvent(fmt.Sprintf("%s - %s (%s) 200 GetMemberByUUID UUID=%s", r.Method, r.URL.Path, r.RemoteAddr, uuid))

// 	w.WriteHeader(http.StatusOK)
// 	json.NewEncoder(w).Encode(member)

// }