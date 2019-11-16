import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './scss/App.scss';
import NavBar from '../components/NavBar';
import AddAdmin from './AddAdmin';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/addadmin' render={({ history }) => (
            <AddAdmin />
          )}>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
