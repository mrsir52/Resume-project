import React from 'react'
import ReactDOM from 'react-dom'
import './Resume.css';
import Intro from './Intro.jsx'
import AboutMe from './AboutMe.jsx'
import ContactMe from './ContactMe'

class Resume extends React.Component {
    render() {
        return (
            <div>

                <div>
                    <Intro/>
                    <AboutMe />
                </div>

                <div>


                </div>

            </div>

        )
    }
}


    ReactDOM.render(<Resume />, document.getElementById("root"))