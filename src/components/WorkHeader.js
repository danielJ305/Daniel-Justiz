import React from 'react';

const WorkHeader = (props) => (
    <div className="work-header">
        <h2 className="work__title">My Work</h2>
        <h3 className="work__subtitle">Some Things I’ve Built</h3>
        <div className="work-header--toggle-section">
            <label>Web Developer</label>
            <a className="work-button" onClick={props.workToggler}>></a>
            <label>Graphic Design</label>
        </div>
    </div>
)

export default WorkHeader;