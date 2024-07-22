package models

import (
	"database/sql"

	"github.com/lib/pq"
)

type Document struct {
	UUID           string         `json:"uuid" db:"uuid"`
	Title          string         `json:"title" db:"title"`
	Type           string         `json:"type" db:"type"`
	Tags           pq.StringArray `json:"tags" db:"tags"`
	Content        string         `json:"content_address" db:"content_address"`
	Date           string         `json:"date" db:"date"`
	Description    string         `json:"description" db:"description"`
	Image          string         `json:"image_address" db:"image_address"`
	Slug           string         `json:"slug" db:"slug"`
	IsImageIcon    bool           `json:"is_image_icon" db:"is_image_icon"`
	Archived       bool           `json:"archived" db:"archived"`
	ProjectAddress sql.NullString `json:"project_address" db:"project_address"`
}
