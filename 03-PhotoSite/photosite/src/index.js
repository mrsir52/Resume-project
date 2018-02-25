import React from 'react'
import ReactDOM from 'react-dom'
import "./index.css"
import baby1 from "./img/baby1.jpg"
import belly from "./img/belly.jpg"
import family from './img/family.jpg'


class Photo extends React.Component {
    render() {
        return (

            <section>

            <div class="c-div container">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                            <a class="nav-item nav-link" href="#">Features</a>
                            <a class="nav-item nav-link" href="#">Pricing</a>
                            <a class="nav-item nav-link disabled" href="#">Disabled</a>
                        </div>
                    </div>
                </nav>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src={family} alt="First slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={baby1} alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={belly} alt="Third slide" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

            </div>

            </section>
        )
    }
}


ReactDOM.render(<Photo />, document.getElementById("root"))