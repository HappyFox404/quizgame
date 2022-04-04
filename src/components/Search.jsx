import React from 'react'
import './Search.css';

export default function Search({action}) {

    const Search = () => {
        if (action)
            action();
    };

    return (
        <div className='Search'>
            <input type='text' placeholder='Поиск' />
            <div className='Button'>&#9658;</div>
        </div>
    )
}
