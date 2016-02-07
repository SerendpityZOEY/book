MyComponents.Task = React.createClass({

  render: function() {
    return (

        <li className="collection-item">
        <i className="material-icons">label_outline</i> <b> {this.props.task.name} </b>
        <br>Priority: {this.props.task.priority}</br>
        Deadline: {this.props.task.ddl} <br/>
        Status : {this.props.task.status}<br/>
        </li>

/*
    <li>
      <div className="collapsible-header"><i className="material-icons">filter_drama</i>{this.props.task.name}
      </div>
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