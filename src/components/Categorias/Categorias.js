import "./Categorias.css"

import { useState, useEffect } from "react";  
const API = "http://localhost:3055/api/games"
const APIsoftware = "http://localhost:3055/api/category"





function Categorias () {

    const [games, setGames] = useState([])
    const [software, setsoftware] = useState([])

    useEffect ( () => {
        
        fetch(API)
        .then(response => response.json())
        .then(data => {setGames(data)})
            
    }, [])

    useEffect ( () => {
        
        fetch(APIsoftware)
        .then(response => response.json())
        .then(data => {setsoftware(data)})
            
    }, [])
    


    return (
        <>

        <div className="categorias-divs">
            <div className="categoria1">
                <h2>Categoria Juegos</h2>
                <p>En esta Categoria hay {games.total} Productos Cargados</p>
            </div>
            <div className="categoria2">
            <h2>Categoria Software</h2>
                <p>En esta Categoria hay {software.total} Productos Cargados</p>
            </div>
        </div>
        
        </>
    )
}

export default Categorias;