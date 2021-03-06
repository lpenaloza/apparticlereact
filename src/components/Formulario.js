import React, { Component } from "react";
import Sidebar from './Sidebar';
/* Import Redux store and the actions */
import configureStore from '../store/configureStore';
import { toggleContactForm, handleInputChange } from '../actions';

class Formulario extends Component {

    nombreRef= React.createRef();
    apellidosRef = React.createRef();
    bioRef = React.createRef();
    generoHombreRef = React.createRef();
    generoMujerRef = React.createRef();
    generoOtroRef = React.createRef(); 
    
    state = {
        user: {}
    };

    recibirFomulario = (e) => {

        e.preventDefault();
        
        var genero = 'hombre';
        const store = configureStore();
        if(this.generoHombreRef.current.checked) {
            genero = this.generoHombreRef.current.value;
        } else if(this.generoMujerRef.current.checked) {
            genero = this.generoMujerRef.current.value;
        } else {
            genero = this.generoOtroRef.current.value;
        }

        var user = {
            nombre: this.nombreRef.current.value,
            apellidos: this.apellidosRef.current.value,
            bio: this.bioRef.current.value,
            genero: genero
        }

        this.setState({
            user: user
        })

        store.subscribe(() =>
            console.log(store.getState())
        ) 

        /* returns isContactFormHidden returns false */
        store.dispatch(toggleContactForm());
        /* returns isContactFormHidden returns false */
        store.dispatch(toggleContactForm());
        store.dispatch(handleInputChange('nombre', this.nombreRef.current.value))

    }

    render() {
        if (this.state.user.nombre) {
            var user = this.state.user;
        }
        return (
            <div id="formulario">
                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Formulario de contacto</h1>
                        {/* datos del formulario */}
                        {this.state.user.nombre &&
                            this.state.user.apellidos &&
                            this.state.user.bio && 
                            this.state.user.genero &&
                            <div id="user-data">
                                <p>Nombre: <strong>{user.nombre}</strong></p>
                                <p>Apellidos: <strong>{user.apellidos}</strong></p>
                                <p>Bio: <strong>{user.bio}</strong></p>
                                <p>Genero: <strong>{user.genero}</strong></p>
                            </div>
                        }
                        <form className="mid-form" onSubmit={this.recibirFomulario} onChange={this.recibirFomulario}>
                            <div className="form-group">
                                <label>Nombres</label>
                                <input type="text" name="nombre" ref={this.nombreRef} />
                            </div>

                            <div className="form-group">
                                <label>Apellidos</label>
                                <input type="text" name="apellidos" ref={this.apellidosRef} />
                            </div>

                            <div className="form-group">
                                <label>Biografia</label>
                                <textarea name="bio" ref={this.bioRef}></textarea>
                            </div>

                            <div className="form-group radibuttons">
                                <input type="radio" name="genero" value="hombre" ref={this.generoHombreRef} /> Hombre
                            <input type="radio" name="genero" value="mujer" ref={this.generoMujerRef}/> Mujer
                            <input type="radio" name="genero" value="otro" ref={this.generoOtroRef} /> Otro
                        </div>

                            <div className="clearfix"></div>

                            <input type="submit" value="Enviar" className="btn btn-success" />

                        </form>
                    </div>
                    <Sidebar blog="false" />
                </div>
            </div>
        );
    }
}

export default Formulario;