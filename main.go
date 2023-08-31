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
	COMPONENTS_DIR = "templates/components"
)

func main() {
	log.Println("Starting server on port 3000...")
	http.HandleFunc("/", Handler)
	http.Handle("/public/", http.StripPrefix("/public/", http.FileServer(http.Dir("public"))))
	log.Fatal(http.ListenAndServe(":3000", nil))
}

func Handler(res http.ResponseWriter, req *http.Request) {
	path := req.URL.Path
	if path[len(path)-1] == '/' {
		path = path[0 : len(path)-1]
	}
	filename := PAGES_DIR + path
	if _, err := os.Stat(filename + ".html"); err != nil {
		if os.IsNotExist(err) {
			path += "/index"
			filename = PAGES_DIR + path
			if _, err := os.Stat(filename + ".html"); err != nil {
				if os.IsNotExist(err) {
					http.Error(res, path, http.StatusNotFound)
					log.Printf("404 " + req.URL.Path + " NOT FOUND (looking for '" + filename + ".html')")
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
	if err := RenderPage(res, path, struct{}{}); err != nil {
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
