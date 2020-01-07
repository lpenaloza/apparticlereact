import React, { Component } from "react";
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

class Seacrh extends Component {

    render() {
        var searched = this.props.match.params.search;
        return (
            <div id="blog">
                <Slider
                    title={'Busqueda: ' + searched }
                    size="slider-small"
                />
                <div className="center">
                    <div id="content">
                        {/* Listado de articulos */}
                        <Articles search={searched} />
                    </div>
                    <Sidebar blog="true" />
                </div>
            </div>
        );
    }
}

export default Seacrh;