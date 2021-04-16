import React from 'react';
import ExperienceJobList from './ExperienceJobList';
import ExperienceJobListMobile from './ExperienceJobList-Mobile';

class Experience extends React.Component {

    render = () => (
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
    )
   
}

export default Experience;



