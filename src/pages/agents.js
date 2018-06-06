import React from 'react';

import AgentsList from './agentsList';
import HistoryList from './historyList';

class Agents extends React.Component {
  	constructor(props) {
    	super(props);
      // type: 1 physical 2 virtual
    	this.state = {
    		data: [
    			{
            "id": "1",
            "email": "bjstdmngbgr01.thoughtworks.com",
            "state": "idle",
            "ip": "192.186.1.2",
            "type": 2,
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
    				"email": "bjstdmngbgr02.thoughtworks.com",
    				"state": "idle",
    				"ip": "192.186.1.2",
    				"type": 1,
    				"url": "/var/lib/cruise-agent",
    				"resources": [
    					{"id": 1,
    					"name": "firefox3"},
    					{"id": 2,
    					"name": "core-duo"}
    				]
    			},
    			{
    				"id": "3",
    				"email": "bjstdmngbgr03.thoughtworks.com",
    				"state": "building",
    				"ip": "192.186.1.3",
    				"type": 1,
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
    				"email": "bjstdmngbgr04.thoughtworks.com",
    				"state": "building",
    				"ip": "192.186.1.4",
    				"type": 1,
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
    				"id": "5",
    				"email": "bjstdmngbgr05.thoughtworks.com",
    				"state": "idle",
    				"ip": "192.186.1.5",
    				"type": 1,
    				"url": "/var/lib/cruise-agent",
    				"resources": [
    					{"id": 1,
    					"name": "ubuntu"}
    				]
    			}
    		],
    		summary: {},
        history: [
          {name: "bjstdmngbgr02/Acceptance_test", url: "bjstdmngbgr02/Acceptance_test"},
          {name: "bjstdmngbgr02/Acceptance_test", url: "bjstdmngbgr02/Acceptance_test"},
          {name: "bjstdmngbgr02/Acceptance_test", url: "bjstdmngbgr02/Acceptance_test"},
          {name: "bjstdmngbgr02/Acceptance_test", url: "bjstdmngbgr02/Acceptance_test"},
          {name: "bjstdmngbgr02/Acceptance_test", url: "bjstdmngbgr02/Acceptance_test"},
          {name: "bjstdmngbgr02/Acceptance_test", url: "bjstdmngbgr02/Acceptance_test"},
          {name: "bjstdmngbgr02/Acceptance_test", url: "bjstdmngbgr02/Acceptance_test"},
          {name: "bjstdmngbgr02/Acceptance_test", url: "bjstdmngbgr02/Acceptance_test"},
          {name: "bjstdmngbgr02/Acceptance_test", url: "bjstdmngbgr02/Acceptance_test"}
        ],
        filter: 0
    	}
      this.changeType = this.changeType.bind(this);
      this.handleResourceDelete = this.handleResourceDelete.bind(this);
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
    changeType(typeId, e) {
      var _target = e.target;
      var _brother = _target.parentNode.children;
      for (var i = _brother.length - 1; i >= 0; i--) {
        _brother[i].classList.remove('active')
      }
      _target.classList.add('active');
      this.setState({filter: typeId})
    }
  	handleResourceDelete(itemId, resourceId) {
      let data = this.state.data;
      data = data.map(function(item) {
        if(item.id != itemId) {
          return item;
        }else {
          item.resources = item.resources.filter(resource => resource.id != resourceId)
          return item;
        }
      })
      this.setState({data})
  	}
  	render() {
  		var summary = this.state.summary;
  		// console.log(summary)
  		var summaryList = Object.keys(summary).map(item => 
		      	<p><span style={{width: "120px", display: "inline-block"}}>{item}</span>{summary[item]}</p>

  			);
	    return (
	      	<div className="agents">
		      	<div className="filter">
		      		<label className="label">Agents</label>
              <label>
		      		<span className="active" onClick={this.changeType.bind(this, 0)}>All</span>
		      		<span onClick={this.changeType.bind(this, 1)}>Physical</span>
		      		<span onClick={this.changeType.bind(this, 2)}>Virtual</span>
              </label>
		      	</div>
		      	<div className="box">
		      		<div className="result">
		      			<AgentsList data={this.state.data} deleteResource={this.handleResourceDelete} filter={this.state.filter} />
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
                    <HistoryList history={this.state.history} />

		      				</div>
		      			</div>

		      		</div>
		      	</div>
	      	</div>
	    );
  	}
}

export default Agents;
