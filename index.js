//import { movie } from "/dataMovie.js";

function createPosterElement(poster) {
    const element = document.createElement("img");
    element.src = poster;
    element.className = 'movie-poster';
    return element;
  }
  
  function createTitleElement(title) {
    const element = document.createElement("div");
    element.className = "movie-title";
    element.textContent = title;
    return element;
  }
  
  function createDataElement(rating, year) {
    const element = document.createElement("div");
    element.className = "movie-data";
    element.textContent = `Rating: ${rating} | ${year}`;
    return element;
  }
  
  function createMovieElement(movieObj) {
    const movieElement = document.createElement("div");
    movieElement.className = "movie";
    movieElement.appendChild(createPosterElement(movieObj.poster));
    movieElement.appendChild(createTitleElement(movieObj.title));
    movieElement.appendChild(createDataElement(movieObj.rating, movieObj.year));
    return movieElement;
  }
  
  const movieContainer = document.createElement("div");
  movieContainer.className = "movie-container";
  
  const movieElement = createMovieElement(movie);
  movieContainer.appendChild(movieElement);
  
  document.body.appendChild(movieContainer);