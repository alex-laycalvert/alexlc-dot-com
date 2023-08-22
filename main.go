package main

import (
	"html/template"
	"log"
	"net/http"
	"os"
)

const (
	PAGES_DIR      = "templates/pages"
	LAYOUTS_DIR    = "templates/layouts"
	COMPONENTS_DIR = "templates/layouts"
)

func main() {
	log.Println("Starting server on port 3000...")
	http.HandleFunc("/", Handler)
	log.Fatalln(http.ListenAndServe(":3000", nil))
}

func Handler(res http.ResponseWriter, req *http.Request) {
	path := PAGES_DIR + req.URL.Path
	if path[len(path)-1] == '/' {
		path = path[0 : len(path)-1]
	}
	if _, err := os.Stat(path + ".html"); err != nil {
		if os.IsNotExist(err) {
			path += "/index"
			if _, err := os.Stat(path + ".html"); err != nil {
				if os.IsNotExist(err) {
					http.Error(res, req.URL.Path, http.StatusNotFound)
					log.Printf("404 " + req.URL.Path + " NOT FOUND (looking for '" + path + "')")
					return
				} else {
					http.Error(res, err.Error(), http.StatusInternalServerError)
					log.Printf("500 " + req.URL.Path + " INTERNAL SERVER ERROR (" + err.Error() + ")")
					return
				}
			}
		} else {
			http.Error(res, err.Error(), http.StatusInternalServerError)
			log.Printf("500 " + req.URL.Path + " INTERNAL SERVER ERROR (" + err.Error() + ")")
			return
		}
	}
	log.Printf("200 " + req.URL.Path + " OK")
	if err := RenderPage(res, req.URL.Path, struct{}{}); err != nil {
		http.Error(res, err.Error(), http.StatusInternalServerError)
		log.Printf("500 " + req.URL.Path + " INTERNAL SERVER ERROR (" + err.Error() + ")")
		return
	}
}

func RenderPage(res http.ResponseWriter, page string, data interface{}) error {
	if page[0] != '/' {
		page = "/" + page
	}
	tmpl := template.New("template")
	patterns := []string{LAYOUTS_DIR + "/base.html", PAGES_DIR + page + ".html", COMPONENTS_DIR + "/*.html"}
	var err error
	for _, pattern := range patterns {
		tmpl, err = tmpl.ParseGlob(pattern)
		if err != nil {
			return err
		}
	}
	return tmpl.ExecuteTemplate(res, "base", data)
}
