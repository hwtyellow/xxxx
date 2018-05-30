import React from 'react';

import { Link } from 'react-router-dom'

class Nav extends React.Component {
  componentDidMount () {
    
  }
  render() {
    return (
      <div>
      	<nav>
          <h2>Cruise</h2>
          <ul className="clearfix" ref="nav_ul">
            <li><Link to='/help'>HELP</Link></li>
            <li className="active"><Link to='/agents'>AGENTS</Link></li>
            <li><Link to='/my-cruise'>MY CRUISE</Link></li>
            <li><Link to='/'>DASHBOARD</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
