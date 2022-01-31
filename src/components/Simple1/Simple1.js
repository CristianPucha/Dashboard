import "./Simple1.css"

import { useState, useEffect } from "react";  
const API = "http://localhost:3055/api/products"


   


function Simple1 () {

    const [productos, setProductos] = useState([])

    useEffect ( () => {
        
        fetch(API)
        .then(response => response.json())
        .then(data => {setProductos(data)})
            
    }, [])

    

    return (
        <div className="simple1">
        <p>Productos Totales: <span>{productos.total}</span> </p>
        </div>
    )
}

export default Simple1;