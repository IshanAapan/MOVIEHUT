console.log("Welcome!!");

const APILINK = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0f892d78c561be83bfcfccb734b96aff";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?api_key=0f892d78c561be83bfcfccb734b96aff&query=";
const IMG_PATH = "https://image.tmdb.org/t/p/w500";



const main = document.getElementById('section');
const form = document.getElementById('form');
const search = document.getElementById('query');
const paginationContainer = document.getElementById('pagination');

let isSearch = false; // Default state is not searching


returnMovies(APILINK);
function returnMovies(url, page = 1) {
    fetch(`${url}&page=${page}`)
        .then(res => res.json())
        .then(function (data) {
            console.log(data.results);
            main.innerHTML = '';

            if (data.results.length === 0) {
                const notFoundMessage = document.createElement('h3');
                notFoundMessage.textContent = "Not Found";
                main.appendChild(notFoundMessage);
                paginationContainer.innerHTML = ''; // Clear pagination when not found
                isSearch = true; // Update search state

            }
            else {
                data.results.forEach(element => {
                    console.log(element);
                    const div_row = document.createElement('div');
                    div_row.setAttribute('class', 'row');
                    const div_column = document.createElement('div');
                    div_column.setAttribute('class', 'column');
                    const div_card = document.createElement('div');
                    div_card.setAttribute('class', 'card');
                    div_card.setAttribute('id', 'card_id');

                    // Add a click event listener to each movie card
                    div_card.addEventListener('click', () => {
                        // Extract movie details from the clicked card
                        const movieName = element.title;
                        const moviePoster = IMG_PATH + element.poster_path;
                        const movieid = element.id;


                        // Encode movie details and redirect to the review page
                        const encodedMovieName = encodeURIComponent(movieName);
                        const encodedMoviePoster = encodeURIComponent(moviePoster);
                        const encodedMovieid = encodeURIComponent(movieid);
                        window.location.href = `./review-page.html?movieName=${encodedMovieName}&moviePoster=${encodedMoviePoster}&movieid=${encodedMovieid}`;
                    });


                    const center = document.createElement('center');
                    const img = document.createElement('img');
                    img.setAttribute('class', 'thumbnail');
                    img.setAttribute('id', 'image');
                    const title = document.createElement('h3');
                    title.setAttribute('id', 'title');

                    title.innerHTML = `${element.title}`;
                    img.src = IMG_PATH + element.poster_path;

                    center.appendChild(img);
                    div_card.appendChild(center);
                    div_card.appendChild(title);
                    div_column.appendChild(div_card);
                    div_row.appendChild(div_column);

                    main.appendChild(div_row);

                });

                // Create Bootstrap pagination
                createPaginationButtons(data.total_pages, page);
                isSearch = false; // Update search state
            }

        });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = ''

    const searchItem = search.value;

    if (searchItem) {
        returnMovies(SEARCHAPI + searchItem);
        search.value = "";
    } else {
        returnMovies(APILINK);
    }
});


function createPaginationButtons(totalPages, currentPage) {
    paginationContainer.innerHTML = '';

    const maxPages = Math.min(totalPages, 10); // Display up to 5 pagination buttons

    // const ul = document.createElement('ul');
    // ul.classList.add('pagination');

    // const li = document.createElement('button');
    // for (let i = 1; i <= maxPages; i++) {
    //     li.classList.add('page-item');
    //     if (i === currentPage) {
    //         li.classList.add('active');
    //     }
    for (let i = 1; i <= maxPages; i++) {

        const button = document.createElement('button');
        // button.classList.add('page-link');
        button.textContent = i;
        if (i === currentPage) {
            button.classList.add('active');
        }
        button.addEventListener('click', () => {
            main.innerHTML = '';
            returnMovies(APILINK, i);
        });

        // li.appendChild(button);
        // ul.appendChild(li);
        paginationContainer.appendChild(button);
    }

}

window.addEventListener('popstate', () => {
    if (isSearch) {
        main.innerHTML = ''; // Clear existing content
        returnMovies(APILINK); // Load main page content
    }
});

// function returnMovies(url, page = 1) {
//     fetch(`${url}&page=${page}`)
//         .then(res => res.json())
//         .then(function (data) {
//             if (data.results.length === 0) {
//                 const notFoundMessage = document.createElement('h3');
//                 notFoundMessage.textContent = "Not Found";
//                 main.appendChild(notFoundMessage);
//                 paginationContainer.innerHTML = ''; // Clear pagination when not found
//             } else {
//                 main.innerHTML = '';
//                 data.results.forEach(element => {
//                     // ... (Rest of your movie card creation code)
//                 });

//                 createPaginationButtons(data.total_pages, page);
//             }
//         });
// }





// function getusers_body() {
//     const button = document.getElementById('post-btn');
//     button.addEventListener('click', async _ => {
//         try {
//             const response = await fetch('yourUrl',
//                 {
//                     method: 'post',
//                     body: { // Your body
//                     }
//                 });
//             console.log('Completed!', response);
//         }
//         catch (err) { console.error(`Error: ${err}`); }
//     });
// }






// function returnMoviesbyid(url,id){
//     fetch(url).then(res => res.json())
//         .then(function (data) {
//             console.log(data)
//         });
// }