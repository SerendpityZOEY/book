class RestaurantList extends React.Component {
  render(){
  	var restaurants = this.props.restaurants.map(function(r, i){

      return <li key={i} className="collection-item avatar">
          <img src={"images/"+r.name+".jpg"} alt="" className="circle"/>

          <span className="title"><b>{r.name}</b></span>
          <p><b>Address: </b>{r.address}</p>
          <p><b>Menu: </b>{r.menu}</p>
          <p><b>Review: </b>{r.reviews}</p>
          <p><b>Stars: </b>{r.stars}</p>
          <p><b>Style: </b>{r.style}</p>
          <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>

    </li>
    })

    return <div>
      <ul className="collection">{restaurants}</ul>
    </div>
  }
}

MyComponents.RestaurantList = RestaurantList
