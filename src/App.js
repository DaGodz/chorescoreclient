import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import 'bootstrap/less/bootstrap.less';

import ListChores from './ListChores';

var App = React.createClass({
  
  getInitialState: function() {
    return {
      chores: []
    }
  },
  
  componentDidMount() {
      var _this = this;
    this.serverRequest = axios.get("https://chorescore-pljhll.c9users.io/api/chores")
    .then(function(result) {    
      _this.setState({
        chores: result.data
      });
    })
  },
    componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  
    handleSubmit: function (event) {
    event.preventDefault();
    // Scroll to the top of the page to show the status message.
    document.getElementById('heading').scrollIntoView();
    this.setState({ type: 'info', message: 'Sending...' }, this.sendFormData);
  },
  
  render: function() {
    return (

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. HELLO DAVE! BOOM! WHAT?!
        </p>
        
        <ul>
        {this.state.chores.map(function(chore) {
          return (
            <li>
              
                {chore.name}
                was done by 
                {chore.who} on
                {chore.when}
              
            </li>
          );
        })}
        </ul>
          <ListChores />
      </div>
      
      
      
    );
  }
});



export default App;