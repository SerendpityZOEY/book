class ProviderList extends React.Component {
  render(){
  	var providers = this.props.providers.map(function(p, i){
  		if (p.status == "offline") {
  			var color = "material-icons secondary-content red-text"
  		}
  		else {
  			var color = "material-icons secondary-content green-text"
  		}

      return <li key={i} className="collection-item">
      					<div>{p.name}<i className={color}>person_pin</i></div>
      			 </li>
    })

    return <div>
      <ul className="collection">{providers}</ul>
    </div>
  }
}

MyComponents.ProviderList = ProviderList
