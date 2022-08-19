const Pagination = (props) => {
    const {onLeftClick, onRightClick, page, totalPages} = props;
    return(
        <div className="pagination">
            <button onClick={onLeftClick} className="boton-flecha">
                <img 
                    src="/imagenes/flecha.svg" 
                    alt="flecha izquierda"
                />
            </button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick} className="boton-flecha boton-flecha-der">
                <img 
                    src="/imagenes/flecha.svg" 
                    alt="flecha derecha" 
                />
            </button>
        </div>
    )
}

export default Pagination;