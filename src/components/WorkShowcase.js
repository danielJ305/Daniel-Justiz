import React from 'react';
import Fade from 'react-reveal/Fade';
import WorkHeader from './WorkHeader';
import WorkDeveloper from './WorkDeveloper';
import WorkGraphic from './WorkGraphic';

class WorkShowcase extends React.Component {
    state = {
        active: true
    }

    workToggler = () => {
        this.setState(() => ({ active: !this.state.active }))
    }

    render = () => (
        <Fade bottom duration={1000} delay={300}>
        <div>
            <WorkHeader
                state={this.state.active}
                workToggler={this.workToggler}
            />
            { this.state.active ? <WorkDeveloper /> : <WorkGraphic />}

        </div>
        </Fade>
    ) 
}

export default WorkShowcase;

// ******************************** (Missing label toggler)