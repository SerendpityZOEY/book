

MyComponents.GarageSpaces = React.createClass({
  render: function() {
  	var open
    return (
      <div className="green light-green lighten-2">
        <div className="card-content">
          <span className="card-title">Garage Spaces </span>
          <ul className="collection black-text">
            <li className="collection-item">Open Spaces: {this.props.open}</li>
            <li className="collection-item">Total Spaces: {this.props.total}</li>
          </ul>

        </div>
      </div>
    );
  }
});
