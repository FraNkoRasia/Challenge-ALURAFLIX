import React from 'react';
import '../Footer/Footer.css';
import logoImage from '/Image/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className='footer'>
            <img src={logoImage} alt="" />
            <p>Web Desarrollada por | Franco Rasia</p>
            <div className="redes">
                <a href="https://www.linkedin.com/in/francorasia/" className="redes-icon"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                <a href="https://github.com/FraNkoRasia?tab=repositories" className="redes-icon"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                <a href="https://wa.me/543583415501" className="redes-icon"><FontAwesomeIcon icon={faWhatsapp} size="2x" /></a>
                <a href="https://t.me/FraNNkop" className="redes-icon"><FontAwesomeIcon icon={faTelegram} size="2x" /></a>
            </div>
        </footer>

    );
}
