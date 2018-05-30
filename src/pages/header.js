import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header clearfix">
      	<div className="fr">
      		<label className="inline-block" style={{marginRight: '30px'}}>Signed in as <span className="underline">Member</span></label>
      		<label className="inline-block underline">Sign out</label>
      	</div>
      </div>
    );
  }
}

export default Header;
