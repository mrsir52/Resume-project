import React, { Component } from 'react';
import './ContactMe.css'






export default class AboutMe extends React.Component {
    render() {
        return (
            <div class="contact-main">

            <h3>Contact Me</h3>
                <p>
                    Feel free to reach out to me by email at coachmannytw@gmail.com or click on any of the links below to find out more about me.
                </p>

                <div class="contact-div">
                    <ul class = "contact-nav">
                        <a href="/html/">LinkedIn</a>
                        <a href="/html/">Github</a>
                        <a href="/html/">Resume</a>
                    </ul>
                </div>

            </div>

        );
    }
}
