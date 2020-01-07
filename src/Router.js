import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Error from './components/Error';

class Router extends Component {

    render() {
        return (
            <BrowserRouter>

                <Header />

                {/* CONFIGURAR RUTAS Y PÁGINAS */}
                <Switch>

                    <Route exact path="/" component={Home} />

                    <Route exact path="/home" component={Home} />

                    <Route exact path="/pagina-1" render={() => (
                        <h1>Hola Mundo desde la ruta: Pagina 1</h1>
                    )} />

                    <Route exact path="/pruebas/:nombres/:apellidos?" render={(props) => {
                        var nombres = props.match.params.nombres;
                        var apellidos = props.match.params.apellidos;

                        return (
                            <div id="content">
                                <h1 className="subheader">Página de pruebas</h1>
                                <h2>{nombres + ' ' + apellidos}</h2>
                            </div>
                        )
                    }
                    } />

                    <Route component={Error} />

                </Switch>

                
                <div className="clearfix"></div>
                <Footer />
            </BrowserRouter>
        )
    }
}

export default Router; 