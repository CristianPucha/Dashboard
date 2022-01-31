import "./ListaProductos.css"


import { useState, useEffect } from "react";  
const API = "http://localhost:3055/api/products"

function  ListaProductos () {
    const [productos, setProductos] = useState([])

    useEffect ( () => {
        
        fetch(API)
        .then(response => response.json())
        .then(data => {setProductos(data.data)})
            
    }, [])


    return(
        <>
        <div className="listaflex">



        {
            productos.map((producto , i) =>{
                return(

                    <div className="productCard" key={i}>
                         <h2>{ producto.product_name}</h2>
                          <img src={ "http://localhost:3055/img/" + producto.product_image} alt="" />
                        <div className="descripcionProducto">
                        <p>{producto.product_description} </p>
                        </div>
                  </div>
                )

            })

        
         }   
            

        </div>
            
        </>
    )
}

export default ListaProductos


