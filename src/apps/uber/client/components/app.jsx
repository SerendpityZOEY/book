class App extends React.Component {
  render(){
    return <div>
      <div className="center-align">
        <MyComponents.User
            user={this.props.data.user}
            loginAction={this.props.actions.login}
            logoutAction={this.props.actions.logout}/>
      </div>
      <h3>Map View</h3>
      <div className="card">
        <MyComponents.MapView
            providers={this.props.data.providers}
            center={this.props.data.center}
            user={this.props.data.user}
            setUserLocationAction={this.props.actions.setUserLocation}/>
      </div>
      <h3>Restaurant List</h3>
      <div className="card">
      <MyComponents.RestaurantList restaurants={this.props.data.restaurants}/>
        </div>
    </div>
  }
}

MyComponents.App = App
