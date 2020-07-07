import React from 'react';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      list: [
        {
          toDo: 'Do thing',
          id: 1234567029483,
          completed: false,
        },
        {
          toDo: 'Thing do',
          id: 1234567889123,
          completed: false,
        },
        {
          toDo: 'Another todo',
          id: 1238747890123,
          completed: false,
        }
      ],
      onInputChange: this.onInputChange,
      onSubmit: this.onSubmit,
      formData: '',
    };
  };

  onInputChange = evt => {
    this.setState({
      formData: evt.target.value
    });
  };

  onSubmit = evt => {
    evt.preventDefault();
    const newToDo = {
      toDo: this.state.formData,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      list: [...this.state.list, newToDo],
      formData: ''
    });
  };
  
  toggle = id => {
    this.setState({
      list: this.state.list.map(toDo => {
        return toDo.id === id ? {...toDo, completed: !toDo.completed} : toDo
      })
    });
  };

  clear = () => {
    this.setState({
      list: this.state.list.filter(toDo => {
        return !toDo.completed
      })
    });
  };
  
  render() {
    return (
      <div className='app'>
        <ToDoForm formData={this.formData} onInputChange={this.state.onInputChange} onSubmit={this.state.onSubmit} clear={this.clear} list={this.state.list}/>
        <ToDoList list={this.state.list} toggle={this.toggle}/>
      </div>
    )
  }
}

export default App;
