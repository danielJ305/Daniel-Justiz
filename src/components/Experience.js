import React from 'react';
import Fade from 'react-reveal/Fade';
import ExperienceJobList from './ExperienceJobList';
import ExperienceJobListMobile from './ExperienceJobList-Mobile';

class Experience extends React.Component {

    render = () => (
        <Fade bottom cascade duration={600} delay={300}>
            <div>
                <h2>Experience / Skills</h2>
                <div className="experience-container">
                    <ExperienceJobListMobile />
                    <ExperienceJobList />
                    <div className="experience__job--skills">
                        <h3>Skills</h3>
                        <ul>
                            <li>Javascript (ES6+)</li>
                            <li>React</li>
                            <li>Wordpress</li>
                            <li>Sass</li>
                            <li>JQuery</li>
                            <li>NodeJS</li>
                            <li>Photoshop</li>
                            <li>Illustrator</li>
                            <li>InDesign</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fade>
    )
   
}

export default Experience;



