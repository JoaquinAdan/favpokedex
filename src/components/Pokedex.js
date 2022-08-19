import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
    // console.log(props)
    const { pokemons, page, setPage, total, loading } = props;

    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0);
        setPage(nextPage)
        
        console.log(pokemons)
    }

    const nextPage = () => {
        const nextPage = Math.min(page + 1, total);
        setPage(nextPage)
        console.log(pokemons)
    }
    
    return (
        <div>
            <div className="header">
                <h1>Pokedex</h1>
                <Pagination
                    page={page + 1}
                    totalPages={total}
                    onLeftClick={lastPage}
                    onRightClick={nextPage}
                />
            </div>
            {loading ?
            <div className="pokebola-container">
            <img 
              src="imagenes/pokebola.png" 
              alt="pokebola de carga.." 
              className="pokebola"
            />
            <p className="pokebola-p">cargando...</p>
          </div>
            :
            <div className="pokedex-grid">
                {pokemons.map((pokemon, idx) => {
                    return(
                        <Pokemon pokemon={pokemon} key={pokemon.name}/>
                    )
                })}
            </div>
            }
            
        </div>
    )
}

export default Pokedex