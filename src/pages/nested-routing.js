import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import InboxComponent from '../components/inbox';
import SentComponent from '../components/sent';
import DraftComponent from '../components/draft';


class NestedRouting extends Component {
    constructor(props){
        super(props);
        this.state={
            userName:'Mr.Bean'

        }
        console.log("this is a Constructor Method")
    }
    componenetWillMount(){
       console.log("this is a componenetwillmount")
    }
    componentDidMount(){
        console.log("this is a componenetdidmount")

    }
    shouldComponentUpdate(nextProps,nextState){
        console.log(this.state.userName)
        console.log(nextState)
        console.log("this is a shouldcomponentupdate")
        if(this.state.userName===nextState.userName){
            return false;
        }
        else{
            return true;
        }
       
    }
    updateName(){
        this.setState({
            userName:'Mr.kate'

        })
    }
    componentWillUpdate(){
        console.log("componentWillUpdate")
    }
    
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
            
    componentWillUnmount(){
        alert("This is a componentWillUnmount")
    }
    render() {
        console.log("this is a render Method")
        return (
            <div>
                <div className="header">Mail Box</div>
                <div className="wapper">
                    <div className="sidebar">
                        <NavLink to="/mail" className="nav-btn" activeClassName="active-btn" exact={true}>Inbox Page</NavLink>
                        <NavLink to="/mail/sent" className="nav-btn" activeClassName="active-btn">Sent Page</NavLink>
                        <NavLink to="/mail/draft" className="nav-btn" activeClassName="active-btn">  Draft Page</NavLink> 
                        <br></br>
                        <button onClick={() => this.updateName()}>Update Name</button>
                        <br></br>
                         <h2> {this.state.userName}</h2>


                    </div>
                    <div className="content">
                       <Switch>
                       <Route path="/mail" exact component={InboxComponent}></Route>
                       <Route path="/mail/sent" component={SentComponent}></Route>
                             
                       <Route path="/mail/draft" component={DraftComponent}></Route>
                       </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default NestedRouting;