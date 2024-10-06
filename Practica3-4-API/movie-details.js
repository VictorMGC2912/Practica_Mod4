import { showMovieSearchDetails } from "./movie-id-fetch";


//FUNCION PARA SACAR EL ID DE LA PELICULA QUE HEMOS TRAIDO
function getMovieIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return (params.get('id'));
}
const movieId = getMovieIdFromUrl(); //PONEMOS ESA ID OBTENIDA EN UNA CONSTANTE
// console.log(movieId);

showMovieSearchDetails(movieId);

