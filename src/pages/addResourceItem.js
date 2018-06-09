import React from 'react';


class AddResourceItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value})
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.addResource(this.state.value)
	}

	render() {
		return(
			<form className="addBox" onSubmit={this.handleSubmit}>
				<p>(separate multiole resources name with commas)</p>
				<input type="text" value={this.state.value} onChange={this.handleChange} />
				<div>
					<input className="button" type="submit" value="Add resources" />
					<input className="button" type ="button" onClick={this.props.cancelAddResource} value="Close" />
				</div>
			</form>

		)
	}
}

export default AddResourceItem;
