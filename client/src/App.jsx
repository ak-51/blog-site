import { Fragment } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import './App.css';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path='/register' exact>
            <Register />
          </Route>
          <Route path='/login' exact>
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
