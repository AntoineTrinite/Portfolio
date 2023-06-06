import React from 'react';
import '../styles/Footer.css';
import '../img/noise.png';


const Footer = () => {
    return (
        <footer className='f-section noise'>
            
            <div className="footer-group">
                <ul className='footer-lists'>
                    <li className='footer-li'>Mes projets</li>
                    
                    <a className='footer-link' href="https://www.linkedin.com/in/antoine-trinit%C3%A9-8a27a1159/"><li className='footer-li'>LinkedIn</li></a>
                    <li className='footer-li'>Contact</li>
                </ul>
                <ul className='footer-lists'>
                    <li className='footer-li'>Site réalisé avec React</li>
                    <li className='footer-li'>Mentions légales</li>
                </ul>
            </div>
        </footer>
    );
  };
  
  export default Footer;
  