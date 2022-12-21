import {useState, useEffect} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from "./components/Heading";
import SearchInput from "./components/SearchInput";
import MovieList from "./components/MovieList";
import AddFavorite from "./components/AddFavorite";
import RemoveFavorite from "./components/DeleteFavorite";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favoriteMovies, setFavMovies] = useState([]);
   
  async function getMovies(searchValue) {

    const response = await fetch("http://www.omdbapi.com/?s="+ searchValue + "&apikey=ba811081");
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
    
  }

  function addFavoriteMovies(poster) {
    const newFavouriteList = [...favoriteMovies, poster];
		setFavMovies(newFavouriteList);

  }

  function removeFavoriteMovies(poster) {
    setFavMovies( (prevValues) => {
      return ( prevValues.filter((favorite) => {
        return favorite.imdbID !== poster.imdbID;
      })

      )
    })
  }


  useEffect(() => {
      getMovies(searchValue);
  }, [searchValue]);




  return (
    <div className="container-fluid movieApp"> 
      <div className="row p-3 bg-dark">
        <Heading 
          heading="Movie App"
          headingColor="white"
          />
        <SearchInput
          inputValue={searchValue}
          setSearchValue={setSearchValue}
          />
      </div>
      <div className="row">
        <MovieList
          posters={movies}
          onAdd={addFavoriteMovies}
          favouriteComponent={AddFavorite}
          />
          
      </div>
      <div className="row p-3">
        <Heading
          heading="Favorite Movies"
                    />
      </div>
      <div className="row p-3">
        <MovieList
          posters={favoriteMovies}
          onAdd={removeFavoriteMovies}
          favouriteComponent={RemoveFavorite}
          />
      </div>

    </div>
  );
}

export default App;
