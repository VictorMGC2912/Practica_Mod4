// import { showMovieSearch, getMovieRecommendations, getMovieDetails } from "./movie-id-fetch";
// import { createMovieGridElement } from "./index-api";

// const inputBusqueda = document.createElement('input');
// //BUSQUEDA POR PALABRAS EN EL INPUT
// export function searchString() {
//     inputBusqueda.addEventListener('input', (event) => {
//         const inputValor = event.target.value;

//         showMovieSearch(inputValor).then((datos) => {
//             if (datos && datos.length > 0) {
//                 const movieContainer = document.getElementById('movieContainer');
//                 movieContainer.innerHTML = '';
//                 datos.forEach(movie => {
//                     const movieElement = createMovieGridElement(movie);
//                     movieContainer.appendChild(movieElement);
//                 })
//             } else {
//                 console.log('no se encontraron resultados');
//             }
//         }).catch(error => {
//             console.log('error en la busqueda', error);
//         });
//     });
// }

// //Desde movie-id-fetch, me da los valores de la pelicula que le pase por ID en el input. SOLO SE VE EN MODO JSON
// inputBusqueda.addEventListener('input', (event) => {
//     const inputMovieId = event.target.value;

//     getMovieDetails(inputMovieId).then((id) => {
//         if (id && id.length > 0) {
//             const movieContainer = document.getElementById('movieContainer');
//             movieContainer.innerHTML = '';
//             id.forEach(movie => {
//                 const movieElement = createMovieGridElement(movie);
//                 movieContainer.appendChild(movieElement);
//             })
//         } else {
//             console.log('no se encontraron resultados');
//         }
//     }).catch(error => {
//         console.log('error en la busqueda', error);
//     });
// });