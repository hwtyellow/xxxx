import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  IndexRoute,
  Link,
} from 'react-router-dom';

import Home from './home';
import Roster from './roster';
import Schedule from './schedule';

class Content extends React.Component {
  render() {
    return (
      <div>
      	<Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/roster' component={Roster}/>
          <Route path='/schedule' component={Schedule}/>
        </Switch>
      </div>
    );
  }
}

export default Content;
