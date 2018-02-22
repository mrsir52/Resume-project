import React from 'react'
import './style.css'
import NameBadge from './NameBadge'

export default class AddNums extends React.Component{
    render(){

        return(

            <div>
                <NameBadge />
              <h1>Add Two Numbers</h1>
                <br/>
                <br/>
                <input className="input-field" type="text"/>
                <br/>
                <br/>
                <br/>
                <input className="input-field" type="text"/>
                <br/>
                <br/>
                <br/>
                <input type="submit" value={"Add Numbers"}/>
                <br/>
                <br/>
                <br/>
                <input className="answer" type="text"/>


            </div>

        )
    }
}

