class member_List extends React.Component{
    render(){
        var users = this.props.users.details.map(function(u, i){
            if (u.status == "online") {
                return <li className="collection-item avatar" id="self-defined">
                    <div><img src={'https://avatars0.githubusercontent.com/u/'+u.id}
                                          alt="avatar" width="20" height="20" className="circle"/>
                        <p id="username-title">{u.username}</p></div>
                </li>
            }
        });

        return <div className="card blue-grey darken-4 center-align">
            <div className="card-content">
          		<span className="card-title white-text">
					Online Users
				</span>
                <ul className="collection">{users}</ul>
            </div>
        </div>

    }
}

MyComponents.member_List = member_List;
	