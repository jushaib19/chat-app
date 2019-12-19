import React, { Component } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Chat from './components/Chat/Chat';
import {BrowserRouter , Route , Switch } from 'react-router-dom';
//import './Experiment.css';


class App extends Component
{
  state={

    username: ''
   // log: true
  }

  loggedIn = (name) =>
    {

      this.setState({username: name});

    }

  render()
  {

    
      
    return (

      <BrowserRouter>
      <div >
    
         <Switch>
         <Route className='App' exact path="/"  render={(routeProps) => (<Login  {...routeProps}  loggedIn={this.loggedIn} />)   } />
         <Route path="/chat" render={(routeProps) => (<Chat {...routeProps}  loggedInUser={this.state.username} />)   } />
         </Switch>
     
         </div>
         
      </BrowserRouter>
      


    );
  }


}

export default App;
