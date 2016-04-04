MyComponents.Group = React.createClass({
	render: function(){
		//link to travel.html page
		return <li className="collection-item blue-grey darken-3"><a onClick={this.setInfo.bind(this)} href="travel.html">{this.props.group}</a></li>
	},
	setInfo(e){
		// store the group name
		localStorage.setItem( 'group', this.props.group)
	}
});

class Groups extends React.Component{
	render(){
		var g = this.props.data.group.map(function (v, i) {
			return <MyComponents.Group group={v} key={i}/>
		});
		return <div className="card blue-grey darken-4 center-align">
			<div className="card-content white-text">
          		<span className="card-title">Groups</span>
        		<ul className="collection">{g}</ul>
        	 </div>
        </div>
	}
}
MyComponents.Groups = Groups;

class Form extends React.Component{
	render(){
		return <div className="card">
			<div className="row">
				<form className="col s12">
					<div>
						<h5 className="center-align">Manage Group</h5>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input id="g" type="text" className="validate"/>
							<label for="g">Group Name</label>
						</div>
					</div>
					<div className="button-container">
						<a className='button -dark center' onClick={this.makegroup.bind(this)}>Create</a>
						<a className='button -dark center' onClick={this.deletegroup.bind(this)}>Delete</a>
					</div>
					</form>
				</div>
			</div>
	}
	makegroup(e){
		var groupName = $('#g').val();
		var time = Firebase.ServerValue.TIMESTAMP;
		var userName = this.props.data.user;
		this.props.actions.makeGroup(groupName, time);
	}
	deletegroup(e){
		var groupName = $('#g').val();
		this.props.actions.deleteGroup(groupName);
	}
}
MyComponents.Form = Form;
	