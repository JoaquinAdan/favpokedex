const Footer = () => {

    return (
        <footer className="footer-container">
            <div className="footer">
                <div className="pokeapi-footer-container ">
                    <a href="/">
                        <img className="pokeapi-footer" src="imagenes/pokeapi.png" alt="pokeapi footer"/>
                    </a>
                    <span className="bubble-pokeapi">
                        <img className="version" src="imagenes/1.0.png" alt="version 1.0"/>
                    </span>
                    
                </div>
                <div className="update-container">
                    <div className="update-title">Próxima actualización</div>
                    <div className="updates">
                        <span>Información de pokemons</span>
                        <span>Lista de favoritos</span>
                        <span>Volver luego de buscar</span>
                    </div>
                </div>
                <div className="redes-container">
                    <div className="redes-title">Contáctate con el desarrollador</div>
                    <div className="redes">
                        <a href="mailto:rodriguezjdev@gmail.com" target="_blank" rel="noreferrer">
                            <img className="pointer" src="imagenes/mail.svg" alt="gmail"/>
                        </a>
                        <a href="https://www.linkedin.com/in/joaquin-rodriguez-dev/" target="_blank" rel="noreferrer">
                            <img className="pointer" src="imagenes/linkedin.svg" alt="linkedin"/>
                        </a>
                        <a href="https://github.com/JoaquinAdan" target="_blank" rel="noreferrer">
                            <img className="pointer" src="imagenes/github.svg" alt="github"/>
                        </a>
                    </div>
                </div>
                <div className="copy">
                    <img src="imagenes/copyright.svg" alt="copyright"/> 
                    <span className="copy-text">2022 All Rights Reserved By <strong>PokeApi</strong></span>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer