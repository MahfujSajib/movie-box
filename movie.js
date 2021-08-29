fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f96ac62d92ada173838748fa0f087eef')
    .then(res => res.json())
    .then(data => setMovies(data.results))

function setMovies(movies) {
    const movieContainer = document.getElementById('movie-container');
    const movieSpinner = document.getElementById('movie-spinner');
    movieSpinner.style.display = "none";
    for (const movie of movies) {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('col-md-3')
        movieDiv.innerHTML = `
            <div class="shadow rounded p-3 m-4">
                 <img class="img-fluid" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="">
                 <h3>${movie.title}</h3>
                 <p>${movie.overview.slice(0, 100)}</p>
                 <button onclick="loadMovieDetails('${movie.id}')" class="btn btn-primary">Show details</button>
            </div>
         
        
        `
        movieContainer.appendChild(movieDiv)
    }
}

const loadMovieDetails = (id) => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f96ac62d92ada173838748fa0f087eef`)
        .then(res => res.json())
        .then(data => setMovieDetails(data))

}
const setMovieDetails = (movi) => {
    const movieDetails = document.getElementById('movie-details');
    movieDetails.innerHTML = ""
    const movieBoxDiv = document.createElement('div')
    movieBoxDiv.innerHTML = `
       <div class="shadow rounded p-3 m-4">
           <img class="img-fluid" src="https://image.tmdb.org/t/p/w500/${movi.poster_path}" alt="">
           <h3>${movi.original_title}</h3>
           <p>${movi.overview}</p>
           <p>Release-Date:${movi.release_date}</p>
           <p>Run-Time:${movi.runtime}</p>
        </div>
   
    `
    movieDetails.appendChild(movieBoxDiv)
}