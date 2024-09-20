package handlers

import (
	"fmt"
	"insash-website-backend/internal/utils"
	"os"

	"github.com/jmoiron/sqlx"
)

var Db *sqlx.DB

// Initialisation de la connexion à la database
func InitDatabase() {
	psqlInfo := fmt.Sprintf("host=%s port=%s user=%s "+
		"password=%s dbname=%s sslmode=disable",
		os.Getenv("POSTGRES_HOST"), os.Getenv("POSTGRES_PORT"), os.Getenv("POSTGRES_USER"), os.Getenv("POSTGRES_PASSWORD"), os.Getenv("POSTGRES_DB"))

	db, err := sqlx.Open("postgres", psqlInfo)
	if err != nil {
		fmt.Println("There is an error while connecting to the database ", err)
		utils.LogEvent(fmt.Sprintf("ERROR while connecting to the database: %s", err))
		return
	} else {
		Db = db
		utils.LogEvent("Connected to the database")
	}

}
