import React from 'react';

class ToDoForm extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <form className='form' onSubmit={this.props.onSubmit}>
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
    )
  }
};

export default ToDoForm;
