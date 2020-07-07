import React from 'react';

class ToDoForm extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
      super();
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <label>Enter a ToDo:
            <input 
                name='toDoInput'
                type='text'
            />
            <button>Add</button>
        </label>
      </div>
    );
  }
}

export default ToDoForm;
