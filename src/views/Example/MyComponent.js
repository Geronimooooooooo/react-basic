import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'Developer', salary: '500' },
            { id: 'abcJob2', title: 'Tester', salary: '400' },
            { id: 'abcJob3', title: 'Project Manager', salary: '1000' }
        ]
    }
    addNewjob = (job) => {
        console.log('Check job from parent', job)
        // let currentJob = this.state.arrJobs;
        // currentJob.push(job)
        this.setState({
            // arrJobs: currentJob
            arrJobs: [...this.state.arrJobs, job]
        })
    }
    deleteJob = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJob
        })
    }

    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <AddComponent
                    addNewjob={this.addNewjob}
                />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                />

            </>
        )
    }
}

export default MyComponent;