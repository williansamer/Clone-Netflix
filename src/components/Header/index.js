import React from 'react'
import './Header.css';

export default function index({black}) {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Users_icon.svg/512px-Users_icon.svg.png" alt="User" />
                </a>
            </div>
        </header>
    )
}
