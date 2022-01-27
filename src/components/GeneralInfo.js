import React from "react"
import DisplayInfo from "./DisplayInfo"

class GeneralInfo extends React.Component {
    constructor() {
        super()

        this.state = {
            name: '',
            phone: '',
            email: '',
            
        }
    }

    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        });
    };

    onChangePhone = (e) => {
        this.setState({
            phone: e.target.value
        });
    };

    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    };

    onSubmitTask = (e) => {
        e.preventDefault();
        this.setState({
            name: '',
            phone: '',
            email: '',
        });
    };

    render() {
        const { name, phone, email } = this.state;

        return (
            <div>
                <form onSubmit={this.onSubmitTask}>
                    <label htmlFor="name">Name</label>
                    <input
                        onChange={this.onChangeName}
                        value={name}
                        type="text" 
                        id="name" 
                    />
                    <label htmlFor="phone">Phone</label>
                    <input 
                        onChange={this.onChangePhone}
                        value={phone}
                        type="tel" 
                        id="phone" 
                    />
                    <label htmlFor="email">Email</label>
                    <input 
                        onChange={this.onChangeEmail}
                        value={email}
                        type="email" 
                        id="email" 
                        />
                    <button type="submit">
                        Submit Info
                    </button>
                </form>
                <DisplayInfo info={name}/>
                <DisplayInfo info={phone}/>
                <DisplayInfo info={email}/>
            </div>
        )
    }
}

export default GeneralInfo;