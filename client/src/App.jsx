import { Fragment } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import CreateBlog from './components/CreateBlog.jsx'
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
          <Route path='/create' exact>
            <CreateBlog />
          </Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
