import React from 'react';


class AgentItem extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		var dataItem = this.props.data;
		var resourcesList = dataItem.resources.map(resourcesItem=>
				<label key="{resourcesItem.id}" className="item-resource">{resourcesItem.name}<span className="delete" onClick="">x</span></label>
			)
		return(
			<li className={"list-group-item clearfix color-" + dataItem.state}>
				<img className="fl" src="" width="40" height="40" />
				<div className="item-detail fl">
					<p>
						<span className="item-email">{dataItem.email}</span>
						<em>|</em>{dataItem.state}<em>|</em>{dataItem.ip}<em>|</em>{dataItem.url}
					</p>
					<p>
						+<span className="underline">Specify Resource</span>
						<em>|</em>Resources:{resourcesList}
					</p>
				</div>
			</li>
		);
	}
}

export default AgentItem;
