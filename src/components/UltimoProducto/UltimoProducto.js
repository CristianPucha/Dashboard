import "./UltimoProducto.css"

import { useState, useEffect } from "react";  
const API = "http://localhost:3055/api/products"


function UltimoProducto () {
    

    const [productos, setProductos] = useState([])

    useEffect ( () => {
        
        fetch(API)
        .then(response => response.json())
        .then(data => {setProductos(data.data)})
            
    }, [])


    const ultimoProducto = productos[productos.length - 1]
    console.log(ultimoProducto);

    return (
        <>
        <div className="userCard">
            
            
          
                {   
                    productos.filter(producto => producto.id == 2)
                    .map((producto, i) => {
                        return (
                            <>
                           

                        <div className="imgUser">
                             <img src={"http://localhost:3055/img/" + ultimoProducto.product_image} alt="" />
                        </div>

                            <div className="datosUser" key={i} >
                        <h1 >Ultimo Producto Cargado: <span className="ultimoprod">{ultimoProducto.product_name}</span> </h1>
                        <p id="descripcionprod">Descripcion: {ultimoProducto.product_description} </p>
                        <p id = "precioultimo">Precio: ${ultimoProducto.product_price}</p>
                        </div> 
                        </>
                        )



                    })
                
              

                }    
                  
        </div>
        </>
    )
}

export default UltimoProducto