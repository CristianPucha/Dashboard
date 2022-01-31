import "./UltimoUsuario.css"
import { useState, useEffect } from "react";  
const API = "http://localhost:3055/api/users"


function UltimoUsuario () {



    const [users, setUsers] = useState([])

    useEffect ( () => {
        
        fetch(API)
        .then(response => response.json())
        .then(data => {setUsers(data.data)})
            
    }, [])


    const ultimoUsuario = users[users.length - 1]
    console.log(ultimoUsuario);

    return (
        <>
         
        <div className="userCard">
            
            
          
                {   
                    users.filter(user => user.id == 9)
                    .map((user, i) => {
                        return (
                            <>

                        <div className="imgUser">
                             <img src={"http://localhost:3055/img/users/" + ultimoUsuario.image} alt="" />
                        </div>

                            <div className="datosUser" key={i} >
                        <h1 >Nombre de Usuario:  {ultimoUsuario.first_name + " " + ultimoUsuario.last_name} </h1>
                        <p id="mailusu">E-mail: {ultimoUsuario.email} </p>
                        
                        </div> 
                        </>
                        )



                    })
                
              

                }    
                  
        </div> 
        </>
    )
}

export default UltimoUsuario;