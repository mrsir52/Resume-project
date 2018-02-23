import React, { Component } from 'react';
import './ContactMe.css'
import Me from './face.jpg'
import Html5 from './html5.svg'
import Css3 from './css3.svg'
import Github from './github.svg'
import Mongo from './mongodb.svg'
import Mysql from './mysql.svg'
import Nodejs from './nodejs-original.svg'
import Npm from './npm.svg'
import Reactimg from './react.svg'
import jsimg from './javascript-original.svg'






export default class AboutMe extends React.Component {
    render() {
        return <div class="contact-main">

            <div class="grid-1">
                <div class="col-5">
                    <div class="top">
                        <img class="img1 headshot" src={Me} alt="Picture of Manny" />
                    </div>
                    <h3>Skills that I am learning</h3>

                    <img class="icon" src={Html5} width={50} height={50} alt="html5 logo" />
                    <img class="icon" src={Css3} width={50} height={50} alt="css3 logo" />
                    <img class="icon" src={jsimg} width={50} height={50} alt="github logo" />
                    <img class="icon" src={Reactimg} width={50} height={50} alt="github logo" />
                    <img class="icon" src={Mongo} width={50} height={50} alt="mongodb logo" />
                    <img class="icon" src={Mysql} width={50} height={50} alt="mysql logo" />
                    <img class="icon" src={Nodejs} width={50} height={50} alt="node.js logo" />
                    <img class="icon" src={Npm} width={50} height={50} alt="npm logo" />
                    <img class="icon" src={Github} width={50} height={50} alt="react logo" />

                </div>
                <div class="col-7">
                    <h2>About Me</h2>

                    <p className="about-me-p">
                        I am currently attending a Full Stack Bootcamp at Helio Training in downtown Salt Lake. I am a career changer excited about getting back into the tech industry and eager to show what I have learned. I enjoy coding and continually striving to perfect my craft as well as learning new skills to stay on top of a constantly changing environment.
                        <br/>
                        <br/>
                        Pre - developer days - I spent 10 years doing technical support/networking support for 2 large corporations. At both companies I was put on advanced/tier 2 support as well as special projects (top client special support, home and business networking install and set up, click to chat support).
                        <br/>
                        <br/>
                        Being an entrepreneur at heart I decided to enter the world of financial services. I worked with various advisors over the span of 9 years from 2008 to 2017. I was able to learn a lot about how money works and help many people prepare for and feel confident about their own journey through retirement.
                        <br/>
                        <br/>
                        In 2017 I decided to take an even bigger leap of faith and decided to try my hand at digital marketing. I have learned a lot over the last year and a half about marketing and the psychology of a buyer. The importance of being top of mind and how to improve the user experience as well how to target specific ads to prospective clients based on data collected.
                    </p>

                </div>

            </div>
            <div>

            </div>

            </div>
    }
}
