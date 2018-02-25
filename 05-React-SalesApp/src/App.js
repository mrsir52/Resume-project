import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseSales from "./CourseSales";

class App extends Component {
  render() {

      const courses = [

          {name: 'How To Train Your Dragon Vol 1', price: 199},
          {name: 'How To Train Your Dragon Vol 2', price: 150},
          {name: 'How To Train Your Dragon Vol 3', price: 299},
          {name: 'How To Train Your Dragon Vol 4', price: 399},
          {name: 'How To Train Your Dragon Vol 5', price: 499}


      ];


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Course Purchase Page</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

          <CourseSales items = {courses}/>

      </div>
    );
  }
}

export default App;
