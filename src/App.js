import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './pages/home';
import Exp from './pages/exp';
import Contact from './pages/contact';

function App() {
    return (

      <Router>
        
        <Navbar/>
      
        <Switch>

            <Route exact path='/' render={() => <Home/>} />
            <Route exact path='/exp' render={() => <Exp/>} />
            <Route exact path='/contact' render={() => <Contact/>} />
          
        </Switch>

      </Router>
    );
}

export default App;
