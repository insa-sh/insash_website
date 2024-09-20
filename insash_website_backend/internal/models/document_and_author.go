package models

type DocumentAndAuthor struct {
	Document Document `json:"document" db:"document"`
	Author   []Member `json:"author" db:"member"`
}
