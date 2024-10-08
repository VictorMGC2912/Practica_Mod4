export const categories = Object.freeze({
  //Categoria: "Categoria",
  Drama: "Drama",
  Action: "Action",
  Crime: "Crime",
  Biography: "Biography",
  Adventure: "Adventure",
  Comedy: "Comedy",
});

export const opciones = [
  { valor: 'tituloAsc', texto: 'Título (A-Z)' },
  { valor: 'tituloDesc', texto: 'Título (Z-A)' },
  { valor: 'directorAsc', texto: 'Director (A-Z)' },
  { valor: 'directorDesc', texto: 'Director (Z-A)' },
  { valor: 'añoAsc', texto: 'Año (Ascendente)' },
  { valor: 'añoDesc', texto: 'Año (Descendente)' }
];

export const movies = [
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    actors: "Christian Bale, Heath Ledger, Aaron Eckhart",
    year: 2008,
    category: "Action",
    poster: "http://image.tmdb.org/t/p/w500//qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 9,
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
  },
  {
    title: "Fight Club",
    director: "David Fincher",
    actors: "Brad Pitt, Edward Norton, Helena Bonham Carter",
    year: 1999,
    category: "Drama",
    poster: "https://m.media-amazon.com/images/I/817Ro5xspbL._AC_UF894,1000_QL80_.jpg",
    rating: 8.8,
    description:
      "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    actors: "Samuel L. Jackson, Uma Thurman, Bruce Willis",
    year: 1994,
    category: "Crime",
    poster: "https://m.media-amazon.com/images/I/81UTs3sC5hL._AC_UF894,1000_QL80_.jpg",
    rating: 8.9,
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
  },
  {
    title: "Schindler's List",
    director: "Steven Spielberg",
    actors: "Liam Neeson, Ralph Fiennes, Ben Kingsley",
    year: 1993,
    category: "Biography",
    poster: "https://m.media-amazon.com/images/I/81+H4lZVw+L._AC_UF894,1000_QL80_.jpg",
    rating: 8.9,
    description:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
  },
  {
    title: "The Lord of theRing: The Return of the King",
    director: "Peter Jackson",
    actors: "Elijah Wood, Viggo Mortensen, Ian McKellen",
    year: 2003,
    category: "Adventure",
    poster: "https://m.media-amazon.com/images/M/MV5BNDgwY2YyNjctZTMxZC00ZTRlLThhN2QtMTAwYjUyODcyZDYxXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg",
    rating: 8.9,
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
  },
  {
    title: "The Social Network",
    director: "David Fincher",
    actors: "Jesse Eisenberg, Andrew Garfield, Justin Timberlake",
    year: 2010,
    category: "Biography",
    poster: "https://m.media-amazon.com/images/S/pv-target-images/ea4f1c75ddd9fd937a77875d48f9ce8225ed954afcefabe7a2195311b1a97ddd.jpg",
    rating: 7.7,
    description:
      "Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, but is later sued by two brothers who claimed he stole their idea, and the co-founder who was later squeezed out of the business.",
  },
  {
    title: "Goodfellas",
    director: "Martin Scorsese",
    actors: "Robert De Niro, Ray Liotta, Joe Pesci",
    year: 1990,
    category: "Biography",
    poster: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-J2G4UO5XsCWhcqkhwrd9fAxNPnLggMUoSeT4eZEbSqpEvSIX75trmHXupxrBTPtpesGtWbXppU2LlFW0xr-zc3PcgLYOGx_lgeYSjpXO9WWk6nX8MW6o45oCzGI2UIOajDppLQqOCNUJ/s600/1.jpg",
    rating: 8.7,
    description:
      "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
  },
  {
    title: "Inception",
    director: "Christopher Nolan",
    actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
    year: 2010,
    category: "Action",
    poster: "https://m.media-amazon.com/images/I/71SBgi0X2KL._AC_UF894,1000_QL80_.jpg",
    rating: 8.8,
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  },
  {
    title: "The Lord of theRing: The Fellowship of the Ring",
    director: "Peter Jackson",
    actors: "Elijah Wood, Ian McKellen, Orlando Bloom",
    year: 2001,
    category: "Adventure",
    poster: "https://upload.wikimedia.org/wikipedia/en/f/fb/Lord_Rings_Fellowship_Ring.jpg",
    rating: 8.8,
    description:
      "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
  },
  {
    title: "Seven",
    director: "David Fincher",
    actors: "Morgan Freeman, Brad Pitt, Kevin Spacey",
    year: 1995,
    category: "Crime",
    poster: "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX190_CR0,8,190,281_.jpg",
    rating: 8.6,
    description:
      "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    actors: "Tom Hanks, Robin Wright, Gary Sinise",
    year: 1994,
    category: "Drama",
    poster: "https://m.media-amazon.com/images/I/91++WV6FP4L._AC_UF894,1000_QL80_.jpg",
    rating: 8.8,
    description:
      "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
  },
  {
    title: "Django Unchained",
    director: "Quentin Tarantino",
    actors: "Jamie Foxx, Christoph Waltz, Leonardo DiCaprio",
    year: 2012,
    category: "Drama",
    poster: "https://pics.filmaffinity.com/django_unchained-956246347-mmed.jpg",
    rating: 8.4,
    description:
      "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
  },
  {
    title: "The Dark Knight Rises",
    director: "Christopher Nolan",
    actors: "Christian Bale, Tom Hardy, Anne Hathaway",
    year: 2012,
    category: "Action",
    poster: "https://m.media-amazon.com/images/I/91HM6470jLL._AC_UF894,1000_QL80_.jpg",
    rating: 8.4,
    description:
      "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
  },
  {
    title: "Saving Private Ryan",
    director: "Steven Spielberg",
    actors: "Tom Hanks, Matt Damon, Tom Sizemore",
    year: 1998,
    category: "Action",
    poster: "https://m.media-amazon.com/images/I/61UZ+Dq1OYL._AC_UF894,1000_QL80_.jpg",
    rating: 8.6,
    description:
      "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
  },
  {
    title: "The Lord of the Ring: The Two Towers",
    director: "Peter Jackson",
    actors: "Elijah Wood, Ian McKellen, Viggo Mortensen",
    year: 2002,
    category: "Adventure",
    poster: "https://images.moviesanywhere.com/e08bdd760138ad2b7fcb992943536bfa/d1935091-487e-44a8-a66f-97f892a621f9.jpg",
    rating: 8.7,
    description:
      "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
  },
  {
    title: "Gone Girl",
    director: "David Fincher",
    actors: "Ben Affleck, Rosamund Pike, Neil Patrick Harris",
    year: 2014,
    category: "Drama",
    poster: "https://m.media-amazon.com/images/I/91Q+5Djmk4L._AC_UF894,1000_QL80_.jpg",
    rating: 8.1,
    description:
      "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
  },
  {
    title: "Casino",
    director: "Martin Scorsese",
    actors: "Robert De Niro, Joe Pesci, Sharon Stone",
    year: 1995,
    category: "Crime",
    poster: "https://m.media-amazon.com/images/M/MV5BMTcxOWYzNDYtYmM4YS00N2NkLTk0NTAtNjg1ODgwZjAxYzI3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    rating: 8.2,
    description:
      "A tale of greed, deception, money, power, and murder occur between two bestfriend: a mafia enforcer and a casino executive compete against each other over a gambling empire, and over a fast-living and fast-loving socialite.",
  },
  {
    title: "Inception",
    director: "Christopher Nolan",
    actors: "Leonardo DiCaprio, Ken Watanabe, Joseph Gordon-Levitt",
    year: 2010,
    category: "Action",
    poster: "https://m.media-amazon.com/images/S/pv-target-images/cc72ff2193c0f7a85322aee988d6fe1ae2cd9f8800b6ff6e8462790fe2aacaf3.jpg",
    rating: 8.8,
    description:
      "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets, is offered a chance to regain his old life as payment for a task considered to beimpossibl: inception.",
  },
  {
    title: "Once Upon a Time... in Hollywood",
    director: "Quentin Tarantino",
    actors: "Leonardo DiCaprio, Brad Pitt, Margot Robbie",
    year: 2019,
    category: "Comedy",
    poster: "https://upload.wikimedia.org/wikipedia/en/a/a6/Once_Upon_a_Time_in_Hollywood_poster.png",
    rating: 7.6,
    description:
      "A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood's Golden Age in 1969 Los Angeles.",
  },
  {
    title: "The Lord of the Ring: The Return of the King",
    director: "Peter Jackson",
    actors: "Elijah Wood, Ian McKellen, Liv Tyler",
    year: 2003,
    category: "Adventure",
    poster: "https://m.media-amazon.com/images/M/MV5BNDgwY2YyNjctZTMxZC00ZTRlLThhN2QtMTAwYjUyODcyZDYxXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg",
    rating: 8.9,
    description:
      "A meek Hobbit and eight companions set out on a journey to destroy the One Ring and the Dark Lord Sauron.",
  },
  {
    title: "Zodiac",
    director: "David Fincher",
    actors: "Jake Gyllenhaal, Robert Downey Jr., Mark Ruffalo",
    year: 2007,
    category: "Crime",
    poster: "https://m.media-amazon.com/images/I/91gYQOSys6L._AC_UF894,1000_QL80_.jpg",
    rating: 7.7,
    description:
      "In the late 1960s/early 1970s, a San Francisco cartoonist becomes an amateur detective obsessed with tracking down the Zodiac Killer, an unidentified individual who terrorizes Northern California with a killing spree.",
  },
  {
    title: "The Wolf of Wall Street",
    director: "Martin Scorsese",
    actors: "Leonardo DiCaprio, Jonah Hill, Margot Robbie",
    year: 2013,
    category: "Biography",
    poster: "https://m.media-amazon.com/images/I/91m2MB2lYFL._AC_UF894,1000_QL80_.jpg",
    rating: 8.2,
    description:
      "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption, and the federal government.",
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    actors: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
    year: 2014,
    category: "Adventure",
    poster: "https://m.media-amazon.com/images/I/91vIHsL-zjL._AC_UF894,1000_QL80_.jpg",
    rating: 8.6,
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
  {
    title: "The Hateful Eight",
    director: "Quentin Tarantino",
    actors: "Samuel L. Jackson, Kurt Russell, Jennifer Jason Leigh",
    year: 2015,
    category: "Drama",
    poster: "https://m.media-amazon.com/images/I/91L6M95tlKL._AC_UF894,1000_QL80_.jpg",
    rating: 7.8,
    description:
      "In post-Civil War Wyoming, bounty hunters try to find shelter during a blizzard but get involved in a plot of betrayal and deception. Will they survive?",
  },
];