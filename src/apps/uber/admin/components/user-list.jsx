class UserList extends React.Component {
  render(){
  	var users = this.props.users.map(function(u, i){
  		if (u.status == "offline") {
  			var color = "material-icons secondary-content red-text"
  		}
  		else {
  			var color = "material-icons secondary-content green-text"
  		}

      return <li key={i} className="collection-item">
      					<div>{u.username}<i className={color}>person_pin</i></div>
      			 </li>
    })

    return <div>
      <ul className="collection">{users}</ul>
    </div>
  }
}

MyComponents.UserList = UserList
