MyComponents.Skill = React.createClass({

  render: function() {
    return (
          <li className="collection-item">
            <span className="title"><b>{this.props.skill.name}</b>{this.props.skill.years}</span>
          </li>

    );
  }

});

MyComponents.SkillList = React.createClass({
  render: function() {

    var skillElements = this.props.skills.map(function(s,i){
      return <MyComponents.Skill skill={s} key={i}/>
    })

    return (
        <ul className="collection">
          {skillElements}
        </ul>
    );
  }
});
