import React from 'react';

import AgentsList from './agentsList';

class Agents extends React.Component {
  	constructor(props) {
    	super(props);
    	this.state = {
    		data: [
    			{
    				"id": "1",
    				"email": "bjstdmngbgr02.thoughtworks.com",
    				"state": "idle",
    				"ip": "192.186.1.2",
    				"type": "physical",
    				"url": "/var/lib/cruise-agent",
    				"resources": [
    					{"id": 1,
    					"name": "firefox3"},
    					{"id": 2,
    					"name": "core-duo"}
    				]
    			},
    			{
    				"id": "2",
    				"email": "bjstdmngbgr03.thoughtworks.com",
    				"state": "building",
    				"ip": "192.186.1.3",
    				"type": "physical",
    				"url": "/var/lib/cruise-agent",
    				"resources": [
    					{"id": 1,
    					"name": "firefox3"},
    					{"id": 2,
    					"name": "mysql"},
    					{"id": 3,
    					"name": "core-duo"}
    				]
    			},
    			{
    				"id": "3",
    				"email": "bjstdmngbgr04.thoughtworks.com",
    				"state": "building",
    				"ip": "192.186.1.4",
    				"type": "physical",
    				"url": "/var/lib/cruise-agent",
    				"resources": [
    					{"id": 1,
    					"name": "firefox3"},
    					{"id": 2,
    					"name": "mysql"},
    					{"id": 3,
    					"name": "core-duo"}
    				]
    			},
    			{
    				"id": "4",
    				"email": "bjstdmngbgr05.thoughtworks.com",
    				"state": "idle",
    				"ip": "192.186.1.5",
    				"type": "physical",
    				"url": "/var/lib/cruise-agent",
    				"resources": [
    					{"id": 1,
    					"name": "ubuntu"}
    				]
    			}
    		],
    		summary: {}
    	}
  	}
  	componentWillMount() {
  		this.setState(function(prevState, props){
  			var tmpSummary = {};
  			prevState.data.map(function(item){
  				if(tmpSummary[item.state]) {
  					tmpSummary[item.state]++;
  				}else {
  					tmpSummary[item.state] = 1;
  				}
  			})
  			return {summary: tmpSummary};
  		})
  	}
  	deleteResource(id, resourceId) {

  	}
  	render() {
  		var summary = this.state.summary;
  		console.log(summary)
  		var summaryList = Object.keys(summary).map(item => 
		      	<p><span style={{width: "120px", display: "inline-block"}}>{item}</span>{summary[item]}</p>

  			);
  		console.log(summaryList)
	    return (
	      	<div className="agents">
		      	<div className="filter">
		      		<label>Agents</label>
		      		<span>All</span>
		      		<span className="active">Physical</span>
		      		<span>Virtual</span>
		      	</div>
		      	<div className="box">
		      		<div className="result">
		      			<AgentsList data={this.state.data} />
		      		</div>
		      		<div className="desc">
		      			<div className="summary">
		      				<h3>Summary</h3>
		      				<div>
		      					{
		      						summaryList
		      					}
		      				</div>
		      			</div>
		      			<div className="history">
		      				<h3>History</h3>
		      				<div>
				      			<p>222222</p>
				      			<p>222222</p>
				      			<p>222222</p>
				      			<p>222222</p>
				      			<p>222222</p>
				      			<p>222222</p>

		      				</div>
		      			</div>

		      		</div>
		      	</div>
	      	</div>
	    );
  	}
}

export default Agents;
