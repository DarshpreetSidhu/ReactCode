import React from 'react';
import ReactDOM from 'react-dom';
import{BrowserRouter,Switch,Route} from 'react-router-dom';



import './index.css'
import HeaderComponent from './components/header';
import FooterComponenet from './components/footer';

import LoginPage from './pages/login';
import Register from './pages/register';
import HomePage from './pages/home';
import Checklist from './pages/checklist';
import NestedRouting from './pages/nested-routing';
import LoginRef from './pages/login-ref';


const App = () => {
    return(
       <div>
           <BrowserRouter>
           <switch>
                <Route path="/" exact component={LoginPage}></Route> 
                <Route path="/mail" component={NestedRouting}></Route>
                <Route path="/register" component={Register}></Route> 
               <Route path="/home" component={HomePage}></Route> 
                <Route path="/list" component={Checklist}></Route> 
                <Route path="/login-ref" component={LoginRef}></Route>
              
           </switch>
           </BrowserRouter>
       </div>
    )
};

// function App(){
//     return (
//         <div>
//             <h1 className="header">Wecome To React JS</h1>
//             <h1 className="header">hello world</h1>

//             </div>
//     )
// }
 ReactDOM.render(<App></App>,document.getElementById('root'))