import React from 'react';
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
        <div>
            <WorkHeader
                state={this.state.active}
                workToggler={this.workToggler}
            />
            { this.state.active ? <WorkDeveloper /> : <WorkGraphic />}

        </div>
    ) 
}

export default WorkShowcase;

// ******************************** (Missing label toggler)