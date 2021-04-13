import React from 'react';
import { RiArrowDropRightFill } from "react-icons/ri";

const WorkHeader = (props) => (
    <div className="work-header">
        <h2 className="work__title">My Work</h2>
        <h3 className="work__subtitle">Some Things I’ve Built</h3>
        <div className="work-header--toggle-section">
            { props.state ? 
            <label className="toggle-section__text">Web Development</label>
            : <label className="toggle-section__text">Graphic Design</label> }
            
            <a className="work-button" onClick={props.workToggler}><RiArrowDropRightFill className="button-icon" /></a>
            
            { props.state ? 
            <label className="toggle-section__text">Graphic Design</label> 
            : <label className="toggle-section__text">Web Development</label> }
        </div>
    </div>
)

export default WorkHeader;