import React from 'react';

class Agents extends React.Component {
  render() {
    return (
      <div className="agents">
      	<div className="filter">
      		<label>Agents</label>
      		<span>All</span>
      		<span className="active">Physical</span>
      		<span>Virtual</span>
      	</div>
      </div>
    );
  }
}

export default Agents;
