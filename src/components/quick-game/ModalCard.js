import React from 'react'
import lose from './losetext.gif'
import win from './wintext.gif'


const ModalCard = (props) => {
    return (
        <div onClick={props.close} style={{paddingLeft:"10px", paddingRight:"10px"}} >
            <img src={props.won ? win : lose} alt="result"/>
          
        </div>
    )
}

export default ModalCard
