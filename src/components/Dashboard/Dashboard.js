import UltimoProducto from "../UltimoProducto/UltimoProducto"
import {Link, Routes, Route } from "react-router-dom"
import Simple1 from "../Simple1/Simple1";
import Simple2 from "../Simple2/Simple2";
import Simple3 from "../Simple3/Simple3";
import Categorias from "../Categorias/Categorias";
import ListaProductos from "../ListaProductos/ListaProductos";
import UltimoUsuario from "../UltimoUsuario/UltimoUsuario";



import "./Dashboard.css"

function Dashboard (){
    return(
        <div className="dashboardArea">
            <div className="dashboardSimples">
            <Simple1/>
            <Simple2/>
            <Simple3/>
        
            
            

            </div>
            
        <Routes>
            <Route path="/1" element={<UltimoProducto/> } />
            <Route path="/2" element={<Categorias/>} />
            <Route path="/3" element={<ListaProductos/>} />
            <Route path="/4" element={<UltimoUsuario/>} />
           

        </Routes>
        </div>
    )
}

export default Dashboard;