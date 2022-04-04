import React, { useState } from 'react'
import './Search.css';

export default function Search({actionEdit, action}) {

    const [Value,setValue] = useState('');

    const Search = () => {
        if (actionEdit)
            action(Value);
    };

    const OnChange = (e) => {
        e.preventDefault();
        setValue(e.target.value);
        if (actionEdit)
            actionEdit(e.target.value);
    };

    return (
        <div className='Search'>
            <input type='text' placeholder='Поиск' value={Value} onChange={OnChange}/>
            <div className='Button' onClick={Search}>&#9658;</div>
        </div>
    )
}
