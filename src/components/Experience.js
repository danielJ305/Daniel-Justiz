import React from 'react';

class Experience extends React.Component {
    
    
    render = () => (
         <div>
            <h2>Experience / Skills</h2>
            <div className="experience-container">
                <div className="experience__job--title">
                    <button aria-selected="true" className="job--title__container">Freight Hub Group</button>
                </div>
                <div className="experience__job--description"> 
                    <h3>Web Designer / Content Creator at</h3><h3>Freight Hub Group</h3>
                    <h4>October 2019 - Present</h4>
                    <p>Current Job: My daily tasks vary depending on the monthly goal.
                       Labor ranges from revamping custom written websites,
                       making new pages using builders such as WP-Bakery or Elementor
                       and Optimizing pages for optimal loadability on all devices.
                       I am proffecient at graphic design and I use my skills to build their graphics,
                       banners, emails, catalogs, pdf's and more.</p>
                </div>
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