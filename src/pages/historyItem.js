import React from 'react';


class HistoryItem extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		var dataItem = this.props.history;
		return(
			<p className="list-group-item">{dataItem.name}</p>
		);
	}
}

export default HistoryItem;
