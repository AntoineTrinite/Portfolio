import React from 'react';
import '../styles/Hero.css';
import Moi from '../img/Moi.jpg'

const Hero = () => {
    return (
        <>
            <div className="bg-grid"></div>
                <div className="separator">
                    <div className="pres-sep">
                        <div className="slogan">
                            <span className='hello-span'>Bonjour, </span>
                            <h2 className='dev-title'> je suis <span className='underscore-title'>Développeur web</span></h2>
                        </div>

                        <p className='intro-text'>Passionné par le web et le Japon. Je suis une personne curieuse, motivée et ouverte d’esprit. J’aime découvrir de nouveaux horizons et apprendre de nouvelles choses. </p>

                        <div className="btn-group">
                            <a href="https://github.com/AntoineTrinite"><button className='btn-rs'><i className="fa-brands fa-github"></i> Github</button></a>
                            <a href="https://www.linkedin.com/in/antoine-trinit%C3%A9-8a27a1159/"><button className='btn-rs'><i className="fa-brands fa-linkedin"></i> Linkedin</button></a>
                            <button className='btn-rs'><i className="fa-solid fa-envelope"></i> Mail</button>
                        </div>
                    </div>
                    <div className="img-sep">
                        <img className="img" src={Moi} alt="Auteur" />
                    </div>
                </div>
        </>
    );
  };
  
  export default Hero;
  