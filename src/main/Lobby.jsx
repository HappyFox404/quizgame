import React, { useState } from 'react'
import List from '../components/List';
import Search from '../components/Search';
import './Lobby.css';

export default function Lobby() {

  const [SearchValue,setSearchValue] = useState('');

  const list = [
    <div>1</div>,
    <div>2</div>,
    <div>3</div>,
    <div>4</div>,
    <div>5</div>
  ];

  const SearchEdit = (text) => {
    console.log(text);
    setSearchValue(text);
  };

  const SearchAction = () => {
    console.log(SearchValue);
  };

  return (
    <div className='Lobby'>
      <div className='Header'>Викторина Online</div>
      <List className='Content' style={{ gridArea: 'Content', margin: '0 20px' }}>
        <Search actionEdit={SearchEdit} action={SearchAction}/>
        {
          list.map((el) => el)
        }
      </List>
    </div>
  )
}
