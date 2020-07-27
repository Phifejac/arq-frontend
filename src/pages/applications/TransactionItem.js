import {React, Component} from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

class TransactionItem extends Component {
  render (){
    return (
      <Draggable draggableId={this.props.item.id} index={this.props.index}>
        {(provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {this.props.item.content}
          </div>
        )}
      </Draggable>
    )
  }
}

export default TransactionItem
