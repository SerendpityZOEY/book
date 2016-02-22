class NavBar extends React.Component {

  render(){
    return (
    <nav>
      <div className="nav-wrapper orange darken-3">
        <ul className="left">
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <li><a href="/apps/uber/index.html">Home</a></li>
        </ul>
        <a href="/apps/uber" className="brand-logo center"> Hungry Asians</a>
        <ul className="right">
          <li className="active"><a href="/apps/uber/client">Clients</a></li>
          <li><a href="/apps/uber/admin">Admins</a></li>
        </ul>
      </div>
    </nav>
    );
  }

}
MyComponents.NavBar = NavBar

 
