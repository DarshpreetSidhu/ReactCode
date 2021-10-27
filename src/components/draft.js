import React, { Component, PureComponent } from 'react';
import axios from 'axios';

class DraftComponent extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            message : 'Mr.Tom'
        }
    }
    onDelete() {
        let url = "https://reqres.in/api/users/2";
        axios.delete(url)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    onUpdate(){
        this.setState({
            message: 'Mr.Tom'
        })
    }
    

    // shouldComponentUpdate(nextProps, nextState){
    //     if(this.state.message == nextState.message){
    //         return false
    //     }
    //     else{
    //         return true;
    //     }
    // }

    render() {
        console.log('Re-Render Page')
        return ( <div>
            <h1> This is a DRAFT Page </h1> 
            <h2>User Name is : {this.state.message}</h2>
            <button onClick={() => this.onUpdate()}> Update UserName </button> 
            </div>
        );
    }
}

export default DraftComponent;

