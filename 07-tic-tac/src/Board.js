import React, { Component } from 'react';
import Piece from './Piece'
import './App.css';



// Board.js will have the brains of the game and the game board, Piece.js will hold the pieces.




class Board extends Component {
    render() {

        return (

            <div className="App">
                <div className="App-header">
                    <h1>Tic Tac Toe</h1>

                </div>

                <div className="tic-tac">
                    <div className="row">
                        <div className="right bottom">X</div>
                        <div className="right bottom">X</div>
                        <div className="bottom">X</div>
                    </div>

                    <div className="row">
                        <div className="right bottom">X</div>
                        <div className="right bottom">X</div>
                        <div className="bottom">X</div>
                    </div>

                    <div className="row">
                        <div className="right">X</div>
                        <div className="right">X</div>
                        <div>X</div>
                    </div>

                </div>
            </div>

        );
    }
}

export default Board;
