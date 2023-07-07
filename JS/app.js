const  API_KEY = 'c06d747a30f3d9c945f4d5a3d100f8d3';
const BASE_URL = 'https://api.themoviedb.org/3/';
const account_id= '20115353';
const API_REQUEST = 'https://api.themoviedb.org/3/movie/550?api_key=c06d747a30f3d9c945f4d5a3d100f8d3'; 
const API_URL = 'https://api.themoviedb.org/3/account/'+account_id+'/favorite/movies'

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDZkNzQ3YTMwZjNkOWM5NDVmNGQ1YTNkMTAwZjhkMyIsInN1YiI6IjY0YTc1YmZkZjA1NmQ1MDBmZjZkOGEwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KN-M2L_NmriHHwFeIlWwxrv5r8Lmo9nBG5tib0yifmI'
    }
  };
  
  fetch('https://api.themoviedb.org/3/account/20115353/favorite/movies?language=en-US&page=1&sort_by=created_at.asc', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));