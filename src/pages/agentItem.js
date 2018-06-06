import React from 'react';


class AgentItem extends React.Component {
	constructor(props) {
		super(props);
		this.deleteResource = this.deleteResource.bind(this);
	}

	deleteResource(resourceId, e) {
		this.props.deleteResource(this.props.data.id, resourceId);
		// console.log(this.props.data.id)
	}

	render() {
		var dataItem = this.props.data;
		var filter = this.props.filter;
		var type = dataItem.type;
		var resourcesList = dataItem.resources.map(resourcesItem=>
				<label key="{resourcesItem.id}" className="item-resource">{resourcesItem.name}<span className="delete" onClick={this.deleteResource.bind(this, resourcesItem.id)}>x</span></label>
			)
		var displayStyle = (filter==0 || filter==type) ? '': 'no_dis';
		// var displayStyle="display:block"
		var operateBtn;
		if(dataItem.state == "idle") {
			operateBtn = <label>Deny</label>
		}
		return(
			<li className={"list-group-item clearfix color-" + dataItem.state + ' ' + displayStyle}>
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
				<div className="item-operate">
					{
						operateBtn
					}
				</div>
			</li>
		);
	}
}

export default AgentItem;
