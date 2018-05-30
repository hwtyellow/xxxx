import React from 'react';

import { Link } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    return (
      <div>
      	<nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/roster'>Roster</Link></li>
            <li><Link to='/schedule'>Schedule</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
