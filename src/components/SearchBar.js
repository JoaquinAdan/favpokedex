import { useState } from "react"; 

const Searchbar = (props) => {
    const { onSearch } = props;
    const [search, setSearch] = useState('')

    const onChange = (e) => {
        // console.log(search);
        // console.log(pokemon);
        setSearch(e.target.value.toLowerCase());
        if(e.target.value.length === 0) {
            onSearch(null);
        }
    }

    const onClick = async (e) => {
        // const data = await searchPokemon(search);
        // console.log(data);
        // setPokemon(data);
        onSearch(search)
    }

    
    return (
        <form onSubmit={(e) => {e.preventDefault()}}>
        <div className="searchbar-container">
            <div />
            
                <div className="searchbar">
                    <input 
                        type={search}
                        placeholder = "Buscar Pokemon..."
                        onChange ={onChange}
                    />
                </div>
                <div className="searchbar-btn">
                    <button onClick={onClick} type="submit">
                        <img src="/imagenes/lupa.svg" alt="lupa" className="lupa"/>
                    </button>
                </div>
        </div>
        </form>
    )
}

export default Searchbar