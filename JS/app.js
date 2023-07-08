const api_key = 'c06d747a30f3d9c945f4d5a3d100f8d3';
const base_url = 'https://api.themoviedb.org/3/';
const api_url = base_url + 'discover/movie?sort_by=popularity.desc&' + api_key
const searchURL = base_url + '/search/movie?'+api_key;
const image_url ='https://image.tmdb.org/t/p/w500/';
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(api_url);

function getMovies(url){
  fetch(url)
  .then((response)=> response.json())
  .then(data => {
    console.log(data.results);
    showMovies(data.results);
  })
}

function showMovies(data){
  // main.innerHTML = '';
  data.foreach(movie =>{
    const {title, poster_path, vote_average, overview} = movie;
    const movieE1 = document.createElement('div');
    movieE1.classList.add('movie')
    movieE1.innerHTML = `
    <img src="${image_url+poster_path}" alt"${title}" />

    <div class="movie-info">
      <h3>Movie Title</h3>
      <span class="${getColor(vote_average)}">${vote_average}</span>
    </div>

    <div class="overview">
      <h3>Overview</h3>
      ${overview}
    </div>`

    main.appendChild(movieE1); 
  }) 
}

function getColor(vote){
  if(vote >=8){
    return 'green'
  } else if(vote >= 5){
    return 'orange'
  } else{
    return 'red'
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.ariaValueMax;

  if(searchTerm){
    getMovies(searchURL+'&query='+searchTerm)
  }else{
    getMovies(api_url);
  }
})