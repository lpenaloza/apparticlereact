import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import Global from '../Global';
import Sidebar from './Sidebar';
import Moment from 'react-moment';
import 'moment/locale/es';
import { Link, Redirect } from 'react-router-dom';

//const store = createStore(() => { }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
class Article extends Component {

    url = Global.url;

    state = {
        article: false,
        status: null
    };

    componentWillMount() {
        this.getArticle();
    }

    getArticle = () => {
        var id = this.props.match.params.id;
        axios.get(this.url + 'article/' + id)
            .then(res =>{
                
                this.setState({
                    article: res.data.article,
                    status: 'success'
                });
                
            }).catch( err => {
                this.setState({
                    article: false,
                    status: 'success'
                })
            });
    }

    deleteArticle = (id) => {

        swal({
            title: "¿Estás seguro que deseas borrar este artículo?",
            text: "Una vez eliminado, ¡no podrá recuperar el artículo!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                axios.delete(this.url + 'article/' + id)
                    .then(res => {

                        this.setState({
                            article: res.data.article,
                            status: 'deleted'
                        });

                        swal(
                            'Artículo borrado',
                            'El artículo ha sido borrado correctamente',
                            'success'
                        );

                    });
            } else {
                swal(
                    'Ok',
                    'No se ha borrado ningún artículo',
                    'success'
                );
            }
        });

       
    }

    render() {
        if (this.state.status === 'deleted') {
            return <Redirect to="/blog" />
        }
        var article = this.state.article;

        return (
            <div className="center">
                <section id="content">
                    {this.state.article &&
                        <article className="article-item article-detail">                           
                            {article.image !== null &&
                                <div className="image-wrap">
                                    <img src={this.url + 'get-image/' + article.image} alt={article.title} />
                                </div>
                            }
                            <h1 className="subheader">{article.title}</h1>
                            <span className="date">
                                <Moment locale="es" fromNow>{article.date}</Moment>  
                            </span>
                            <p>
                                {article.content}
                            </p>   

                            <button onClick={
                                () => {
                                    this.deleteArticle(article._id)
                                }
                            }
                            className="btn btn-danger">Eliminar</button>

                            <Link to={'/blog/editar/' + article._id} className="btn btn-warning">Editar</Link>

                            <div className="clearfix"></div>
                        </article>
                    }

                    {!this.state.article && this.state.status === 'success' &&
                        <div id="article">
                            <h2 className="subheader">El artículo no exíste</h2>
                            <p>Intentalo de nuevo más tarde</p>
                        </div>
                    }

                    {this.state.status == null &&
                        <div id="article">
                            <h2 className="subheader">Cargando...</h2>
                            <p>Espere unos segundos</p>
                        </div>
                    }

                </section>
                <Sidebar />
            </div>
        )
    }
}

export default Article;
