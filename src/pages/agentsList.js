import React from 'react';

import AgentItem from './agentItem';

class AgentsList extends React.Component {
	constructor(props) {
		super(props);
	}



	render() {
		var agentsList = this.props.data.map(listItem=>
			<AgentItem data={listItem}
						key={listItem.id} 
						deleteResource={this.props.deleteResource} 
						beforeAddResource={this.props.beforeAddResource}
						cancelAddResource={this.props.cancelAddResource}
						addResource={this.props.addResource}
						filter={this.props.filter}
						toAddResourceId={this.props.toAddResourceId} />

		)
		return(
			<ul className="list-group">
				{agentsList}
			</ul>
		)
	}
}

export default AgentsList;
