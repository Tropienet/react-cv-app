import React from 'react'
import DisplayExperience from './DisplayExperience'


class PracticalExperience extends React.Component {
    constructor () {
        super()

        this.state = {
            companyName: '',
            positionTitle: '',
            startDate: '',
            endDate: '',
        };
    };

    getCompanyName = (e) => {
        this.setState({
            companyName: e.target.value
        });
    };

    getPositionTitle = (e) => {
        this.setState({
            
                positionTitle: e.target.value
            
        });
    };

    getStartDate = (e) => {
        this.setState({
            
                startDate: e.target.value
            
        });
    };

    getEndDate = (e) => {
        this.setState({
            
                endDate: e.target.value
            
        });
    };

    onSubmitPractical = (e) => {
        e.preventDefault();
        this.setState({
            companyName: '',
            positionTitle: '',
            startDate: '',
            endDate: '',
        });
    };

    render() {
        const { companyName, positionTitle, startDate, endDate } = this.state;

        return (
            <div>
                <h2>Practical Experience</h2>
                <form onSubmit={this.onSubmitPractical}>
                    <label htmlFor="companyName">Company Name</label>
                        <input 
                            onChange={this.getCompanyName}
                            value={companyName.value}
                            type="text"
                            id="companyName">
                        </input>
                        <br></br>
                    <label htmlFor="positionTitle">Position Title</label>
                        <input 
                            onChange={this.getPositionTitle}
                            value={positionTitle.value}
                            type="text" 
                            id="positionTitle">
                        </input>
                        <br></br>
                    <label htmlFor="startDate">Start date of working</label>
                        <input 
                            onChange={this.getStartDate}
                            value={startDate.value}
                            type="date" 
                            id="startDate"
                            ></input>
                        <br></br>
                    <label htmlFor="endDate">End date of working</label>
                        <input 
                            onChange={this.getEndDate}
                            value={endDate.value}
                            type="date" 
                            id="endDate"
                            ></input>
                        <br></br>
                    <button type="submit">
                        Submit Practical Experience
                    </button>
                    <button type="submit">
                        Edit Practical experience
                    </button>
                </form>
                <DisplayExperience experience={companyName} />
                <DisplayExperience experience={positionTitle} />
                <DisplayExperience experience={startDate} />
                <DisplayExperience experience={endDate} />
            </div>
        )
    }
}

export default PracticalExperience;