import React from 'react';

class ToDoForm extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log(this.props)
    return (
      <form onSubmit={this.props.onSubmit}>
        <label>Enter a ToDo:
            <input
                onChange={this.props.onInputChange}
                value={this.props.formData}
                placeholder= 'Add a ToDo'
                name='toDoInput'
                type='text'
            />
            <button type='submit'>Add</button>
            <button onClick={this.props.clear}>Clear Completed</button>
        </label>
      </form>
    );
  }
}

export default ToDoForm;
