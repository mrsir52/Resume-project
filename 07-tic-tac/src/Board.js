import React from 'react'
import Glam from 'glamorous'
import Piece from './Piece'
//
// const BoardPieces = Glam.Div({
//
//
// })

const Board = [
    'blank',
    'blank',
        'blank',
        'blank',
        // 'blank',
        // 'blank',
        // 'blank',
        // 'blank',
        // 'blank',
        ]

export default ()=> (

    <div>
        <Piece type={Board[0]} />
        <Piece type={Board[1]} />
        <Piece type={Board[2]} />

    </div>
)