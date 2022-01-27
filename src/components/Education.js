import React from 'react'
import DisplayEducation from './DisplayEducation';

class Education extends React.Component {
    constructor (){
        super()

        this.state = {
            
                school: '',
                title: '',
                startDate: '',
                endDate: '',
            
            
        };
    }

    getSchool = (e) => {
        this.setState({
            
                school: e.target.value,
            
        });
    };

    getTitle = (e) => {
        this.setState({
            
                title: e.target.value,
            
        });
    };

    getStartDate = (e) => {
        this.setState({
            
                startDate: e.target.value
            
        });
    };

    getEndDate = (e) => {
        this.setState({
           
                endDate: e.target.value,
            
        });
    };

    onSubmitTask = (e) => {
        e.preventDefault();
        this.setState({
            
                school: '',
                title: '',
                startDate: '',
                endDate: '',
            
        });
    };

    render() {
        const { school, title, startDate, endDate } = this.state;

        return (
            <div>
                <h2>Educational experience</h2>
                <form onSubmit={this.onSubmitTask}>
                    <label htmlFor="schoolName">School Name</label>
                        <input 
                            onChange={this.getSchool}
                            value={school.value}
                            type="text" 
                            id="schoolName">
                        </input>
                        <br></br>
                    <label htmlFor="title">Title of Study</label>
                        <input 
                            onChange={this.getTitle}
                            value={title.value}
                            type="text" 
                            id="title">
                        </input>
                        <br></br>
                    <label htmlFor="startDateOfStudy">Start date of study</label>
                        <input
                            onChange={this.getStartDate}
                            value={startDate.value}
                            type="date" 
                            id="dateOfStudy">
                            </input>
                        <br></br>
                    <label htmlFor="endDate">End date of working</label>
                        <input 
                            onChange={this.getEndDate}
                            value={endDate.value}
                            type="date" 
                            id="endDate">
                            </input>
                        <br></br>
                    <button type="submit">
                        Submit Educational experience
                    </button>
                </form>
                <DisplayEducation education={school} />
                <DisplayEducation education={title} />
                <DisplayEducation education={startDate} />
                <DisplayEducation education={endDate} />
            </div>
        )
    }
}

export default Education;