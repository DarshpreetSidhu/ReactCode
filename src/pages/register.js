import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            gender: '',
            hobbies: [],
            city: '',
            dob: '',
            address: '',
            error_firstName: false,
            error_lastName: false,
            error_email: false,
            error_email_format: true,
            error_password: false,
            error_gender: false,
            error_hobbies: false,
            error_city: false,
            error_dob: false,
            error_address: false,
            password_icon: true
        }
    }

    onRegister() {
        console.log(this.state)
        this.setState({
            error_firstName: this.state.firstName === '' ? true : false,
            error_lastName: this.state.lastName === '' ? true : false,
            error_email: this.state.email === '' ? true : false,
            error_password: this.state.password === '' ? true : false,
            error_gender: this.state.gender === '' ? true : false,
            error_hobbies: this.state.hobbies === '' ? true : false,
            error_city: this.state.city === '' ? true : false,
            error_dob: this.state.dob === '' ? true : false,
            error_address: this.state.address === '' ? true : false
        })
        // if (this.state.firstName === '') {
        //     this.setState({
        //         error_firstName: true
        //     })
        // }
        // else {
        //     this.setState({
        //         error_firstName: false
        //     })
        // }
    }

    handleChange = (event) => {
        if (Array.isArray(this.state[event.target.name])) {
            if (event.target.checked) {
                this.state.hobbies.push(event.target.value);
                this.setState({
                    hobbies: this.state.hobbies
                })
            }
            else {
                let index = this.state.hobbies.findIndex((value) => {
                    return value === event.target.value
                });
                this.state.hobbies.splice(index, 1);
                this.setState({
                    hobbies: this.state.hobbies
                })
            }

        }
        else {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    }

    handleFocus = (event) => {
        this.setState({
            ["error_" + event.target.name]: false
        })
        if (event.target.name === 'email') {
            this.setState({
                error_email_format: true
            })
        }
    }

    handleBlur = (event) => {
        if (event.target.value === '') {
            this.setState({
                ["error_" + event.target.name]: true
            })
        }
        if (event.target.name === 'email' && event.target.value !== '') {
            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            this.setState({
                error_email_format: reg.test(event.target.value)
            })
        }
    }

    toggelIcon() {
        this.setState({
            password_icon: !this.state.password_icon
        })
    }

    render() {
        return (
            <div>

                <h3>Welcome to Register Page</h3>
                <label>Enter your First Name: </label>
                <input type="text" name="firstName" placeholder="Enter your first name.." onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur} />
                {this.state.error_firstName && <span className="error-msg">Please enter your first name</span>}
                <br></br>
                <label>Enter your Last Name: </label>
                <input type="text" name="lastName" placeholder="Enter your last name.." onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur} />
                {this.state.error_lastName && <span className="error-msg">Please enter your last name</span>}
                <br></br>
                <label>Enter your Email Id: </label>
                <input type="text" name="email" placeholder="Enter your email id.." onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur} />
                {this.state.error_email && <span className="error-msg">Please enter your email</span>}
                {!this.state.error_email_format && <span className="error-msg">Invalid Email Format</span>}
                <br></br>

                <label>Enter your Password: </label>
                <input type={this.state.password_icon ? 'password' : 'text'} name="password" placeholder="Enter your password.."
                 onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur} />

                {this.state.password_icon ? <img src= {require('../images/closed-eye.png')} alt="" className="closed-eye" onClick={() => this.toggelIcon()} />
                 : <img src={require('../images/open-eye.png')}  alt="" className="open-eye" onClick={() => this.toggelIcon()} />}

                {this.state.error_password && <span className="error-msg">Please enter your password</span>}
                <br></br>
                <label>Enter Date of Birth: </label>
                <input type="date" name="dob" onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur} />
                {this.state.error_dob && <span className="error-msg">Please select your dob</span>}
                <br></br>
                <label>Select your gender: </label>

                <input className="radio-checkbox" type="radio" name="gender" value="male" onChange={this.handleChange} />Male

                <input className="radio-checkbox" type="radio" name="gender" value="female" onChange={this.handleChange} />Female

                <input className="radio-checkbox" type="radio" name="gender" value="others" onChange={this.handleChange} />Others
                <br></br>
                {this.state.error_gender && <span className="error-msg">Please select your gender</span>}
                <br></br>

                <label>Select your hobbies</label>
                <input type="checkbox" className="radio-checkbox" value="cricket" name="hobbies" onChange={this.handleChange} />Cricket
                <input type="checkbox" className="radio-checkbox" value="football" name="hobbies" onChange={this.handleChange} />Football
                <input type="checkbox" className="radio-checkbox" value="vollyball" name="hobbies" onChange={this.handleChange} />Vollyball
                <input type="checkbox" className="radio-checkbox" value="chess" name="hobbies" onChange={this.handleChange} />Chess
                <input type="checkbox" className="radio-checkbox" value="basketball" name="hobbies" onChange={this.handleChange} />BasketBall
                <input type="checkbox" className="radio-checkbox" value="hockey" name="hobbies" onChange={this.handleChange} />Hockey
                <br></br>
                {this.state.error_hobbies && <span className="error-msg">Please select your hobbies</span>}
                <br></br>
                <label>Enter your Address: </label>
                <textarea name="address" placeholder="Enter your address.." onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur}></textarea>
                {this.state.error_address && <span className="error-msg">Please enter your address</span>}
                <br></br>
                <label>Select your city: </label>
                <select name="city" onChange={this.handleChange} defaultValue={''}>
                    <option value="" disabled>--Select any city--</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Pune">Pune</option>
                </select>
                <br></br>
                {this.state.error_city && <span className="error-msg">Please select your city</span>}
                <br></br>
                <button onClick={() => this.onRegister()}>Register</button>
            </div>
        );
    }
}

export default Register;

