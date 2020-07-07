import React from 'react';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  onInputChange = evt => {
    const { name, value } = evt.target
  }
  onSubmit = evt => {
    evt.preventDefault()

  }
  constructor(){
    super();
    this.state = {
      list: [],
  }
    
  }
  render() {
    return (
      <div>
        <ToDoForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
        <ToDoList toDoList={this.state.list}/>
      </div>
    );
  }
}

export default App;
