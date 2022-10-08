import React from 'react';

//** React Google Analytics **//
import ReactGA from 'react-ga';
//** ___________________________________________________________ **/

import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

const WorkProject = (props) => {
    const clicked = () => {
        ReactGA.event({
            category: 'User',
            action: 'Project Look-up Attempt',
            label: 'My Work'
        });
    }

    return (
        <div className="work-project">
            <div className="project--image-container">
                <a href={props.link} target="_blank"><img onClick={clicked} className="project__image" src={props.img} /></a>
            </div>
            <div className="project--text">
                <h4 className="project--text__subtitle">Featured Project</h4>
                <h2 className="project--text__title">{props.title}</h2>
                <p className="project--text__description">{props.description}</p>
                <div>
                    {props.tools}
                </div>
                <div>
                    {props.gitLink && <a onClick={clicked} href={props.gitLink} target="_blank">
                        <AiFillGithub 
                            className="project--text__icon"
                        />
                    </a>}
                    <a onClick={clicked} href={props.link} target="_blank"> 
                        <AiOutlineLink
                            className="project--text__icon"
                        />
                    </a>
                </div>
            </div>
        </div>
    )   
}

export default WorkProject;