import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ToDoRow from './todo_row'
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import Paper from 'material-ui/lib/paper';

var key = 0;

const styles = {
  addButton : {
    position: 'absolute',
    bottom: '50px',
    right: '50px'
  },
  paper: {
    height: '100%'
  }
}

export default class ToDoContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoList : []
    }

    this.addToDo = this.addToDo.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
    this.setFocus = this.setFocus.bind(this)
  }

  componentDidMount() {
    if (this.state.toDoList.length == 0) { this.addToDo() }
  }

  render() {
    return (
      <Paper style={ styles.paper } zDepth={5} rounded={false}>
        <h1 className='title'>To Do:</h1>
        <h3 className='date'>{ new Date().toDateString() }</h3>
        { this.state.toDoList }


        <FloatingActionButton
          secondary={true}
          style={ styles.addButton }
          onClick={ this.addToDo }>
          <ContentAdd />
        </FloatingActionButton>
      </Paper>
    )
  }

  addToDo() {
    var toDoList = this.state.toDoList;
    toDoList.push(<ToDoRow
      key={key}
      number={key++}
      addToDo={this.addToDo}
      deleteToDo={this.deleteToDo}/>)
    this.setState({ toDoList : toDoList });
    this.setFocus(key-1);
  }

  deleteToDo(key) {
    console.log('Delete', key)
    var indexToDelete = 0;
    var toDoList = this.state.toDoList;
    this.state.toDoList.map(function(toDo) {
      indexToDelete++;
      if (toDo.key == key) {
        return;
      }
    })
    console.log('Index', indexToDelete)
    toDoList.splice(indexToDelete-1, 1);
    this.setState({ });

  }

  setFocus(key) {
  }
}
