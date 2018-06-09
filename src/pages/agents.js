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
        // 统计数量
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
        filter: 0,
        toAddResourceId: 0
    	}
      this.changeType = this.changeType.bind(this);
      this.handleResourceDelete = this.handleResourceDelete.bind(this);
      this.handleResourceAdd = this.handleResourceAdd.bind(this);
      this.beforeAddResource = this.beforeAddResource.bind(this);
      this.cancelAddResource = this.cancelAddResource.bind(this);
  	}
  	componentWillMount() {
  		this.setState(function(prevState, props){
  			var tmpSummary = {};
  			prevState.data.map(function(item){
          if(prevState.filter == 0 || prevState.filter == item.type) {
    				if(tmpSummary[item.state]) {
    					tmpSummary[item.state]++;
    				}else {
    					tmpSummary[item.state] = 1;
    				}            
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

      this.setState(function(prevState, props){
        var tmpSummary = {};
        prevState.data.map(function(item){
          if(typeId == 0 || typeId == item.type) {
            if(tmpSummary[item.state]) {
              tmpSummary[item.state]++;
            }else {
              tmpSummary[item.state] = 1;
            }            
          }
        })
        return {summary: tmpSummary, filter: typeId};
      })
      // this.setState({filter: typeId, summary: tmpSummary})
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
    handleResourceAdd(resourceStr) {
      if(resourceStr) {
        var resourceArr = resourceStr.split(',');
        let data = this.state.data;
        let toAddResourceId = this.state.toAddResourceId;
        data = data.map(function(item) {
          if(item.id != toAddResourceId) {
            return item;
          }else {
            var indexId = item.resources.length + 1;
            resourceArr.map(function(resource) {
              item.resources.push({'id': indexId++, 'name': resource})
            })
            return item;
          }
        })
        this.setState({data})
        this.cancelAddResource();
      }
    }
    beforeAddResource(itemId) {
      this.setState({toAddResourceId: itemId})
    }
    cancelAddResource() {
      this.setState({toAddResourceId: 0})
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
		      			<AgentsList data={this.state.data} 
                            deleteResource={this.handleResourceDelete} 
                            beforeAddResource={this.beforeAddResource}
                            addResource={this.handleResourceAdd}
                            cancelAddResource={this.cancelAddResource}
                            filter={this.state.filter}
                            toAddResourceId={this.state.toAddResourceId} />
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
