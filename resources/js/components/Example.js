import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Hello Jorge :)</div>
 
                        <div className="card-body">Espero y te Encuentres muy Bien:)</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('adsi')) {
    ReactDOM.render(<Example />, document.getElementById('adsi'));
    //De esta forma todo lo que tenga la funcion Example se va a visualizar en el id especificado anteriormente
} 
