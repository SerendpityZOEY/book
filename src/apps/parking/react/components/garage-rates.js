
//Rates

MyComponents.Rate = React.createClass({
  render: function() {
    var start = this.props.rate.BEG ? this.props.rate.BEG : "" 
    var end = this.props.rate.END ? this.props.rate.END : ""
    var desc = this.props.rate.DESC
    var amount = this.props.rate.RATE
    var req = this.props.rate.RQ
    var data = ""

    if(start != "")
    {
      data += (start + ' to ' + end + ': $' + amount + ' ' + req) 
    }
    else
    {
      data += (desc + ': $' + amount + ' ' + req) 
    }
    return (
    <div className="green darken-4">
      <div className="card-content white-text">
       <ul>
          <li> {data} </li>
       </ul>
      </div>
    </div>
      );
  }
});

//Garages - Rates

MyComponents.GarageRates = React.createClass({
  render: function() {

    var rates = this.props.rates.map(function(r,i){
      return <MyComponents.Rate rate={r} key={i}/>
    })


    return (
    <div className="green light-green lighten-2">
        <div className="card-content">
          <span className="card-title">Our Rates: </span>
            { rates }
        </div>
    </div>
  );
  
  }
});