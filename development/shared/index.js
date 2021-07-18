const API_KEY="8bf646dca9acad23e2a82bca5349d574"
const MOVIE_API=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`

const getMovies = (API) =>{
    fetch(API).then(res => res.json())
    .then(data => {
     const movieData = data.results
     console.log(movieData);
     const container = document.querySelector(".container")
     const card = document.querySelector(".container__card")
     const photo = document.querySelector(".container__photo")
     const title = document.querySelector(".container__title")
     const rate = document.querySelector(".container__rate")
     const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

     const movieCards = movieData.map((movie) => {
        return (`
          <div class="container__card" >
            <img src="${IMG_PATH}${movie.backdrop_path}" class="container__photo" alt="...">
            <div class="container__body">
              <h5 class="container__title">${movie.original_title}</h5>
              <div class="container__rate">${movie.vote_average}</div>
              <p class="container__text">${movie.overview}</p>
            </div>
              </div>
           ` )
           

      })
      movieCards.forEach(film => {
          return container.innerHTML += film
      } )
      })
   };

   getMovies(MOVIE_API);

