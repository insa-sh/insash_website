package models

import "database/sql"

type Member struct {
	UUID      string         `json:"uuid" db:"uuid"`
	FirstName string         `json:"firstname" db:"firstname"`
	LastName  string         `json:"lastname" db:"lastname"`
	Year      int            `json:"year" db:"year"`
	Role      string         `json:"role" db:"role"`
	Status    string         `json:"status" db:"status"`
	Website   sql.NullString `json:"website" db:"website"`
	Mail      sql.NullString `json:"mail" db:"mail"`
	Image     string         `json:"image_address" db:"image_address"`
	LinkedIn  sql.NullString `json:"linkedin" db:"linkedin"`
	GitHub    sql.NullString `json:"github" db:"github"`
	Citation  sql.NullString `json:"citation" db:"citation"`
	Surname   string         `json:"surname" db:"surname"`
}
