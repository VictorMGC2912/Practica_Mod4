import { listOptions } from "./listOptions-api";
import { showMovieSearch } from "./movie-id-fetch";
// import { searchString } from "./movie-search-api";
// import { addMovieGrid, clickGrid, createMovieGridElement } from "./movie-grid-api";
// import { addMovieList, clickList, createMovieListElement } from "./movie-list-api";
//753342
//showMovieSearchDetails(957452);
// Crear container del select y botones

const containerRoot = document.getElementById("root");
const containerButton = document.createElement("div");
containerButton.className = "buttons-container";
containerRoot.appendChild(containerButton);

//Crear elementos de entrada para filtros y botón de reset
const resetButton = document.createElement('button');
resetButton.className = 'reset';
resetButton.textContent = 'Reset Filtros';
containerButton.appendChild(resetButton);

resetButton.addEventListener('click', resetFilters); // FUNCION PARA RESETEAR FILTROS
function resetFilters() {
    inputBusqueda.value = '';
    selectCategorias.selectedIndex = 0;
    addMovieGrid();
}

// Crear input de entrada de valores para la busqueda por coincidencias
const inputBusqueda = document.createElement('input');
inputBusqueda.setAttribute('id', 'search')
inputBusqueda.setAttribute('type', 'text');
inputBusqueda.setAttribute('placeholder', 'Buscar...');
inputBusqueda.className = 'busqueda';
containerButton.appendChild(inputBusqueda);

//BUSQUEDA POR PALABRAS EN EL INPUT
inputBusqueda.addEventListener('input', (event) => {
    const inputValor = event.target.value;

    showMovieSearch(inputValor).then((datos) => {
        if (datos && datos.length > 0) {
            const movieContainer = document.getElementById('movieContainer');
            movieContainer.innerHTML = '';
            datos.forEach(movie => {
                const movieElement = createMovieGridElement(movie);
                movieContainer.appendChild(movieElement);
            })
        } else {
            console.log('no se encontraron resultados');
        }
    }).catch(error => {
        console.log('error en la busqueda', error);
    });
});

// Crear desplegable de categorias
const selectCategorias = document.createElement('select');
selectCategorias.setAttribute('name', 'categories');
selectCategorias.className = 'select';
addFilterOptions(selectCategorias); // Añadir opciones de categorías
containerButton.appendChild(selectCategorias);

// // Funciones auxiliares existentes (addFilterOptions)

function addFilterOptions(select) {
    Object.entries(listOptions).forEach(([key, value]) => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = key;
        select.appendChild(option);
    });
}

//Crear botones GRID y LIST
const buttonGrid = document.createElement("button");
buttonGrid.className = "fake-button";
containerButton.appendChild(buttonGrid);

const buttonList = document.createElement("button");
buttonList.className = "fake-button";
containerButton.appendChild(buttonList);

//Crear SVG LIST y GRID
let svgListNs = "http://www.w3.org/2000/svg";
const svgList = document.createElementNS(svgListNs, "svg");
svgList.setAttribute("viewBox", "0 0 448 512");
const svgListPath = document.createElementNS(svgListNs, "path");
svgListPath.setAttribute("d", "M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z");
svgListPath.setAttribute("fill", "#black");
svgList.appendChild(svgListPath);
buttonList.appendChild(svgList);

let svgGridNs = "http://www.w3.org/2000/svg";
const svgGrid = document.createElementNS(svgGridNs, "svg");
svgGrid.setAttribute("viewBox", "0 0 320 512");
const svgGridPath = document.createElementNS(svgGridNs, "path");
svgGridPath.setAttribute("d", "M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z");
svgGridPath.setAttribute("fill", "black");
svgGrid.appendChild(svgGridPath);
buttonGrid.appendChild(svgGrid);

//AÑADIR PELICULAS A ROOT
const movieContainer = document.createElement("div");
movieContainer.setAttribute('id', 'movieContainer');
movieContainer.className = "grid";
const divRoot = document.getElementById("root");
divRoot.className = "fondo-grid";
divRoot.appendChild(movieContainer);

//FUNCIONES PARA CREAR ELEMENTOS DE LAS PELICULAS GRID
function createIdElement(id) {
    const element = document.createElement("p");
    element.className = 'movie-id';
    element.textContent = id;
    return element;
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

//FUNCIONES PARA CREAR ELEMENTOS DE LAS PELICULAS LIST
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

// Traer las películas desde la API
const baseUrl = `https://api.themoviedb.org/3/movie/`;
const apiKey = '15d2ea6d0dc1d476efbca3eba2b9bbfb';
const langIso = 'language=es-ES';

//Agregar las películas al contenedor en forma de grid o list, segun la clase que tenga.
selectCategorias.addEventListener('change', function () {
    const selectCategory = this.value;
    //QUIERO QUE SI EL MOVIECONTAINER ESTA EN GRID, ME SIGA FILTRANDO LAS CATEGORIAS POR GRID, IDEM CON LIST, PERO ME ESTA FALLANDO, SOLO FILTRA EN MODO GRID
    if (movieContainer.querySelectorAll('grid')) {

        const movies = getMovies(selectCategory);
        addMovieGrid(movies);
    } else {
        const movies = getMovies(selectCategory);
        addMovieList(movies);
    }
});

async function getMovies(userOption) {
    try {
        const url = `${baseUrl}${userOption}?api_key=${apiKey}&${langIso}`;
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        return json.results;
    } catch (error) {
        console.log(error);
    }
}

//FUNCION PARA AÑADIR LOS ELEMENTOS AL BODY EN FORMA DE GRID
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
    movieElement.appendChild(createIdElement(movieObj.id));
    movieElement.appendChild(createGridPosterElement(movieObj.poster_path));
    movieElement.appendChild(createGridTitleElement(movieObj.original_title));
    movieElement.appendChild(createGridDataElement(movieObj.vote_average, movieObj.release_date));
    movieElement.appendChild(createGridDescriptionElement(movieObj.overview));

    movieElement.addEventListener('click', () => {  //FUNCION PARA CLICKAR Y QUE NOS LLEVE A UNA PAGINA NUEVA CON EL ID DE ESA PELICULA
        const movieUrl = `/movie-details.html?id=${movieObj.id}`;
        window.open(movieUrl, '_blank');
        console.log(movieUrl);
    });

    return movieElement;
}

//FUNCION PARA AÑADIR LOS ELEMENTOS AL BODY EN FORMA DE LIST
async function addMovieList() {
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

function createMovieListElement(movieObj) {
    const movieElement = document.createElement("div");

    movieElement.className = "movie-list";
    movieElement.appendChild(createListPosterElement(movieObj.poster_path));
    movieElement.appendChild(createListTitleElement(movieObj.original_title));
    movieElement.appendChild(createListDescriptionElement(movieObj.overview));
    movieElement.appendChild(createListDataElement(movieObj.vote_average, movieObj.release_date));

    return movieElement;
}

// ESCUCHA DE LOS EVENTOS CLICK
buttonGrid.addEventListener('click', clickGrid);
buttonList.addEventListener('click', clickList);

function clickGrid() {
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
function clickList() {
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
addMovieGrid();

