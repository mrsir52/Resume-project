import React, { Component } from 'react';

import './css/style.css';

import { Button, Card, CardBody, CardImage, CardTitle, CardText, View, } from 'mdbreact';
import Me from './img/face.jpg'
import Html5 from './img/html5.svg'
import Css3 from './img/css3.svg'
import Mongo from './img/mongodb.svg'
import Nodejs from './img/nodejs-original.svg'
import Npm from './img/npm.svg'
import Reactimg from './img/react.svg'
import jsimg from './img/javascript-original.svg'
import bstrap from './img/bootstrap-plain.svg'
import github from './img/github.svg'
import graphql from './img/graphql.svg'
import bit from './img/bitcoin.png'




export default class Main extends React.Component {
    render() {
        return (
            <div>
                {/* Landing page section */}
                <section id="top-section">
                    {/*Background Image */}

                    <div className="view intro">
                        <div classNme="mask rgba-black-light d-flex justify-content-center align-items-center">


                            <div className="intro-text mx-5 fadeIn">
                                <h1 className="display-2">
                                    <strong>Manny Torres</strong>
                                </h1>

                                <p className="display-4">
                                    Full Stack Web Developer
                                </p>


                            </div>
                        </div>
                    </div>

                </section>

                {/*About me section */}
                <section className="container aboutme-div">
                    <div className="row">

                        <div className="col-md-6 col-mb-4">
                            <div className="top-about">
                                <img class="img1 headshot" src={Me} alt="Picture of Manny" />

                            </div>
                            <br/>
                            <br/>
                            <h2>Skills that I am learning</h2>
                            <div className="icon-div">

                                <img class="icon" src={Html5} width={50} height={50} alt="html5 logo" />
                                <img class="icon" src={Css3} width={50} height={50} alt="css3 logo" />
                                <img class="icon" src={jsimg} width={50} height={50} alt="github logo" />
                                <img class="icon" src={Reactimg} width={50} height={50} alt="github logo" />
                                <img class="icon" src={Mongo} width={50} height={50} alt="mongodb logo" />
                                <img class="icon" src={graphql} width={50} height={50} alt="mysql logo" />
                                <img class="icon" src={Nodejs} width={50} height={50} alt="node.js logo" />
                                <img class="icon" src={Npm} width={50} height={50} alt="npm logo" />
                                <img class="icon" src={github} width={50} height={50} alt="react logo" />
                                <img class="icon" src={bstrap} width={50} height={50} alt="react logo" />

                            </div>
                            <div className="contact-me">
                                <h2>Connect with me on LinkedIn or view some of my code.</h2>
                                <a href="https://www.linkedin.com/in/manny-torres-ut/"><i class="fab fa-linkedin icon-link"></i></a>
                                <a href="https://github.com/mrsir52"><i className="fab fa-github-square icon-link"></i></a>
                            </div>

                        </div>
                        <div className="col-md-6 mb-4">
                            <h2>About Me</h2>
                            <p className="about-me-p">
                                I am currently traingin to be a Full Stack Developer at Helio Training in downtown Salt Lake. I am a career changer excited about getting back into the tech industry and eager to show what I have learned. I enjoy coding and continually striving to perfect my craft as well as learning new skills to stay on top of a constantly changing environment.
                                <br/>
                                <br/>
                                Pre - developer days - I spent 10 years doing technical support/networking support for 2 large corporations. At both companies I was put on advanced/tier 2 support as well as special projects (top client special support, home and business networking install and set up, click to chat support).
                                <br/>
                                <br/>
                                Being an entrepreneur at heart I entered the world of financial services. I worked with various advisors over the span of 9 years from 2008 to 2017. I was able to learn a lot about how money works and help many people prepare for and feel confident about their own journey through retirement.
                                <br/>
                                <br/>
                                In 2017 I decided to take an even bigger leap of faith and decided to try my hand at digital marketing. I have learned a lot over the last year and a half about marketing and the psychology of a buyer. The importance of being top of mind and how to improve the user experience as well how to target specific ads to prospective clients based on data collected.
                            </p>

                        </div>

                    </div>

                </section>   {/*End of About me section */}

                <section className="projects-section">

                    <div className="container proj-header">
                        <div>

                            <h2>My Projects</h2>
                        </div>

                        <div className="row">
                            <div className="col-md-4">

                            </div>

                            <div className="col-md-4">

                                <Card>

                                    <CardImage className="img-fluid" src={bit} />
                                    <CardBody>

                                        <CardTitle>Bitcoin Counter</CardTitle>
                                        <CardText>This was my first React projcet that used props to calculate the prices</CardText>
                                        <Button color="black" href="https://jolly-snyder-ff1ae6.netlify.com">View Site</Button>
                                    </CardBody>
                                </Card>

                            </div>

                            <div className="col-md-4">



                        </div>

                        </div>

                    </div>


                </section>

            </div>

        )
    }
}
