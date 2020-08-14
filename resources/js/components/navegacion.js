import React from 'react';
import ReactDOM from 'react-dom';

const navegacion = (props)=> {

    return (

    <div>Hello Soy una  Navegacion Bienvenido{props.Nombre}</div>

    );


}

export default navegacion;

ReactDOM.render(<navegacion></navegacion>, document.getElementById('contenido'));