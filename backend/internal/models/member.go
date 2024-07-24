package models

import "database/sql"

type Member struct {
	UUID      string         `json:"uuid" db:"uuid"`
	FirstName sql.NullString `json:"firstname" db:"firstname"`
	LastName  sql.NullString `json:"lastname" db:"lastname"`
	Role      sql.NullString `json:"role" db:"role"`
	Status    sql.NullString `json:"status" db:"status"`
	Website   sql.NullString `json:"website" db:"website"`
	Image     sql.NullString `json:"image_address" db:"image_address"`
	LinkedIn  sql.NullString `json:"linkedin" db:"linkedin"`
	GitHub    sql.NullString `json:"github" db:"github"`
	Instagram sql.NullString `json:"instagram" db:"instagram"`
	Citation  sql.NullString `json:"citation" db:"citation"`
	Surname   sql.NullString `json:"surname" db:"surname"`
	Username  string         `json:"username" db:"username"`
	Archived  bool           `json:"archived" db:"archived"`
}
