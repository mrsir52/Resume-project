import React from 'react'
import Glam from 'glamorous'
import Board from './Board'

const PieceTitle = Glam.div({

        fontSize: '240px',
        textAlign: 'center'

})


export default (props) => (

        <PieceTitle>
            {props.type}

        </PieceTitle>


)