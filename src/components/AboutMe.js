import React from 'react';
import Fade from 'react-reveal/Fade';
import me from '../../public/Media/me.jpg'

const AboutMe = () => (
    <Fade bottom cascade duration={600} delay={300}>
        <div className="aboutme-wrapper">
            <div className="aboutme--text">
                <h2>About Me</h2>
                <p>Hello, my name is Daniel and I have a diverse set of skills, ranging from Graphic Design to Web Development. Although I have a good eye for design, my career interests strongly pivot toward programming. I am an undergraduate student at Miami Dade College working on my Computer Science prerequisites.</p>
                <p>Every day I get better and every day I'm one step closer to becoming a <span className="highlight">software engineer</span>. I often welcome new challenges into my life,  I always keep busy and when I'm not working, I like to read, exercise, and do outdoor activities.</p>
            </div>
            <div className="aboutme--image">
                <img src={me} />
            </div>
        </div>
    </Fade>
) 



export default AboutMe;