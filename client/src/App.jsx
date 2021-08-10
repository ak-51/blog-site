import { Fragment } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Register from './components/Register.jsx'
import './App.css';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path='/register' exact>
            <Register />
          </Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
