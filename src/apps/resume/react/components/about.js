MyComponents.About = React.createClass({

  render: function() {
    return (
      <div className="card">

        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={this.props.about.photo}></img>
        </div>

        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{this.props.about.name}<i className="material-icons right">more_vert</i></span>
        <p><div className="chip">
          <img src={"img/yue.jpeg"}/>
          <a href={this.props.about.github}>My Github</a>
        </div><font size="2"><i>   For More Details Click the Card.</i></font></p>
        </div>

        <div className="card-reveal light-blue lighten-2 white-text">
          <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
          <h1><font size="7"><div align="center">{this.props.about.name}</div></font></h1>
          <h2><font size="6">Education: {this.props.about.school}</font></h2>
          <h3><font size="6">Major: {this.props.about.major}</font></h3>
          <h4><font size="6">Birth Place: {this.props.about.birth}</font></h4>
        </div>

      </div>
    );
  }
});
