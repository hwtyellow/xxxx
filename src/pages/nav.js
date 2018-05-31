import React from 'react';

import { Link, NavLink } from 'react-router-dom'

class Nav extends React.Component {
  componentDidMount () {

  }
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
      </div>
    );
  }
}

export default Nav;
