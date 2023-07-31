console.log("Welcome!!");

const APILINK = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0f892d78c561be83bfcfccb734b96aff&page=1";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?api_key=0f892d78c561be83bfcfccb734b96aff&query=";
const IMG_PATH = "https://image.tmdb.org/t/p/w500";



const main = document.getElementById('section');
const form = document.getElementById('form');
const search = document.getElementById('query');

returnMovies(APILINK);
function returnMovies(url) {
    fetch(url).then(res => res.json())
        .then(function (data) {
            console.log(data.results);
            data.results.forEach(element => {
                console.log(element);
                const div_row = document.createElement('div');
                div_row.setAttribute('class', 'row');
                const div_column = document.createElement('div');
                div_column.setAttribute('class', 'column');
                const div_card = document.createElement('div');
                div_card.setAttribute('class', 'card');

                    // Add a click event listener to each movie card
                    div_card.addEventListener('click', () => {
                        // Extract movie details from the clicked card
                        const movieName = element.title;
                        const moviePoster = IMG_PATH + element.poster_path;
                        const movieid= element.id;
                        

                        // Encode movie details and redirect to the review page
                    const encodedMovieName = encodeURIComponent(movieName);
                    const encodedMoviePoster = encodeURIComponent(moviePoster);
                    const encodedMovieid =encodeURIComponent(movieid);
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
        });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = ''

    const searchItem = search.value;

    if (searchItem) {
        returnMovies(SEARCHAPI + searchItem);
        search.value = "";
    }
});





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