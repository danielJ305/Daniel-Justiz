import React from 'react';
import Fade from 'react-reveal/Fade';

const ContactMe = () => (
    <Fade bottom cascade duration={600} delay={300}>
        <div className="contact-wrapper">
            <h4 className="contact__subtitle">Like what you see?</h4>
            <h2 className="contact__title">Get In Touch</h2>
            <p className="contact__text">Although I'm not currently looking for any new opportunities,
            my inbox is always open. Whether you have a question or just
            want to say hi, I'll try my best to get back to you!</p>
            <a href="mailto:danieljustiz9508@gmail.com"><button className="contact__button">Say Hello</button></a>
        </div>
    </Fade>
)

export default ContactMe;