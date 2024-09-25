import { getMovies } from '../movie-id-fetch'


export async function addMovieGrid() {
    const movieContainer = document.getElementById('movieContainer');
    if (!movieContainer) {
        console.error('No se el contenedor de peliculas');
        return;
    }
    movieContainer.innerHTML = ''; //Limpiar el contenedor antes de añadir nuevas peliculas
    const movies = await getMovies(selectCategorias.value);
    if (movies && movies.length > 0) {
        movies.forEach(movie => {
            const movieElement = createMovieGridElement(movie);
            movieContainer.appendChild(movieElement);
        })
    }
}


export function createMovieGridElement(movieObj) {
    const movieElement = document.createElement("div");

    movieElement.className = "movie-grid";
    movieElement.appendChild(createGridPosterElement(movieObj.poster_path));
    movieElement.appendChild(createGridTitleElement(movieObj.original_title));
    movieElement.appendChild(createGridDataElement(movieObj.vote_average, movieObj.release_date));
    movieElement.appendChild(createGridDescriptionElement(movieObj.overview));

    return movieElement;
}

function createGridPosterElement(poster_path) {
    const img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w500${poster_path}`;
    img.alt = "Movie Poster";
    img.className = 'movie-poster-grid';
    return img;
}

function createGridTitleElement(original_title) {
    const element = document.createElement("div");
    element.className = "movie-title-grid";
    element.textContent = original_title;
    return element;
}

function createGridDataElement(vote_average, release_date) {
    const element = document.createElement("div");
    element.className = "movie-data-grid";
    const releaseDate = release_date.split("-").shift();
    const voteAverage = vote_average.toFixed(2);
    element.textContent = `Rating: ${voteAverage} | ${releaseDate}`;
    return element;
}

function createGridDescriptionElement(overview) {
    const element = document.createElement("div");
    element.className = "movie-description-grid";
    element.textContent = overview;
    return element;
}

export function clickGrid() {
    addMovieGrid(); // Cargar las películas en formato de grid

    // Cambiar la clase del contenedor para la vista de grid
    const fondoGrid = document.querySelectorAll('.fondo-list');
    fondoGrid.forEach((grid) => grid.classList.remove('fondo-list'));
    fondoGrid.forEach((grid) => grid.classList.add('fondo-grid'));

    // Cambiar la vista de grid a grid
    const vistaGrid = document.querySelectorAll('.list');
    vistaGrid.forEach((grid) => grid.classList.remove('list'));
    vistaGrid.forEach((grid) => grid.classList.add('grid'));

    // Cambiar cada película de "movie-list" a "movie-grid"
    const movieList = document.querySelectorAll('.movie-list')
    movieList.forEach((movie) => movie.classList.remove('movie-list'));
    movieList.forEach((movie) => movie.classList.add('movie-grid'));

    // Cambiar las clases de los elementos de las películas
    const posterList = document.querySelectorAll('.movie-poster-list');
    posterList.forEach((poster) => poster.classList.remove('movie-poster-list'));
    posterList.forEach((poster) => poster.classList.add('movie-poster-grid'));

    const titleList = document.querySelectorAll('.movie-title-list');
    titleList.forEach((title) => title.classList.remove('movie-title-list'));
    titleList.forEach((title) => title.classList.add('movie-title-grid'));

    const dataList = document.querySelectorAll('.movie-data-list');
    dataList.forEach((data) => data.classList.remove('movie-data-list'));
    dataList.forEach((data) => data.classList.add('movie-data-grid'));

    const descriptionList = document.querySelectorAll('.movie-description-list');
    descriptionList.forEach((description) => description.classList.remove('movie-description-list'));
    descriptionList.forEach((description) => description.classList.add('movie-description-grid'));

    // Otras clases si son necesarias (directores, actores)
    const directorList = document.querySelectorAll('.movie-director-list');
    directorList.forEach((director) => director.classList.remove('movie-director-list'));
    directorList.forEach((director) => director.classList.add('movie-director-grid'));

    const actorsList = document.querySelectorAll('.movie-actors-list');
    actorsList.forEach((actors) => actors.classList.remove('movie-actors-list'));
    actorsList.forEach((actors) => actors.classList.add('movie-actors-grid'));

}