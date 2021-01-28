import React from 'react';
import './App.css';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import Signin from "./SigninPage/Signin"
import Signup from "./SignupPage/Signup"
import main from "./Taskboard/main"

function App() {
  return (
    <BrowserRouter>
      <div className="menu">
        {window.location.pathname === '/Signin' && (
          <div to="/Signin"></div>
        )}
        {window.location.pathname === '/Signup' && (
          <div to="/Signup"></div>
        )}
        {window.location.pathname === '/main' && (
          <div to="/main"></div>
        )}

      </div>

      <div className="content">
        <Route path="/Signin" component={Signin} />
        <Route path="/Signup" component={Signup} />
        <Route path="/main" component={main} />
      </div>
    </BrowserRouter >


  );
}

export default App;
