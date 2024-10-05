
//APLICAR FILTRO DE ID PELICULA

const baseUrl = `https://api.themoviedb.org/3/movie/`;
const apiKey = '15d2ea6d0dc1d476efbca3eba2b9bbfb';
const langIso = 'language=es-ES';

//BUSCA PELICULAS POR OPCIONES MARCADAS EN EL SELECT
export async function getMovies(userOption) {
    try {
        const url = `${baseUrl}${userOption}?api_key=${apiKey}&${langIso}`;
        const response = await fetch(url);
        const json = await response.json();
        return json.results;
    } catch (error) {
        console.log(error);
    }
}

//----------------------------------------------------------------------------------------------------------------//
//ME TRAE LOS DATOS DE LA PELICULA POR ID. LA IDEA ES CLICKAR ALGUNA PELICULA Y QUE MUESTRE ESA INFO POR PANTALLA

async function fetchMovieDetails(movieId) { //LE PASAMOS UN ID PARA BUSCAR LOS DETALLES
    const url = `${baseUrl}${movieId}?api_key=${apiKey}&${langIso}`;
    const response = await fetch(url);
    return await response.json();
}

async function fetchMovieCredits(movieId) { //LE PASAMOS UN ID PARA BUSCAR LOS CREDITOS DE LAS PELICULAS (ACTORES, DIRECTORES)
    const url = `${baseUrl}${movieId}/credits?api_key=${apiKey}&${langIso}`;
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

export async function showMovieSearchDetails(movieId) {
    const movieData = await fetchMovieDetails(movieId);
    const creditsData = await fetchMovieCredits(movieId);

    //INFO DE LOS DETALLES
    const { id, original_title, overview, poster_path, release_date, vote_average, genres } = movieData;
    const categories = genres.map(genre => genre.name);

    //INFO DE LOS ACTORES Y DIRECTORES
    const { cast, crew } = creditsData;
    const actors = cast.map(member => member.name).slice(0, 5).join(', ');
    const profileActors = cast.map(profile => profile.profile_path).slice(0, 5);
    const director = crew.find(member => member.job.toLowerCase() === 'director')?.name ?? 'Not available';

    //PASAMOS LOS DATOS QUE NOS INTERESA PARA PINTARLOS EN LA PANTALLA
    const movie = { id, categories, original_title, overview, poster_path, release_date, vote_average, actors, profileActors, director };
    console.log(movie);
    //document.querySelector('pre').innerHTML = JSON.stringify(movie, false, 2)

    // Pinta los detalles en el contenedor de la película
    const container = document.getElementById('movie-container');
    container.innerHTML = `
        <div class="movie-card">
            <div class="movie-poster">
                <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.original_title}">
            </div>
            <div class="movie-details">
                <h2>${movie.original_title} (${movie.release_date.slice(0, 4)})</h2>
                <p><strong>Categorías:</strong> ${movie.categories}</p>
                <p><strong>Resumen:</strong> ${movie.overview}</p>
                <p class="rating">Rating: ${movie.vote_average}</p>
                <p class="actors"><strong>Actores principales:</strong> ${movie.actors}</p>
                <p class="director"><strong>Director:</strong> ${movie.director}</p>
                <div class="actors">
                    <strong>Actores principales:</strong>
                    <div class="actor-list">
                        ${profileActors.map(actor => `
                            <div class="actor">
                                <img src="https://image.tmdb.org/t/p/w500/${actor.profile_path}" alt="${actor.name}">
                                <p>${actor.name}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}
//------------------------------------------------------------------------------------------------------//
//Busqueda por recomendaciones
async function fetchMovieRecommendations(movieId) {
    const url = `${baseUrl}/${movieId}/recommendations?api_key=${apiKey}&${langIso}`;
    const response = await fetch(url);
    const json = await response.json();
    return json.results;
}

export async function getMovieRecommendations(movieId) {
    const moviesData = await fetchMovieRecommendations(movieId);

    return moviesData.slice(0, 4).map(movie => {
        const { id, genre_ids, original_title, overview, poster_path, release_date, vote_average } = movie;
        return { id, genre_ids, original_title, overview, poster_path, release_date, vote_average };
    })
}

//BBUSQUEDA POR STRING QUE LE PASAMOS POR EL INPUT
async function fetchSearchMovie(searchString) {
    const searchBaseUrl = 'https://api.themoviedb.org/3/search/movie';
    const url = `${searchBaseUrl}?api_key=${apiKey}&${langIso}&query=${searchString}`;
    const response = await fetch(url);
    const json = await response.json();
    return json.results;
}

export async function showMovieSearch(searchString) {
    const moviesData = await fetchSearchMovie(searchString);

    return moviesData.slice(0, 4).map(movie => {
        const { id, genre_ids, original_title, overview, poster_path, release_date, vote_average } = movie;
        return { id, genre_ids, original_title, overview, poster_path, release_date, vote_average };
    })

}



