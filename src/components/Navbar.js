import React from "react";
import FavoriteContext from "../context/favoritesContext";

const {useContext} = React;

const Navbar =  () => {
    const { favoritePokemons } = useContext(FavoriteContext);
    // console.log(favoritePokemons)
    const cantidad = favoritePokemons.length
    // console.log(cantidad)
    return (
        <nav>
            <div className="width"></div>
            <div>
                <a href="/">
                    <img 
                        src="/imagenes/pokeapi.png" 
                        alt="logo pokeapi"
                        className="navbar-image"    
                    />
                </a>  
            </div>
            <div>
                <div className="bubble-container">
                    <span className="bubble">
                        {
                        cantidad !== 0
                        ? <span className="Fav-length">{cantidad}</span>
                        : null
                        }
                    </span>
                </div>
                <img 
                    src="/imagenes/heart.svg"
                    alt="pokemon guardado"
                />
            </div>
        </nav>
    )
}

export default Navbar;