class App extends React.Component {
  render(){

    var map

    console.log(this.props.data.user)
    if (this.props.data.user){
      map = <MyComponents.MapView
            providers={this.props.data.providers}
            center={this.props.data.center}
            user={this.props.data.user}
            restaurants={this.props.data.restaurants}
            setUserLocationAction={this.props.actions.setUserLocation}/>
    } else {
      map = <div className="center">Log in to view the map.</div>
    }


    var order
    if (this.props.data.user){
      order = <a className="btn-floating btn-large waves-effect waves-light orange darken-4" href="/apps/uber/client/order.html" style={{"bottom": "35px", "right": "-50%"}}><i className="material-icons">shopping_basket</i></a>

    } else {
      order = <div className="center"><font color="white">Log in to order food ! </font></div>
    }


    return <div>
      <div className="center-align">
        <MyComponents.User
            user={this.props.data.user}
            loginAction={this.props.actions.login}
            logoutAction={this.props.actions.logout}
        />
      </div>
      <h3><font color="white"> Map View</font></h3>

      <div className="card yellow darken-3">
      <div className="card-content white-text">
        {map}
      </div>
      </div>


      <h3><font color="white"> Restaurant List</font></h3>


      <div className="card yellow darken-3">
        {order}
      <MyComponents.RestaurantList restaurants={this.props.data.restaurants}/>
      </div>


    </div>
  }
}

MyComponents.App = App
