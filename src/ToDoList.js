import React from 'react';
import ToDo from './ToDo'

class ToDoList extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className='list'>
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
