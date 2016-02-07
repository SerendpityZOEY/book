MyComponents.NavBar = React.createClass({
  render: function() {
    return (
      <nav>
        <div className="nav-wrapper green darken-4">
        <a href="#" className="brand-logo">Garage Viewer</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/apps/parking/garages.html">Garages</a></li>
          <li><a href="/apps/parking/garages_map.html">Garage Map</a></li>
        </ul>
        </div>
      </nav>
    );
  }
});
