import React, { useState } from 'react'
import List from '../components/List';
import Search from '../components/Search';
import './Lobby.css';
import LobbyItem from './LobbyItem';

export default function Lobby() {

  const [SearchValue,setSearchValue] = useState('');

  const list = [
    {
      name: "123",
      count: 2
    },
    {
      name: "312",
      count: 3
    },
    {
      name: "qwe",
      count: 5
    },
    {
      name: "11",
      count: 1
    },
    {
      name: "dsafs",
      count: 3
    },
  ];

  const SearchEdit = (text) => {
    console.log(text);
    setSearchValue(text);
  };

  const SearchAction = () => {
    console.log(SearchValue);
  };

  const NewLobby = () => {
    console.log("New Lobby");
  };

  const ConnectLobby = () => {
    console.log("Connect Lobby");
  }

  const Filter = (str) => {
    return str.toLowerCase().trim().includes(SearchValue.toLowerCase().trim())
  }

  if(SearchValue.trim() === ''){
    return (
      <div className='Lobby'>
        <div className='Header'>Викторина Online</div>
        <List className='Content' style={{ gridArea: 'Content', margin: '0 20px' }}>
          <div className='PanelAction'>
            <Search actionEdit={SearchEdit} action={SearchAction}/>
            <div onClick={NewLobby} className='Button' style={{fontWeight: '900', marginLeft: '10px', marginBottom:'10px'}}>+</div>
          </div>
          {
            list.map((el) => <LobbyItem item={el} actionConnect={ConnectLobby}/>)
          }
        </List>
      </div>
    )
  } else {
    return (
      <div className='Lobby'>
        <div className='Header'>Викторина Online</div>
        <List className='Content' style={{ gridArea: 'Content', margin: '0 20px' }}>
          <div className='PanelAction'>
            <Search actionEdit={SearchEdit} action={SearchAction}/>
            <div onClick={NewLobby} className='Button' style={{fontWeight: '900', marginLeft: '10px', marginBottom:'10px'}}>+</div>
          </div>
          {
            list.map((el) => (Filter(el.name)) && <LobbyItem item={el} actionConnect={ConnectLobby}/>)
          }
        </List>
      </div>
    )
  }
}
