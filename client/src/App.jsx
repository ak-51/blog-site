import { Fragment } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './components/Login.jsx'
import './App.css';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path='/login' exact>
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
