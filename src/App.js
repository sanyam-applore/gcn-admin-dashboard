import React, { useState, useEffect } from 'react';
import WidthContext from './Contexts/WidthContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Global.css'
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';

function App() {
  const [width, setWidth] = useState(1200);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    })
  }, []);

  return (
    <>
      <WidthContext.Provider value={width}>
        <div className="app">
          <Router>
            <Switch>
              <Route path="/" exact render={(props) => <Login {...props} />} />
              <Route path="/dashboard" render={(props) => <Dashboard {...props} />} />
            </Switch>
          </Router>
        </div>
      </WidthContext.Provider>
    </>
  );
}

export default App;
