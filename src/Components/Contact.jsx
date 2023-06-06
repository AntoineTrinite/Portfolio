import React from 'react';
import '../styles/Contact.css';
import coffee from '../img/coffe.jpg';

const Contact = () => {
    return (
        <>
        <h3 className='title-h3'>Une offre, un projet, contactez-moi _/</h3>
            <div className='contact-form-all'>
                <div className="bg-grid-2"></div>
                    
                    <form className='contact-form-part' action="#" method="POST">
                        <label htmlFor="nom"></label>
                        <input className="input" type="text" id="nom" name="nom" placeholder='Nom' required /><br/>

                        <label htmlFor="email"></label>
                        <input className="input" type="email" id="email" name="email" placeholder='Email' required /><br/>

                        <label htmlFor="message"></label>
                        <textarea id="message" name="message" rows="4" className="input" placeholder='Message' required></textarea><br/>

                        <div className="submit-button-container">
                            <input id='submit' type="submit" value="Envoyer" />
                        </div>
                    </form>

                    <div className="contact-img-part">
                        <img className='img-coffee' src={coffee} alt="" />
                    </div>
            </div>
        </>
    );
};

export default Contact;
