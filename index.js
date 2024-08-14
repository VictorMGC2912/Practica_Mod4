import { movies } from "./dataMovie";
console.log(movies);

//Crear botones GRID y LIST
const containerRoot = document.getElementById("root");
const containerButton = document.createElement("div");
containerButton.className = "buttons-container";
containerRoot.appendChild(containerButton);

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
movieContainer.className = "grid";
const movieElement = createMovieElement(movies);
const divRoot = document.getElementById("root");
divRoot.className = "fondo-grid";
divRoot.appendChild(movieContainer);

//FUNCIONES PARA CREAR ELEMENTOS DE LAS PELICULAS
function createPosterElement(poster) {
    const element = document.createElement("img");
    element.src = poster;
    element.className = 'movie-poster-grid';
    return element;
}

function createTitleElement(title) {
    const element = document.createElement("div");
    element.className = "movie-title-grid";
    element.textContent = title;
    return element;
}

function createDataElement(rating, year) {
    const element = document.createElement("div");
    element.className = "movie-data-grid";
    element.textContent = `Rating: ${rating} | ${year}`;
    return element;
}

function createDescriptionElement(description) {
    const element = document.createElement("div");
    element.className = "movie-description-grid";
    element.textContent = description;
    return element;
}
function createDirectorElement(director) {
    const element = document.createElement("div");
    element.className = "movie-director-grid";
    element.textContent = `Director: ${director}`;
    return element;
}
function createActorsElement(actors) {
    const element = document.createElement("div");
    element.className = "movie-actors-grid";
    element.textContent = `Actors: ${actors}`;
    return element
}

//FUNCION PARA AÑADIR LOS ELEMENTOS AL BODY
function createMovieElement(movies) {
    let container = movieContainer;

    movies.forEach((movie) => {
        const { poster, title, rating, year, description, director, actors } = movie;
        const movieElement = document.createElement("div");

        movieElement.className = "movie-grid";
        movieElement.appendChild(createPosterElement(poster));
        movieElement.appendChild(createTitleElement(title));
        movieElement.appendChild(createDataElement(rating, year));
        movieElement.appendChild(createDescriptionElement(description));
        movieElement.appendChild(createDirectorElement(director));
        movieElement.appendChild(createActorsElement(actors));

        container.appendChild(movieElement);
    })
}

// ESCUCHA DE LOS EVENTOS CLICK
buttonGrid.addEventListener('click', clickGrid);
buttonList.addEventListener('click', clickList);

function clickGrid() {
    const fondoGrid = document.querySelectorAll('.fondo-list');
    fondoGrid.forEach((grid) => grid.classList.remove('fondo-list'));
    fondoGrid.forEach((grid) => grid.classList.add('fondo-grid'));

    const vistaGrid = document.querySelectorAll('.list');
    vistaGrid.forEach((grid) => grid.classList.remove('list'));
    vistaGrid.forEach((grid) => grid.classList.add('grid'));

    const movieList = document.querySelectorAll('.movie-list')
    movieList.forEach((movie) => movie.classList.remove('movie-list'));
    movieList.forEach((movie) => movie.classList.add('movie-grid'));

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

    const directorList = document.querySelectorAll('.movie-director-list');
    directorList.forEach((director) => director.classList.remove('movie-director-list'));
    directorList.forEach((director) => director.classList.add('movie-director-grid'));

    const actorsList = document.querySelectorAll('.movie-actors-list');
    actorsList.forEach((actors) => actors.classList.remove('movie-actors-list'));
    actorsList.forEach((actors) => actors.classList.add('movie-actors-grid'));

}
function clickList() {
    const fondoList = document.querySelectorAll('.fondo-grid');
    fondoList.forEach((list) => list.classList.remove('fondo-grid'));
    fondoList.forEach((list) => list.classList.add('fondo-list'));

    const vistaList = document.querySelectorAll('.grid');
    vistaList.forEach((list) => list.classList.remove('grid'));
    vistaList.forEach((list) => list.classList.add('list'));

    const movieList = document.querySelectorAll('.movie-grid')
    movieList.forEach((movie) => movie.classList.remove('movie-grid'));
    movieList.forEach((movie) => movie.classList.add('movie-list'));

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

    const directorList = document.querySelectorAll('.movie-director-grid');
    directorList.forEach((director) => director.classList.remove('movie-director-grid'));
    directorList.forEach((director) => director.classList.add('movie-director-list'));

    const actorsList = document.querySelectorAll('.movie-actors-grid');
    actorsList.forEach((actors) => actors.classList.remove('movie-actors-grid'));
    actorsList.forEach((actors) => actors.classList.add('movie-actors-list'));

}


