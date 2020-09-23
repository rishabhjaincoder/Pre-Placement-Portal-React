import React from 'react';
import './App.css';

import StudentLogin from './containers/StudentLogin/StudentLogin';
import Main from './containers/Main/Main';
import { Route, Switch, withRouter} from 'react-router-dom';



const app = () => {

  let routes = (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/studentlogin" component={StudentLogin} /> 
    </Switch>
  );

  return (
    <div className="App">
        {routes}
    </div>
  );
}

export default withRouter(app);
