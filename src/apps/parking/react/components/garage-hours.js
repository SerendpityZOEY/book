MyComponents.Hour = React.createClass({
  render: function() {
    if (this.props.hour.BEG==undefined) {var beg = <li>{' '}</li>}
         else {var beg = <li>{'Start Time: '+ this.props.hour.BEG}</li>}
       if (this.props.hour.END==undefined) {var end = <li>{' '}</li>}
         else {var end = <li>{'End Time: '+ this.props.hour.END}</li>}
       if (this.props.hour.FROM==undefined) {var from = <li>{' '}</li>}
         else {var from = <li>{'From: '+ this.props.hour.FROM}</li>}
       if (this.props.hour.TO==undefined) {var to = <li>{' '}</li>}
         else {var to = <li>{'To: '+ this.props.hour.TO}</li>}

    
       return (<div className="green darken-4">
         <div className="card-content white-text">
          <ul>
             <li> {beg} {end} {from} {to}</li>
          </ul>
         </div>
       </div>
    );
  }
});


MyComponents.GarageHours = React.createClass({
  render: function() {

    var hours = this.props.hours.map(function(h,i){
      return <MyComponents.Hour hour={h} key={i}/>
    })


    return (
      <div className="green light-green lighten-2">
        <div className="card-content">
          <span className="card-title">Open hours: </span>
          { hours }

        </div>
      </div>
    );
  }
});
