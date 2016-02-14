class App extends React.Component {
  render(){
    return <div>
        <h3>UserMap</h3>
        <MyComponents.UserMap
      	users={this.props.data.users}
      	center={this.props.data.center}
      	setUserLocationAction={this.props.actions.setUserLocation}/>
        <h3>UserList</h3>
      <MyComponents.UserList users={this.props.data.users}/>
        <h3>ProviderMap</h3>
      <MyComponents.ProviderMap
        providers={this.props.data.providers}
        center={this.props.data.center}
        setProviderLocationAction={this.props.actions.setProviderLocation}/>
        <h3>ProviderList</h3>
      <MyComponents.ProviderList providers={this.props.data.providers}/>
    </div>
  }
}

MyComponents.App = App