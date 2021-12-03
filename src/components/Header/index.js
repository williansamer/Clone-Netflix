import React, { useContext } from 'react'
import {Context} from '../Context/ContextAPI';
import './Header.css';

export default function Header() {

    const {blackHeader} = useContext(Context);
    
    return (
        <header className={blackHeader ? 'black' : ''}>
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
