MyComponents.Task = React.createClass({

  render: function() {
    return (

        <li className="collection-item">
        <b>ToDo: </b>{this.props.task.name}
        <br>Priority:{this.props.task.priority}</br>
        </li>

/*
    <li>
      <div className="collapsible-header"><i className="material-icons">filter_drama</i>{this.props.task.name}</div>
      <div className="collapsible-body"><p>{this.props.task.priority}</p></div>
    </li>
    */
    );
  }

});

MyComponents.TaskList = React.createClass({
  render: function() {

    var taskElements = this.props.tasks.map(function(t,i){
      return <MyComponents.Task task={t} key={i}/>
    })

    return (

        <ul className="collection">
          {taskElements}
        </ul>

    );
  }
});