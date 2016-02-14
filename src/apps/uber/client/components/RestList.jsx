MyComponents.Rest = React.createClass({

  render: function() {
    return (
      <li className="collection-item"> <i className="tiny material-icons">label</i>&nbsp; {this.props.restaurant.name} in {this.props.restaurant.name} at {this.props.restaurant.name}, {this.props.restaurant.name} </li>
    );
  }
});


MyComponents.RestList = React.createClass({
  render: function() {

    var restaurants = this.props.restaurants.map(function(s,i){
      return <MyComponents.Rest restaurant={s} key={i}/>
    });
    
    return (
      <div className="card black lighten-1">
        <div className="row">
      
          <div className="col s12">
            <div className="card black darken-2">
              <div className="card-content white-text">
                <ul className="collection black-text">
                {restaurants}
                </ul>
              </div>
            </div>
          </div>
      
      
        </div>
      </div>
    );
  }
});