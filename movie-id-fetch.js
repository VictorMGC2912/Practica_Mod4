//APLICAR FILTRO DE ID PELICULA
import { addMovieGrid } from "./index-api";

const baseUrl = `https://api.themoviedb.org/3/movie/`;
const apiKey = '15d2ea6d0dc1d476efbca3eba2b9bbfb';
const langIso = 'language=es-ES';

//Busqueda por ID
async function fetchMovieDetails(movieId) {
    const url = `${baseUrl}${movieId}?api_key=${apiKey}&${langIso}`;
    const response = await fetch(url);
    return response.json();
}

async function fetchMovieCredits(movieId) {
    const url = `${baseUrl}${movieId}/credits?api_key=${apiKey}&${langIso}`;
    const response = await fetch(url);
    return await response.json();
}

export async function getMovieDetails(movieId) {
    const movieData = await fetchMovieDetails(movieId);
    const creditsData = await fetchMovieCredits(movieId);

    const { id, title, overview, poster_path: poster, release_date, genres } = movieData;
    const year = release_date.split('-')[0];
    const categories = genres.map(genre => genre.name);

    const { cast, crew } = creditsData;
    const actors = cast.map(member => member.name).slice(0, 5).join(', ');
    const director = crew.find(member => member.job.toLowerCase() === 'director')?.name ?? ('not available');

    const movie = { id, title, overview, poster, year, categories, actors, director };
    document.querySelector('pre').innerHTML = JSON.stringify(movie, false, 2);
}


//console.log(showMovieDetail());

//Busqueda de pelicula por string

async function fetchSearchMovie(searchString) {
    const searchBaseUrl = 'https://api.themoviedb.org/3/search/movie';
    const url = `${searchBaseUrl}?api_key=${apiKey}&${langIso}&query=${searchString}`;
    const response = await fetch(url);
    const json = await response.json();
    return json.results;
}

export async function showMovieSearch(searchString) {
    const moviesData = await fetchSearchMovie(searchString);

    return moviesData.map(movie => {
        const { id, title, overview, poster_path: poster, release_date, vote_average } = movie;
        const year = release_date.split('-')[0];
        const voteAverage = vote_average.toFixed(2);
        return { id, title, overview, poster, year, voteAverage };
    })
    //document.querySelector('pre').innerHTML = JSON.stringify(movies, false, 2);
}
// //showMovieSearch('batman');
