import React, { Component } from 'react';

class LoginRef extends Component {
    constructor(props){
        super(props);
        this.username = React.createRef();
        this.password = React.createRef();
        this.message = React.createRef();
    }

    diplayResut(){
        let response = {
            email: this.username.current.value,
            password : this.password.current.value
        }
        this.message.current.innerHTML = 'Successfully Updated'
    }

    componentDidMount() {
        this.username.current.focus();
    }

    render() {
        return (
            <div>
                <h1>Welcome to Login Page</h1>
                <label>Enter your Email ID :</label>
                <input type="text" placeholder="Enter user name..."
                    name="email" ref={this.username} />
                <br></br>
                <label>Enter your Password:</label>
                <input type="password" placeholder="Enter password..."
                    name="password" ref={this.password}/>
                <br></br>
                <button onClick={() => this.diplayResut()}>Login</button>
                <br></br>
                <h2 ref={this.message}></h2>
            </div>
        );
    }
}

export default LoginRef;