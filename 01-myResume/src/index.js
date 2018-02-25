import React from 'react'
import ReactDOM from 'react-dom'

import Intro from './Intro.jsx'
import AboutMe from './AboutMe.jsx'
import ContactMe from './ContactMe'

class Resume extends React.Component {
    render() {
        return (
            <div>

                <div>
                    <Intro/>

                </div>

                <div>

                    <AboutMe />

                </div>

            </div>

        )
    }
}


    ReactDOM.render(<Resume />, document.getElementById("root"))