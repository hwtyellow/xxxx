import React from 'react';

import HistoryItem from './historyItem';

class HistoryList extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		var historyList = this.props.history.map(listItem=>
			<HistoryItem history={listItem}
						key={listItem.index} />

		)
		return(
			<div className="list-group">
				{historyList}
			</div>
		)
	}
}

export default HistoryList;
