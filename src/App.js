import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SingIn from './components/auth/SingIn';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path='/project/:id' component={ProjectDetails} />
          <Route path='/sigin' component={SingIn} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
