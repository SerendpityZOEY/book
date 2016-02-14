const {Map, Marker, CircleMarker, Popup, TileLayer, MapLayer}  = window.ReactLeaflet

class UserMap extends React.Component {
  render(){

    const user = this.props.users
    const userElements = _.map(user, function(u,i){
      if (u.status == "offline") {
        var color = "fa fa-circle center red-text"
      }
      else {
        var color = "fa fa-circle center green-text"
      }

      return <Marker position={u.pos} key={i}>
        <Popup>
          <span><i className={color}></i><b> {u.username}</b></span>
        </Popup>
      </Marker>
    })

    // Note: .bind(this) is important for the handler function's 'this'
    // pointer to refer to this MapView instance

    return  <Map center={this.props.center}
          zoom={13}
          onLeafletClick={this.handleLeafletClick.bind(this)}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {userElements}
      </Map>
  }

  handleLeafletClick(event){
    console.log('leaflet click event', event)
    this.props.setUserLocationAction(event.latlng)
  }
}

MyComponents.UserMap = UserMap
