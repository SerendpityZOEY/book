class App extends React.Component {
  render(){
    return <div>
        <h3><font color="white"> UserMap</font></h3>
        <MyComponents.UserMap
      	users={this.props.data.users}
      	center={this.props.data.center}
      	setUserLocationAction={this.props.actions.setUserLocation}/>
        <h3><font color="white"> UserList</font></h3>
      <MyComponents.UserList users={this.props.data.users}/>
        <h3><font color="white"> ProviderMap</font></h3>
      <MyComponents.ProviderMap
        providers={this.props.data.providers}
        center={this.props.data.center}
        setProviderLocationAction={this.props.actions.setProviderLocation}/>
        <h3><font color="white"> ProviderList</font></h3>
      <MyComponents.ProviderList providers={this.props.data.providers}/>
    </div>
  }
}

MyComponents.App = App