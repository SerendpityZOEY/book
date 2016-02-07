MyComponents.City = React.createClass({

  render: function() {
    //<img src= {this.props.city.currently.icon} width=40px; height=40px></img>
    //div style="height:40px">
                  //<p style="font-size:15px">{this.props.city.daily.summary}</p>
                //</div>
    this.props.city.currently.icon = "img/" + this.props.city.currently.icon + ".png"
    return (
      <li className="collection-item avatar">
        <img src= {"img/"+this.props.city.name+".jpg"} alt="" className="circle"/>
        <span className="title">{this.props.city.name.toUpperCase()}</span>
        <p><b>Temperature:</b> {this.props.city.currently.temperature} F</p>
        <p><b>Conditions:</b> {this.props.city.currently.summary}</p>
        <p><b>Humidity:</b> {this.props.city.currently.humidity}%</p>
        <p><b>Wind:</b> {this.props.city.currently.windSpeed} mph</p>
        <p><b>Tomorrow Temperature:</b> {this.props.city.daily.data[1].temperatureMin} F~{this.props.city.daily.data[1].temperatureMax} F</p>
        <p><b>Daily Summary:</b> {this.props.city.daily.summary}</p>
        <a href="#!" className="secondary-content"><img src= {this.props.city.currently.icon}/></a>
      </li>
    );
  }

});

MyComponents.CityList = React.createClass({
  render: function() {

    var cityElements = this.props.cities.map(function(c,i){
      return <MyComponents.City city={c} key={i}/>
    })

    return (
      <ul className="collection">
        {cityElements}
      </ul>
    );
  }
});