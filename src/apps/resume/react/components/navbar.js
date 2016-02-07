MyComponents.NavBar = React.createClass({
  render: function() {
    return (
      <nav className="light-blue darken-3">
        <div className="nav-wrapper">
        <a href="#" className="brand-logo center">Yue ZHANG</a>
        <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="#skills-heading">Skills</a></li>
          <li><a href="#tasks-heading">Tasks</a></li>
          <li><a href="#cities-heading">Cities</a></li>          
        </ul>
        <ul className="side-nav" id="mobile-demo">
          <li><a href="#skills-heading">Skills</a></li>
          <li><a href="#tasks-heading">Tasks</a></li>
          <li><a href="#cities-heading">Cities</a></li>
        </ul>
        </div>
      </nav>
    );
  }
});