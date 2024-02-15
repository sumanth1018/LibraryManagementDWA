let searchInputE1 = document.getElementById("searchInput");
let searchResultsE1 = document.getElementById("searchResults");
let spinnerE1 = document.getElementById("spinner");

function createAndAppend(search_results) {
    spinnerE1.classList.add("d-none");
    let headingE1 = document.createElement("h1");
    headingE1.textContent = "Popular Books";
    searchResultsE1.appendChild(headingE1);
    for (let result of search_results) {
        let {
            author,
            imageLink,
            title
        } = result;

        let bookContainerE1 = document.createElement("div");
        bookContainerE1.classList.add("col-11", "col-md-5", "m-4");
        searchResultsE1.appendChild(bookContainerE1);

        let bookImage = document.createElement("img");
        bookImage.src = imageLink;
        bookImage.classList.add("w-100");
        bookContainerE1.appendChild(bookImage);

        let bookHeadingE1 = document.createElement("p");
        bookHeadingE1.textContent = author;
        bookHeadingE1.classList.add("text-center", "book-title");
        bookContainerE1.appendChild(bookHeadingE1);

    }
}

function makeRequest(event) {
    if (event.key === "Enter") {
        spinnerE1.classList.remove("d-none");
        let searchInputValue = searchInputE1.value;
        let options = {
            method: "GET",
        };
        let URL = "https://apis.ccbp.in/book-store?title=" + searchInputValue;
        fetch(URL, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                createAndAppend(search_results);
            });
    }
}

searchInputE1.addEventListener("keydown", makeRequest);