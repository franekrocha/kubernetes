package main

import (
    "fmt"
    "log"
    "net/http"
    "io/ioutil"
    "os"
)

func homePage(w http.ResponseWriter, r *http.Request) {

    // Read the URL environment varible
    url := os.Getenv("URL")

    // Add Envoy headers to the request
    headers := []string{"x-request-id", "x-b3-traceid", "x-b3-spanid", "x-b3-parentspanid", "x-b3-sampled", "x-b3-flags"}
    for _, header := range headers {
        value := r.Header.Get(header);
        if len(value) > 0 {
            w.Header().Set(header, value)
        }
    }

    // Call the URL
    response, err := http.Get(url)
    if err != nil {
        fmt.Print(err.Error())
        os.Exit(1)
    }
    responseData, err := ioutil.ReadAll(response.Body)
    if err != nil {
        log.Fatal(err)
    }

    // Return the response
    fmt.Fprintf(w, string(responseData))

}

func handleRequests() {
    http.HandleFunc("/", homePage)
    log.Fatal(http.ListenAndServe(":8080", nil))
}

func main() {
    handleRequests()
}
