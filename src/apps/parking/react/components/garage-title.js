MyComponents.GarageTitle = React.createClass({
  render: function() {

    return (
      <div className="card">
            <div className="card-image">
              <img src={"garage.jpg"} alt="boohoo" className="img-responsive"/>
              <span className="card-title"><h1>{this.props.title}</h1></span>
            </div>
      </div>

    );
  }
});




