import "./LeftBar.css";
import {Link, Routes, Route } from "react-router-dom"


function LeftBar () {
    

    return (
        <>
        <div className="left-bar">

            <ul>
                <li><Link to = "/1">Ultimo Producto</Link></li>
                <li><Link to = "/4">Ultimo Usuario</Link></li>
                <li><Link to = "/2">Categorías</Link></li>
                <li><Link to = "/3">Productos</Link></li>
                
            </ul>
            
        </div>    
        
        



        </>
    )
}

export default LeftBar;