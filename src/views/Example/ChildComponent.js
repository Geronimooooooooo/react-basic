import React from "react";
import './demo.scss'

class ChildComponent extends React.Component {

    state = {
        showJob: false,
    }
    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }
    handleOnClickDeleteJob = (job) => {
        console.log('>>> handleOnclickDelete: ', job)
        this.props.deleteJob(job)
    }
    render() {
        console.log('>>> check props: ', this.props)

        let { arrJobs } = this.props;
        let { showJob } = this.state;
        let check = showJob === true ? 'shoJob = true' : 'showjob = false';
        console.log('>>> check conditional:', check)
        return (
            <>
                {showJob === false ?
                    <div>
                        <button className='btn-shown' onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className='Job-list'>
                            {
                                arrJobs.map((item, index) => {
                                    return (<div key={item.id}>
                                        {item.title} - {item.salary} <></> <span onClick={() => this.handleOnClickDeleteJob(item)}>x</span>
                                    </div>)
                                })
                            }
                        </div>
                        <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                    </>
                }
            </>
        )
    }
}

export default ChildComponent;