import { getMovies } from '../movie-id-fetch'

export async function addMovieList() {
    const movieContainer = document.getElementById('movieContainer');
    if (!movieContainer) {
        console.error('No se el contenedor de peliculas');
        return;
    }
    movieContainer.innerHTML = ''; //Limpiar el contenedor antes de añadir nuevas peliculas
    const movies = await getMovies(selectCategorias.value);
    if (movies && movies.length > 0) {
        movies.forEach(movie => {
            const movieElement = createMovieListElement(movie);
            movieContainer.appendChild(movieElement);
        })
    }
}

export function createMovieListElement(movieObj) {
    const movieElement = document.createElement("div");

    movieElement.className = "movie-list";
    movieElement.appendChild(createListPosterElement(movieObj.poster_path));
    movieElement.appendChild(createListTitleElement(movieObj.original_title));
    movieElement.appendChild(createListDescriptionElement(movieObj.overview));
    movieElement.appendChild(createListDataElement(movieObj.vote_average, movieObj.release_date));

    return movieElement;
}

function createListPosterElement(poster_path) {
    const img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w500${poster_path}`;
    img.alt = "Movie Poster";
    img.className = 'movie-poster-list';
    return img;
}

function createListTitleElement(original_title) {
    const element = document.createElement("div");
    element.className = "movie-title-list";
    element.textContent = original_title;
    return element;
}

function createListDataElement(vote_average, release_date) {
    const element = document.createElement("div");
    element.className = "movie-data-list";
    const releaseDate = release_date.split("-").shift();
    const voteAverage = vote_average.toFixed(2);
    element.textContent = `Rating: ${voteAverage} | ${releaseDate}`;
    return element;
}
function createListDescriptionElement(overview) {
    const element = document.createElement("div");
    element.className = "movie-description-list";
    element.textContent = overview;
    return element;
}

export function clickList() {
    addMovieList(); // Cargar las películas en formato de lista

    // Cambiar la clase del contenedor para la vista de lista
    const fondoList = document.querySelectorAll('.fondo-grid');
    fondoList.forEach((list) => list.classList.remove('fondo-grid'));
    fondoList.forEach((list) => list.classList.add('fondo-list'));

    // Cambiar la vista de grid a list
    const vistaList = document.querySelectorAll('.grid');
    vistaList.forEach((list) => list.classList.remove('grid'));
    vistaList.forEach((list) => list.classList.add('list'));

    // Cambiar cada película de "movie-grid" a "movie-list"
    const movieList = document.querySelectorAll('.movie-grid');
    movieList.forEach((movie) => movie.classList.remove('movie-grid'));
    movieList.forEach((movie) => movie.classList.add('movie-list'));

    // Cambiar las clases de los elementos de las películas //NO ESTA CAMBIANDO LAS CLASES A PARTIR DE AQUI, PUEDE SER PORQUE ME EN LAS FUNCIONES DE CREAR 
    const posterList = document.querySelectorAll('.movie-poster-grid');
    posterList.forEach((poster) => poster.classList.remove('movie-poster-grid'));
    posterList.forEach((poster) => poster.classList.add('movie-poster-list'));

    const titleList = document.querySelectorAll('.movie-title-grid');
    titleList.forEach((title) => title.classList.remove('movie-title-grid'));
    titleList.forEach((title) => title.classList.add('movie-title-list'));

    const dataList = document.querySelectorAll('.movie-data-grid');
    dataList.forEach((data) => data.classList.remove('movie-data-grid'));
    dataList.forEach((data) => data.classList.add('movie-data-list'));

    const descriptionList = document.querySelectorAll('.movie-description-grid');
    descriptionList.forEach((description) => description.classList.remove('movie-description-grid'));
    descriptionList.forEach((description) => description.classList.add('movie-description-list'));

    // Otras clases si son necesarias (directores, actores)
    const directorList = document.querySelectorAll('.movie-director-grid');
    directorList.forEach((director) => director.classList.remove('movie-director-grid'));
    directorList.forEach((director) => director.classList.add('movie-director-list'));

    const actorsList = document.querySelectorAll('.movie-actors-grid');
    actorsList.forEach((actors) => actors.classList.remove('movie-actors-grid'));
    actorsList.forEach((actors) => actors.classList.add('movie-actors-list'));
}