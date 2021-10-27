import React, { Component } from 'react';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    diplayResut() {
        this.props.history.push('/home',this.state);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        let score = 90;
        let rank = 11;
        return (
            <div>
                <h1>Welcome to Login Page</h1>
                <label>Enter your Email ID :</label>
                <input type="text" placeholder="Enter user name..."
                    name="email" onChange={this.handleChange} />
                <br></br>
                <label>Enter your Password:</label>
                <input type="password" placeholder="Enter password..."
                    name="password" onChange={this.handleChange} />
                <br></br>
                <button onClick={() => this.diplayResut()}>Login</button>
                <br></br>
                <h3>The entered user email is {this.state.email}</h3>
                <h3>The entered user password is {this.state.password}</h3>
                {score < 35 &&
                    <div>
                        <h2>Sample Condition</h2>
                        <h2>Sample Condition</h2>
                    </div>}
                { rank <= 10 ?
                    <div>
                        <h2>The student is TOPPER</h2>
                    </div>
                    :
                    <div>
                        <h2>The stdent is AVERAGE</h2>
                    </div>}
            </div>
        );
    }
}

export default LoginPage;