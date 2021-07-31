
import React  from 'react';
import Chat from './Components/Chat'
import Login from './Components/Login'
import Home from './Components/Home'
import Support from './Components/Support'
import Documents from './Components/Documents'
import VirtualTour from './Components/VirtualTour'
import Navbar from './Components/Navbar';
import Loan from './Components/Loan'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
 function App() {

	return (
    <Router>
    <div className="App">
    <Navbar/>
    <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/chat" exact component={Chat} />
            <Route path="/home" exact component={Home} />
            <Route path="/documents" exact component={Documents} />
            <Route path="/support" exact component={Support} />
            <Route path="/virtualtour" exact component={VirtualTour} />
            <Route path="/addons" exact component={Loan} />
            <Redirect from="/" to="/login" />
          </Switch>
  
  </div>
  </Router>
	);
}

export default App;



