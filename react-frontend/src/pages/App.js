import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './scss/App.scss';
import NavBar from '../components/NavBar';
import AddAdmin from './AddAdmin';

class App extends Component {
  state = {
    // these are not set in stone, just using these for a quick mock up
    // indicates if user is logged in
    isAuthenticated: true,
    // ensure that the type of user is Admin, otherwise redirect user
    userType: 'Admin',
  }


  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/admin/add-new-admin' render={({ history }) => (
            <AddAdmin />
          )}>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
