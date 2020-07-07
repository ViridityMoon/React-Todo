import React from 'react';
import ToDo from './ToDo';

class ToDoList extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
      super();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        {
          props.toDoList.map(entry => {
            return(
              <ToDo key={this.props.toDoList.id} details={entry}/>
            )
          })
        }
      </div>
    );
  }
}

export default ToDoList;
