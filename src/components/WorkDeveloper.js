import React from 'react';
import WorkProject from './WorkProject';
import fiuImg from '../Media/fiu-mockup1.jpg';
import noteTaking from '../Media/notetakingapp.jfif'

class WorkDeveloper extends React.Component {
    project = {
        projects: [{
            title: "FIU (Florida International University) Website Mockup",
            description: "I decided to do a mockup of the FIU Website because it enabled me to showcase my abilities to make a fully responsive and interactive website from scratch. Website",
            tools: ['HTML', 'SASS', 'Bootstrap4', 'Vanilla Js'],
            gitLink: 'https://github.com/danielJ305/FIU-Mockup-Website',
            link: 'https://danielj305.github.io/FIU-Mockup-Website/',
            img: fiuImg
        },
        {
            title: "Note Taking App Practice Project",
            description: "The reason I made this project was because it allowed me to further keep practicing what I've previously learned in Javascript.",
            tools: ['REACT', 'SASS'],
            gitLink: 'https://github.com/danielJ305/Note-Taking-App',
            link: 'https://danielj305.github.io/Note-Taking-App/Source/app.html',
            img: noteTaking

        }]
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