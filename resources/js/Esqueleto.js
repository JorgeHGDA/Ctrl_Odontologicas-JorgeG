import React from 'react';
import ReactDOM from 'react-dom';
import navegacion from './components/navegacion';

const Esqueleto = ()=> {

    return (

        <div>
            
            <navegacion Nombre="   Jorge" /> 
        
        </div>

    );


}

export default Esqueleto;

ReactDOM.render(<Esqueleto />, document.getElementById('contenido'));