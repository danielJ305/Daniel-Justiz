import React from 'react';
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

const WorkProject = (props) => (
    <div className="work-project">
        <div className="project--image-container">
            <a href={props.link} target="_blank"><img className="project__image" src={props.img} /></a>
        </div>
        <div className="project--text">
            <h4 className="project--text__subtitle">Featured Project</h4>
            <h2 className="project--text__title">{props.title}</h2>
            <p className="project--text__description">{props.description}</p>
            <div>
                {props.tools}
            </div>
            <div>
                <a href={props.gitLink} target="_blank">
                    <AiFillGithub 
                        className="project--text__icon"
                    />
                </a>
                <a href={props.link} target="_blank"> 
                    <AiOutlineLink
                        className="project--text__icon"
                    />
                </a>
            </div>
        </div>
    </div>
)

export default WorkProject;