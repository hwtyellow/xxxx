import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter as Router } from 'react-router-dom'

import Css from './css/common.css';
import Header from './pages/header';
import Main from './pages/main';
import Footer from './pages/footer';

class App extends React.Component {
  render() {
    return (
      <div>
      	<Header />
      	<Router>
      		<Main />
      	</Router>
      	<Footer />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));