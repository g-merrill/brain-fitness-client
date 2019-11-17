import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './scss/App.scss';
import NavBar from '../components/NavBar';
import AddAdmin from './AddAdmin';
import SignupAdmin from './SignupAdmin';
import Login from './Login';

class App extends Component {
  state = {
    // these state properties are not set in stone
    // just using these for a quick mock up
    // indicates if user is logged in
    isAuthenticated: true,
    // ensure that the type of user is Admin, otherwise redirect user
    userType: 'admin',
  }


  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route 
            exact path='/'
            render={() => (
              <div>(Insert home page here or a redirect to another route)</div>
            )}
          />
          <Route 
            exact path='/admin/signup' 
            render={({ history }) => (
              <SignupAdmin history={ history } />
            )}
          />
          <Route 
            exact path='/login'
            render={({ history }) => (
              <Login history={ history } />
            )}
          />
        {this.state.isAuthenticated ? (
          <Route 
            exact path='/admin/add-new-admin' 
            render={({ history }) => {
              return this.state.userType === 'admin' ? (
                <AddAdmin history={ history } />
              ) : (
                <Redirect to='/' />
              );
            }}
          />
        ) : (
          <Redirect to='/login' />
        )}
        </Switch>
      </div>
    );
  }
}

export default App;
