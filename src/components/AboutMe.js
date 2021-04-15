import React from 'react';
import morty from '../Media/Morty.png'

const AboutMe = () => (
    <div className="aboutme-wrapper">
        <div className="aboutme--text">
            <h2>About Me</h2>
            <p>Hello, I'm a Web Developer, I have a diverse set of skills,
                ranging from Graphic Design to Web Development. Every day I
                get better and I'm one step closer to becoming a software engineer.
                I always keep busy and when I'm not working, I like to read, exercise, 
                and do outdoor activities.</p>
            <p>Hello, I'm a Web Developer, I have a diverse set of skills,
                ranging from Graphic Design to Web Development. Every day I
                get better and I'm one step closer to becoming a software engineer.
                I always keep busy and when I'm not working, I like to read, exercise, 
                and do outdoor activities.</p>
        </div>
        <div className="aboutme--image">
            <img src={morty} />
        </div>
    </div>
) 



export default AboutMe;