package utils

import (
	"regexp"
	"unicode"

	"golang.org/x/text/runes"
	"golang.org/x/text/transform"
	"golang.org/x/text/unicode/norm"
)

func RemoveAccents(text string) string {
	t := transform.Chain(norm.NFD, runes.Remove(runes.In(unicode.Mn)), norm.NFC)
	result, _, _ := transform.String(t, text)
	return result
}

func RemoveSpecialChars(text string) string {

	m := regexp.MustCompile(`[^\w ]`)
	replaceBy := " "
	result := m.ReplaceAllString(text, replaceBy)
	return result

}

func NormalizeInputSearch(text string) string {
	return RemoveSpecialChars(RemoveAccents(text))
}

func NormalizeInputNumber(text string) string {
	m := regexp.MustCompile(`[^\d ]`)
	replaceBy := ""
	result := m.ReplaceAllString(text, replaceBy)
	return result
}

func NormalizeInputSlug(text string) string {
	m := regexp.MustCompile(`[^\w-]`)
	replaceBy := ""
	result := m.ReplaceAllString(text, replaceBy)
	return result
}
