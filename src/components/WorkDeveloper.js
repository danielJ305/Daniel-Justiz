import React from 'react';
import WorkProject from './WorkProject';
import fiuImg from '../../public/Media/fiu-mockup1.jpg';
import homeCare from '../../public/Media/ParadiseHomeCare.jpg';

class WorkDeveloper extends React.Component {
    project = {
        projects: [{
                title: "Paradise Home Care Website",
                description: "This Website is for a Miami-based client's elderly care business. The site is still under construction, waiting for the home to be finished being constructed.",
                tools: ['HMTL', 'SASS', 'Javascript', 'NodeJS Handlebars'],
                gitLink: 'https://github.com/danielJ305/RetirementHome',
                link: 'https://justiz-paradisehome-website.herokuapp.com/',
                img: homeCare
            },
            {
                title: "FIU (Florida International University) Website Mockup",
                description: "After learning HTML/CSS/Javascript this was one of the first personal projects I built. A replica of the FIU Website back in 2018. Fully responsive and an exact mockup of the actual 2018 website.",
                tools: ['HTML', 'SASS', 'Bootstrap4', 'Vanilla JS'],
                gitLink: 'https://github.com/danielJ305/FIU-Mockup-Website',
                link: 'https://danielj305.github.io/FIU-Mockup-Website/',
                img: fiuImg
            }
        ]
    } 

    render = () => (
        <div className="work-developer">
            {
                this.project.projects.map((project) => (
                    <WorkProject 
                        key={project}
                        title={project.title}
                        description={project.description}
                        gitLink={project.gitLink}
                        link={project.link}
                        img={project.img}
                        tools={project.tools.map((tool) => <label className="project--text__tool">{tool}</label>)}
                    />
                ))
            }
        </div>
    )
}

export default WorkDeveloper;