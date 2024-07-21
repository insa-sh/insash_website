package models

type DocumentAuthor struct {
	Article_UUID string `json:"article_uuid" db:"document_uuid"`
	Member_UUID  string `json:"member_UUID" db:"member_uuid"`
}
