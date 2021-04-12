import React from 'react';
import WorkHeader from './WorkHeader';
import WorkDeveloper from './WorkDeveloper';
import WorkGraphic from './WorkGraphic';

class WorkShowcase extends React.Component {
    state = {
        active: false
    }

    workToggler = () => {
        this.setState(() => ({ active: !this.state.active }))
    }

    render = () => (
        <div>
            <WorkHeader
                workToggler={this.workToggler}
            />
            { this.state.active ? <WorkDeveloper /> : <WorkGraphic />}

        </div>
    )
}

export default WorkShowcase;

