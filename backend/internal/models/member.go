package models

import "database/sql"

type Member struct {
	UUID      string         `json:"uuid" db:"uuid"`
	FirstName sql.NullString `json:"firstname" db:"firstname"`
	LastName  sql.NullString `json:"lastname" db:"lastname"`
	// Year      int            `json:"year" db:"year"`
	Role    sql.NullString `json:"role" db:"role"`
	Status  sql.NullString `json:"status" db:"status"`
	Website sql.NullString `json:"website" db:"website"`
	// Mail      sql.NullString `json:"mail" db:"mail"`
	Image    sql.NullString `json:"image_address" db:"image_address"`
	LinkedIn sql.NullString `json:"linkedin" db:"linkedin"`
	GitHub   sql.NullString `json:"github" db:"github"`
	Citation sql.NullString `json:"citation" db:"citation"`
	Surname  sql.NullString `json:"surname" db:"surname"`
	Archived bool           `json:"archived" db:"archived"`
}
