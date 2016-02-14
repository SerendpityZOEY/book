const {Map, Marker, CircleMarker, Popup, TileLayer, MapLayer}  = window.ReactLeaflet

class ProviderMap extends React.Component {
  render(){

    const provider = this.props.providers
    const providerElements = _.map(provider, function(p,i){
      if (p.status == "offline") {
        var color = "fa fa-circle center red-text"
      }
      else {
        var color = "fa fa-circle center green-text"
      }

      return <Marker position={[p.lat,p.lon]} key={i}>
        <Popup>
          <span><i className={color}></i><b> {p.name}</b></span>
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
        {providerElements}
      </Map>
  }

  handleLeafletClick(event){
    console.log('leaflet click event', event)
    this.props.setProviderLocationAction(event.latlng)
  }
}

MyComponents.ProviderMap = ProviderMap