import React, { Component } from 'react';
import axios from 'axios';


class SentPage extends Component {
    constructor (props){
        super (props);
        this.state ={
            name:'',
            job:''
        }
    }
    handleInput= (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })

    }
    onSubmit(){
        console.log(this.state)
        let url = "https://reqres.in/api/users/2";
        axios.put(url, this.state)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <h2>This is a Sent Page....</h2>
                <div>
                    <label>Enter Your Nmae:</label>
                    <input type ="text" placeholder="Enter Your Name..." name="name" onChange={this.handleInput}/>
                    <label>Enter Your Job Description:</label>
                    <input type="text" placeholder="Enter Your Job Description..." name="job" onChange={this.handleInput}/>
                    <br></br>
                    <button onClick={() => this.onSubmit()}>Submit</button>
                </div>
            </div>
        );
    }
}

export default SentPage;