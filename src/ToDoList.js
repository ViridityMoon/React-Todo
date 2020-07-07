import React from 'react';
import ToDo from './ToDo'

class ToDoList extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log(this.props);
    return (
      <div>
        {
          this.props.list.map(entry => {
            return(
              <ToDo entry={entry} key={entry.id} toggle={this.props.toggle}/>
            )
          })
        }
      </div>
    );
  }
}

export default ToDoList;
