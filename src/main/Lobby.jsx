import React from 'react'
import List from '../components/List';
import Search from '../components/Search';
import './Lobby.css';

export default function Lobby() {
  return (
    <div className='Lobby'>
      <div className='Header'>Викторина Online</div>
      <List className='Content' style={{ gridArea: 'Content', margin: '0 20px' }}>
        <Search/>
        <div>123</div>
        <div>321</div>
        <div>231</div>
        <div>1222</div>
      </List>
    </div>
  )
}
