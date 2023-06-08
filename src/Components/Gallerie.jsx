import React, { useState } from 'react';
import '../styles/Gallerie.css';
import '../img/noise.png';
import booki from '../img/booki-p.webp';
import spaceConcept from '../img/concept-p.webp';
import nina from '../img/nina-p.webp';
import portofolioA from '../img/port-p.webp';

const Gallerie = () => {
  const [activeCard, setActiveCard] = useState(0); // Set initial active card to 0

  const toggleCard = (index) => {
    setActiveCard(index === activeCard ? -1 : index); // Toggle the active state
  };

  return (
    <div className='project-container'>
      <h3 className='project-title'>Mes projets _/</h3>

      <div className="project-divider">
        <div className="description-part">

          {/* Card 1 */}
          <div className={`card ${activeCard === 0 ? 'active' : ''}`}>
            <div className="title-head">
              <span className='project-title-name'>Booki</span>
              <div className='reducer' onClick={() => toggleCard(0)}>
                {activeCard === 0 ? '-' : '+'}
              </div>
            </div>
            <div className="description">
              <div className="tags">
                <div className="tag-card">HTML/CSS</div>
                <div className="tag-card">JS</div>
              </div>
              <p className="project-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quam.
                {/* Rest of the card content */}
              </p>
              <div className="link-access">
                <a className='link-site' href="#">Code Github</a>
                <a className='link-site' href="#">Accéder au site</a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className={`card ${activeCard === 1 ? 'active' : ''}`}>
            <div className="title-head">
              <span className='project-title-name'>Kasa</span>
              <div className='reducer' onClick={() => toggleCard(1)}>
                {activeCard === 1 ? '-' : '+'}
              </div>
            </div>
            <div className="description">
              <div className="tags">
                <div className="tag-card">HTML/CSS</div>
                <div className="tag-card">JS</div>
                <div className="tag-card">React</div>
              </div>
              <p className="project-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quam.
                {/* Rest of the card content */}
              </p>
              <div className="link-access">
                <a className='link-site' href="#">Code Github</a>
                <a className='link-site' href="#">Accéder au site</a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className={`card ${activeCard === 2 ? 'active' : ''}`}>
            <div className="title-head">
              <span className='project-title-name'>Kasa</span>
              <div className='reducer' onClick={() => toggleCard(2)}>
                {activeCard === 2 ? '-' : '+'}
              </div>
            </div>
            <div className="description">
              <div className="tags">
                <div className="tag-card">HTML/CSS</div>
                <div className="tag-card">JS</div>
                <div className="tag-card">React</div>
              </div>
              <p className="project-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quam.
                {/* Rest of the card content */}
              </p>
              <div className="link-access">
                <a className='link-site' href="#">Code Github</a>
                <a className='link-site' href="#">Accéder au site</a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className={`card ${activeCard === 3 ? 'active' : ''}`}>
            <div className="title-head">
              <span className='project-title-name'>Kasa</span>
              <div className='reducer' onClick={() => toggleCard(3)}>
                {activeCard === 3 ? '-' : '+'}
              </div>
            </div>
            <div className="description">
              <div className="tags">
                <div className="tag-card">HTML/CSS</div>
                <div className="tag-card">JS</div>
                <div className="tag-card">React</div>
              </div>
              <p className="project-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quam.
                {/* Rest of the card content */}
              </p>
              <div className="link-access">
                <a className='link-site' href="#">Code Github</a>
                <a className='link-site' href="#">Accéder au site</a>
              </div>
            </div>
          </div>
        </div>

        <div className="gallery-part">
          <div className={`site-card ${activeCard === 0 ? 'active' : ''}`}>
            <span className='site-title'>Booki</span>
            <img className='site-img' src={booki} alt="" />
          </div>
          <div className={`site-card ${activeCard === 1 ? 'active' : ''}`}>
            <span className='site-title'>Kasa</span>
            <img className='site-img' src={spaceConcept} alt="" />
          </div>
          <div className={`site-card ${activeCard === 2 ? 'active' : ''}`}>
            <span className='site-title'>Kasa</span>
            <img className='site-img' src={nina} alt="" />
          </div>
          <div className={`site-card ${activeCard === 3 ? 'active' : ''}`}>
            <span className='site-title'>Kasa</span>
            <img className='site-img' src={portofolioA} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallerie;
