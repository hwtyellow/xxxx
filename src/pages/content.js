import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from './dashboard';
import Cruise from './cruise';
import Agents from './agents';
import Help from './help';

class Content extends React.Component {
  render() {
    return (
      <div className="content">
          <Route exact path='/' component={Dashboard}/>
          <Route path='/my-cruise' component={Cruise}/>
          <Route path='/agents' component={Agents}/>
          <Route path='/help' component={Help}/>
      </div>
    );
  }
}

export default Content;
