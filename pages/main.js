import React from 'react';

import Nav from './nav';
import Content from './content';


class Main extends React.Component {
  render() {
    return (
      <div>
      	<Nav />
      	<Content />
      </div>
    );
  }
}

export default Main;
