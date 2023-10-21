export const img_bg_home = 'https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_small.jpg' ;

export const img_logo_main = 'https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940' ;

export const imgBaseUrl = 'https://image.tmdb.org/t/p/original' ;
export const API_POPULAR = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmYxNTU5YWJlNjJmYzQwNDg5MjhlYzRmYWU4MDJjYSIsInN1YiI6IjY1MzEwZjA2YWVkZTU5MDBlOThlYmEyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9Jt0YckrEP2hs_MHZ2gBU_UQLwv_Xz0F-ek6BxWKHsg'
  }
};

export const fetchMoviesOptions = [
  {
    type : 'Trending',
    url : 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
  },
  {
    type : 'Popular' ,
    url : 'https://api.themoviedb.org/3/movie/popular'
  },
  {
    type : 'Now Playing' ,
    url : 'https://api.themoviedb.org/3/movie/now_playing'
  },
  {
    type : 'Top Rated' ,
    url : 'https://api.themoviedb.org/3/movie/top_rated'
  },
  {
    type : 'Upcoming' ,
    url : 'https://api.themoviedb.org/3/movie/upcoming'
  },
]