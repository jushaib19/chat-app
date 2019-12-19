import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
      log: false
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this); 
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: '*Username is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: '*Password is required' });
    }
    if (this.state.username && this.state.password)
    {
      this.setState({ error: '', log: true });
      this.props.loggedIn(this.state.username);
    }
    
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {

    let errorPresent = null;
    if (this.state.error)
    {
        errorPresent =  <h4 style={{color: 'red'}} onClick={this.dismissError}>
        <button className='btn' onClick={this.dismissError}>Try Again</button>
        {this.state.error}
      </h4>
    }

    return (
        <div className='allign' >
        <h1>Welcome to Chat-App</h1>
      <div className="body">

      
        <form className="box" onSubmit={this.handleSubmit}>
         
          
                <label>UserName</label>
                <input className='email' type="text"  value={this.state.username} onChange={this.handleUserChange} />


          <label>Password</label>
          <input className='email' type="password"  value={this.state.password} onChange={this.handlePassChange} />
            
          <button className='btn' type="submit" value="Log In"  >Log In
         { this.state.log && <Redirect to="/chat" />}
          </button>
          {errorPresent}
        </form>
      </div>
      </div>
    );
  }
}

export default Login;
