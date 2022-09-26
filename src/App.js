import Navbar from "./components/Navbar";
import Searchbar from "./components/SearchBar";
import './styles.css'
import './types.css'
import './mediaquerys.css'
import Pokedex from "./components/Pokedex";
import Footer from "./components/Footer"
import { useState, useEffect } from "react";
import { getPokemonData, getPokemons, searchPokemon } from "./api";
import { FavoriteProvider } from "./context/favoritesContext"

const localStorageKey = "favorite_pokemon";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(15, 15 * page);
      // console.log(data.results);
      // setPokemons(data.results);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      })
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 15))
      setNotFound(false);
    } catch (err) {}
  }

  const loadFavoritePokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
    setFavorites(pokemons);
  };

  useEffect(() => {
    loadFavoritePokemons();
  }, [])

  useEffect(() => {
    if(!searching){
      fetchPokemons();
    }
    
    // eslint-disable-next-line 
  }, [page]);

  const updateFavoritePokemons = (name) => {
    const updated = [...favorites];
    const isFavorite = favorites.indexOf(name);
    if(isFavorite >= 0) {
      updated.splice(isFavorite, 1);
    } else {
      updated.push(name);
    }
    setFavorites(updated);
    window.localStorage.setItem(localStorageKey, JSON.stringify(updated));
  }

  const onSearch = async (pokemon) => {
    if(!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if(!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemons([result]);
      // setPage(0);
      // setTotal(1);
    }
    
    setLoading(false);
    setSearching(false);
  }

  return (
    <FavoriteProvider 
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons
      }}
    >
    <div className="container">
      <Navbar />
      <div>
        <Searchbar onSearch={onSearch}/>
        {notFound ?
          (
          <div>
            <div className="not-found-text">
              <p>No encontré el pokémon que buscabas</p>

              <img className="sad-pikachu" src="imagenes/sadpikachu.jpg" alt="pikachu triste"/>
              <p>Borrá tu búsqueda para volver a tu página actual</p>
            </div>  
          </div>
          )
        :
          (
            <Pokedex 
              loading={loading}
              pokemons={pokemons} 
              page={page}
              setPage={setPage}
              total={total}
            />
          )
        }
      </div> 
      <Footer />
    </div>
    
    </FavoriteProvider>
    
  );
}

export default App;
