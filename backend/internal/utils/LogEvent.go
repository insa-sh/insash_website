package utils

import (
	"fmt"
	"time"
)

func LogEvent(s string) {

	currentTime := time.Now()
	log := "[" + currentTime.Format("02-01-2006 03:04:05 0700") + "] " + s + "\n"

	fmt.Print(log)

	// f, _ := os.OpenFile("logs.txt", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)

	// _, err := f.WriteString(log)

	// if err != nil {
	// 	fmt.Println("erreur ecriture : ", err)
	// 	f.Close()
	// 	return
	// }

	// err = f.Close()

	// if err != nil {
	// 	fmt.Println("erreur fermeture : ", err)
	// 	return
	// }

}
