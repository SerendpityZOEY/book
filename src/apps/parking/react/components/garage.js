// Dependencies:
// - MyComponents.GarageSpaces
// - MyComponents.GarageTitle
// - MyComponents.GarageHours
// - MyComponents.GarageRates
//var data = {JSON.stringify(this.props.garage)}
MyComponents.Garage = React.createClass({
  render: function() {
    return (
      <div className="card">
            <div className="card light-green lighten-2">
          <div className="card-content">
            <MyComponents.GarageTitle
              title={this.props.garage.friendlyName}/>
            <MyComponents.GarageSpaces
              open={this.props.garage.open_spaces}
              total={this.props.garage.total_spaces}/>
            <MyComponents.GarageRates
              rates={this.props.garage.rates}/>
            <MyComponents.GarageHours
              hours={this.props.garage.hours}/>
            </div>
        </div>
      </div>
    );
  }
});
