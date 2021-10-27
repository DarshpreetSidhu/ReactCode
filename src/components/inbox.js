import React, { Component } from 'react';
import axios from 'axios';
import APIService from '../services/api';

class InboxComponenet extends Component {
    constructor (props){
        super(props);
        this.state ={
            user : {
                data:[]
            }

        }
    }


    async loadUser(){
        let url = "https://reqres.in/api/users?page=2";
        let response = await APIService.getAPI(url);
        this.setState({
            user : response.data
        })
        // APIService.getAPI(url)
        //         .then((response) => {
        //             this.setState({
        //                 user : response.data
        //             })
        //         })
        //         .catch((error) => {
        //             console.log(error)
        //         })
   
    }

    render() {
        console.log (this.state.user)
        let userList =this.state.user.data.map((value,index) => {
            return(
                
                    <div key ={index}>
                        <span>The user Name is {value.first_name} {value.last_name}</span>
                        
                    </div>
            
            )
        })
        return (
            <div>
                <h2>This is a Inbox Page... </h2>
                <button onClick={() => this.loadUser()}>Load User Information </button>
                {userList}
            </div>
        );
    }
}

export default InboxComponenet;