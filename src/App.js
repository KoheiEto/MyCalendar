/* import React, { Component } from 'react';
import Component1 from './Component1';
import Component2 from './Component2';

class App extends Component {
    render() {
        return (
            <div className="App">
              < Component2 />
            </div>
        );
    }
}
 */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);

export default App;
