import React, { Component } from 'react';
import Checkbox from 'material-ui/lib/checkbox';
import TextField from 'material-ui/lib/text-field';

const styles = {
  checkbox : {
    display: 'inlineBlock',
    width: '50px'
  },
  checkboxIcon: {
    width: '40px',
    height: '40px'
  },
  textField : {
    display: 'inlineBlock',
    width: '100%',
    height: '60px',
  },
  textFieldInput: {
    fontSize: '1.5em',
    fontFamily: 'Roboto'
  }
}

var key = 0;

export default class ToDoRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isComplete : false,
      task : ''
    }

    this.onTaskChange = this.onTaskChange.bind(this);
    this.onTaskCheck = this.onTaskCheck.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);

    console.log(this.props.number)
  }

  render() {
    return (
      <div key={ this.props.key } className='toDoContainer'>
        <div className='checkbox'>
        <Checkbox
          style={ styles.checkbox }
          iconStyle={ styles.checkboxIcon }
          onCheck={ this.onTaskCheck }
          checked={ this.state.isComplete }/>
        </div>
        <div className='textField'>
        <TextField
          id={ 'TextField' + this.props.number }
          defaultValue={ '' }
          value={ this.state.task }
          onChange={ this.onTaskChange }
          style={ styles.textField }
          inputStyle={ styles.textFieldInput }
          disabled={ this.state.isComplete }
          onKeyDown={ this.onKeyDown }
          />
        </div>
      </div>
    )
  }

  onTaskChange(e) {
    this.setState({ task : e.target.value })
  }

  onTaskCheck(e) {
    this.setState({ isComplete : !this.state.isComplete })
  }

  onKeyDown(e) {
    if (e.keyCode == 13) {
      this.props.addToDo();
    } else if (e.keyCode == 8 && this.state.task == '') {
      this.props.deleteToDo(this.props.number)
      e.preventDefault()
    }
  }
}
