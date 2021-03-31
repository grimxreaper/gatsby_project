import React from 'react'
import { Link } from 'gatsby';


const Header  = () => {
    return (
        <div>
            <h1>Crypt Mystic Tarot</h1>
            <nav>
                <ul>
                    <li><Link to="../blog">Writings</Link> </li>
                    <li><Link to="../about">About</Link></li>
                    <li><Link to="../contact">Get In Touch</Link> </li>
                    <li><Link to="/">Home</Link></li>
                </ul>
            
            </nav>
        </div>
    )
}

export default Header;