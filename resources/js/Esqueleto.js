import React from 'react';
import ReactDOM from 'react-dom';
import Navegacion from './components/Navegacion';


const Esqueleto = () => {

    return (

        <div>
            
            <Navegacion Nombre= "Jorge" /> 
        
        </div>

    );


}

export default Esqueleto;

ReactDOM.render(<Esqueleto />, document.getElementById("contenido1"));