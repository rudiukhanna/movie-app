import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/styles.css";
import { Navbar, Container, Nav, Form, FormControl, Button } from "react-bootstrap";
import MovieBox from "./components/MovieBox";
import Favorites from "./components/Favorites";
import Genre from "./components/Genre";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";
import { render, fireEvent } from '@testing-library/react';


const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "api_key=c28f2b3a5f12a97c881515e0374f688c";
const API_URL = `${BASE_URL}movie/popular?${API_KEY}`;
const API_SEARCH = `${BASE_URL}search/movie?${API_KEY}`;
const API_YEAR = `${BASE_URL}discover/movie?${API_KEY}`;

const genres =  [
  {
    "id": 28,
    "name": "Action"
  },
  {
    "id": 12,
    "name": "Adventure"
  },
  {
    "id": 16,
    "name": "Animation"
  },
  {
    "id": 35,
    "name": "Comedy"
  },
  {
    "id": 80,
    "name": "Crime"
  },
  {
    "id": 99,
    "name": "Documentary"
  },
  {
    "id": 18,
    "name": "Drama"
  },
  {
    "id": 10751,
    "name": "Family"
  },
  {
    "id": 14,
    "name": "Fantasy"
  },
  {
    "id": 36,
    "name": "History"
  },
  {
    "id": 27,
    "name": "Horror"
  },
  {
    "id": 10402,
    "name": "Music"
  },
  {
    "id": 9648,
    "name": "Mystery"
  },
  {
    "id": 10749,
    "name": "Romance"
  },
  {
    "id": 878,
    "name": "Science Fiction"
  },
  {
    "id": 10770,
    "name": "TV Movie"
  },
  {
    "id": 53,
    "name": "Thriller"
  },
  {
    "id": 10752,
    "name": "War"
  },
  {
    "id": 37,
    "name": "Western"
  }
  ]

function App() {
  const [movies, setMovies]=useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [query, setQuery]=useState('');
  const [favorites, setFavorites] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [year, setYear] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const storedTheme = localStorage.getItem('theme');
  const [isDarkMode, setIsDarkMode] = useState(storedTheme === 'dark');

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkMode);
    document.body.classList.toggle('light-theme', !isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")); 
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  const addToFavorites = (movie) => {
    console.log(movie.id)
    setIsFavorite(true);
    setFavorites((prevFavorites) => {
      const newFavorites = [...prevFavorites, movie];
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const removeFromFavorites = (id) => {
    console.log(id);
    setFavorites((prevFavorites) => {
      console.log(prevFavorites)
      const newFavorites = prevFavorites.filter((movie) => movie.id !== id );
      localStorage.setItem("favorites", JSON.stringify(newFavorites)); 
      return newFavorites;
      
    });
   
  };

  useEffect(() => {
    getMovies();
  }, [selectedGenres]);

  const handleGenreSelect = (genreId) => {
    if (selectedGenres.includes(genreId)) {
      setSelectedGenres(selectedGenres.filter((id) => id !== genreId));
    } else {
      setSelectedGenres([...selectedGenres, genreId]);
    }
  };

  const highlightSelection = (genreId) => {
    return selectedGenres.includes(genreId) ? 'highlight' : '';
  };

  const getMovies = async () => {
    setIsLoading(true);
    const response = await fetch(`${API_URL}&with_genres=${selectedGenres.join(',')}`);
    const data = await response.json();
    setMovies(data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  }, [])


  const searchMovieByYear = async(e)=>{
    e.preventDefault();
    console.log("Searching Year...");
    try{
      const url=`${API_YEAR}&year=${year}`;
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      setMovies(data.results);
    }
    catch(e){
      console.log(e);
    }
  }

  const yearChangeHandler = (e) => {
    setYear(e.target.value);
  };

  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  }, [])

  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
      const url=`${API_SEARCH}&query=${query}`;
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      setMovies(data.results);
    }
    catch(e){
      console.log(e);
    }
  }

  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }

  return (
    <>
      <Navbar className="navbar" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand
                        href="/home"
                        className="link d-flex align-items-center fs-1">
                           <svg xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                className="bi bi-film"
                                viewBox="0 0 16 16">
                                <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"/>
                           </svg>
                           MovieMania
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav 
                className="me-auto my-2 my-lg-3"
                style={{maxHeight:"100px"}}
                navbarScroll></Nav>
            <Form 
                  className="d-flex" 
                  onSubmit={searchMovie} 
                  autoComplete="off">
              <FormControl
                        type="search"
                        placeholder="Title..."
                        className="me-2"
                        aria-label="search"
                        name="query"
                        value={query} 
                        onChange={changeHandler}>
              </FormControl>
                 <Button 
                        variant="secondary" 
                        type="submit" 
                        className="me-2">
                          Search
                  </Button>
              </Form>
              <Form 
                    className="d-flex"
                    onSubmit={searchMovieByYear} 
                    autoComplete="off">
              <FormControl
                          type="search"
                          placeholder="Year..."
                          className="me-2"
                          aria-label="search"
                          name="year"
                          value={year} 
                          onChange={yearChangeHandler}> 
              </FormControl>
              <Button variant="secondary" 
                      type="submit">
                        Search</Button>
            </Form>
          </Navbar.Collapse>
          <ThemeToggle 
                        toggleTheme={toggleTheme} 
                        isDarkMode={isDarkMode} />
        </Container>
      </Navbar>
      <div className="movie-app">
      <div className='movies'>
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : movies.length > 0 ?(
        <div className="container">
        <div className="grid">
          {movies.map((movieReq)=>
          <MovieBox 
                    key={movieReq.id} {...movieReq}
                    movies={movies}
                    addToFavorites={addToFavorites}
                    />)}
            </div>
    </div>
      ):(
        <h2 className="text-warning text-center mb-0"> No movies found </h2>
      )}
    </div> 
    <section className="movie-app-sidebar">
    <Genre
        genres={genres}
        highlightSelection={highlightSelection}
        handleGenreSelect={handleGenreSelect}
      />
     <Favorites favorites={favorites} onRemove={removeFromFavorites} />
    </section>
    </div>
      <Footer/>
    </>
  );
}

export default App;
