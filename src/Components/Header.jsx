import React from 'react';
import '../styles/header.css'

const Header = () => {
    return (
        <div className='head'>
            <h1 className='head-title'>Antoine Trinité</h1>
            <ul className='nav'>
                <li className='link'>Mes projets</li>
                <a className='external-link' href="https://www.linkedin.com/in/antoine-trinit%C3%A9-8a27a1159/"><li className='link'>LinkedIn</li></a>
                <li className='link'>Contact</li>
            </ul>
        </div>
    );
  };
  
  export default Header;
  