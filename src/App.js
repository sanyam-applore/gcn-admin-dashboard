import React, { useState, useEffect } from 'react';
import WidthContext from './Contexts/WidthContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Global.css'
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={true}
            draggable
            pauseOnHover
          />
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
