import {React, Component} from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TransactionItem from './TransactionItem'

class TransactionColumn extends Component {
  render (){
    return (
      <div>
        <h2>{this.props.column.title}</h2>
        <Droppable droppableId={this.props.column.id}>
          {(provided) => (
            <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            >
              {this.props.tasks.map((item, index) => <TransactionItem key={item.id} id={item} index={index}/>)}
              {provided.placeholder}
           </div>
          )}
        </Droppable>
      </div>
    )
  }
}

export default TransactionColumn
