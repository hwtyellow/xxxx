import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom'

// import Nav from './nav';
// import Content from './content';
import Dashboard from './dashboard';
import Cruise from './cruise';
import Agents from './agents';
import Help from './help';

class Main extends React.Component {
  render() {
    return (
      <div>
      	<nav>
          <h2>Cruise</h2>
          <ul className="clearfix" ref="nav_ul">
            <li><NavLink to='/help'>HELP</NavLink></li>
            <li className="active"><NavLink to='/agents'>AGENTS</NavLink></li>
            <li><NavLink to='/my-cruise'>MY CRUISE</NavLink></li>
            <li><NavLink to='/' exact="true">DASHBOARD</NavLink></li>
          </ul>
        </nav>
      	<div className="content">
          <Route exact path='/' component={Dashboard}/>
          <Route path='/my-cruise' component={Cruise}/>
          <Route path='/agents' component={Agents}/>
          <Route path='/help' component={Help}/>
      	</div>
      </div>
    );
  }
}

export default Main;
