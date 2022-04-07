import React from 'react'

import './LobbyItem.css';

export default function LobbyItem({item, actionConnect, style}) {

    const Button = () => {
        if(actionConnect)
            actionConnect();
    }

  return (
    <div className='LobbyItem' style={style}>
        <div className='ItemInfo ItemText'>Название: {item.name}</div>
        <div className='ItemInfo ItemText'>Игроков: {item.count}/5</div>
        <div className='Button' onClick={Button} style={{marginLeft:'10px'}}>&#10004;</div>
    </div>
  )
}
