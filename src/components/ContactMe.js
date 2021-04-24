import React from 'react';
import Fade from 'react-reveal/Fade';

const ContactMe = () => (
    <Fade bottom cascade duration={600} delay={300}>
        <div className="contact-wrapper">
            <h4 className="contact__subtitle">Like what you see?</h4>
            <h2 className="contact__title">Get In Touch</h2>
            <p className="contact__text">If you would like to collaborate or just say hi, click the button below to send me an email. I am available for hire.</p>
            <a href="mailto:danieljustiz9508@gmail.com"><button className="contact__button">Say Hello</button></a>
        </div>
    </Fade>
)

export default ContactMe;