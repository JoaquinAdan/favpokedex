import { useContext } from "react";
import FavoriteContext from "../context/favoritesContext";

const Pokemon = (props) => {
    const {pokemon} = props;/** */

    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext);

    const redHeart = "/imagenes/heart.svg";
    const blackHeart = "/imagenes/blackHeart.svg";
    
    const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

    const clickHeart = (e) => {
        e.preventDefault();
        updateFavoritePokemons(pokemon.name);
    }
    return (
        <div className="pokemon-card">
            <div className="pokemon-img-container">
           
                <img 
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    className="pokemon-img"
                />  
            
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                    <div className="id-pokemon">#{pokemon.id}</div>
                </div>
                <div className="card-bottom">
                    <div className="pokemon-type">
                        {pokemon.types.map((type, idx) => {
                            let typeClassName = ''
                            let typeTextClassName = ''
                            switch (type.type.name) {
                                case "grass":
                                    typeClassName = "grass border-type";
                                    typeTextClassName = "grass-text pokemon-type-text";
                                    break;
                                case "poison":
                                    typeClassName = "poison border-type";
                                    typeTextClassName = "poison-text pokemon-type-text";
                                    break;
                                case "water":
                                    typeClassName = "water border-type";
                                    typeTextClassName = "water-text pokemon-type-text";
                                    break;
                                case "fire":
                                    typeClassName = "fire border-type";
                                    typeTextClassName = "fire-text pokemon-type-text";
                                    break;
                                case "flying":
                                    typeClassName = "flying border-type";
                                    typeTextClassName = "flying-text pokemon-type-text";
                                    break;
                                case "electric":
                                    typeClassName = "electric border-type";
                                    typeTextClassName = "electric-text pokemon-type-text";
                                    break;
                                case "fairy":
                                    typeClassName = "fairy border-type";
                                    typeTextClassName = "fairy-text pokemon-type-text";
                                    break;
                                case "ghost":
                                    typeClassName = "ghost border-type";
                                    typeTextClassName = "ghost-text pokemon-type-text";
                                    break;
                                case "rock":
                                    typeClassName = "rock border-type";
                                    typeTextClassName = "rock-text pokemon-type-text";
                                    break;
                                case "psychic":
                                    typeClassName = "psychic border-type";
                                    typeTextClassName = "psychic-text pokemon-type-text";
                                    break;
                                case "ice":
                                    typeClassName = "ice border-type";
                                    typeTextClassName = "ice-text pokemon-type-text";
                                    break;
                                case "bug":
                                    typeClassName = "bug border-type";
                                    typeTextClassName = "bug-text pokemon-type-text";
                                    break;
                                case "steel":
                                    typeClassName = "steel border-type";
                                    typeTextClassName = "steel-text pokemon-type-text";
                                    break;
                                default: 
                                    typeClassName = "default border-type";
                                    typeTextClassName = "default-text pokemon-type-text";
                                    break;
                            }
                            return (
                            <div key={idx} className={typeClassName}>
                                <div 
                                    key={idx} 
                                    className={typeTextClassName}
                                >
                                {type.type.name}
                                </div>
                            </div>
                            )    
                        })}
                    </div>
                    <div> 
                        <button className="btn-heart" onClick={clickHeart}>
                            <img 
                                src={heart}
                                alt="pokemon guardado"
                                className="mini-heart"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Pokemon;