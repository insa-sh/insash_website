package models

type Member struct {
	UUID      string `json:"uuid" db:"uuid"`
	FirstName string `json:"firstname" db:"firstname"`
	LastName  string `json:"lastname" db:"lastname"`
	Year      int    `json:"year" db:"year"`
	Role      string `json:"role" db:"role"`
	Website   string `json:"website" db:"website"`
	Mail      string `json:"mail" db:"mail"`
	Image     string `json:"image_address" db:"image_address"`
	LinkedIn  string `json:"linkedin" db:"linkedin"`
	GitHub    string `json:"github" db:"github"`
	Citation  string `json:"citation" db:"citation"`
	Surname   string `json:"surname" db:"surname"`
}
