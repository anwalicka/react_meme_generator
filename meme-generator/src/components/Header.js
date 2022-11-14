import React from 'react';
import './Header.css';
import trollface from './img/troll.svg';
export default function Header() {
    return (
        <header className='header'>
            <img className='header--image' src={trollface} />
            <p className='header--title'>Meme Generator</p>
            <p className='header--project'>React Course - Project 3</p>
        </header>
    )
}