import React from 'react'
import ReactDOM from 'react-dom'
import Pokemon from './ed/AddNums.jsx'

class IndexComp extends React.Component {
    render(){
        return(
            <div>
            <div></div>
            <Pokemon />
            </div>

        )
    }
}

ReactDOM.render( <IndexComp />, document.getElementById('root') )