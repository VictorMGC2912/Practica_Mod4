class Movie {
    title;
    overview;

    static listOptions = Object.freeze({
        nowPlaying: 'now_playing',
        popular: 'popular',
        topRated: 'top_rated',
        upcoming: 'upcoming',

    });




    constructor(movieData) {

    }
}