import React from 'react';
import './App.css';

import StudentLogin from './containers/StudentLogin/StudentLogin';
import Dashboard from './containers/Dashboard/Dashboard';
import Main from './containers/Main/Main';
import { Route, Switch, withRouter, Redirect} from 'react-router-dom';

const app = () => {

  let routes = (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/studentlogin" component={StudentLogin} /> 
      <Route path="/dashboard" component={Dashboard} />
      <Redirect to="/"/>
    </Switch>
  );

  return (
    <div className="App">
        {routes}
    </div>
  );
}

export default withRouter(app);
