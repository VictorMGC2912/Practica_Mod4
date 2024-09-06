import { categories, movies } from "./dataMovie";

let movieContainer;
const containerRoot = document.getElementById("root");
const containerButton = document.createElement("div");
containerButton.className = "buttons-container";
containerRoot.appendChild(containerButton);

export function initFilter() {
    const select = document.createElement('select');
    select.setAttribute('name', 'categories');
    addFilterOptions(select);
    select.addEventListener('change', () => {
        const selectedCategory = select.value;
        filterMovie(selectedCategory);
    })
}

function filterMovie(categories) {
    const filterFilm = movies.filter(movie => {
        console.log("OBJETO PELICULA", movie.category);
        console.log("OBJETO CATEGORIA", categories);

        return movie.category === categories
    })
    addMovieContainer(filterFilm);
}

function addMovieContainer(movies) {
    movieContainer.innerHTML = "";
    movies.forEach(movie => {
        const movieItem = createMovieGridElement(movies)
    })
}

function addFilterOptions(select) {
    Object.entries(categories).forEach(([key, value]) => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = value;
        select.appendChild(option);
    })
    select.className = "select";
    containerButton.appendChild(select);
}