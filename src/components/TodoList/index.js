import React from 'react';
import { MdDelete } from 'react-icons/md';
import { PropTypes } from 'prop-types';

import "./styles.css"


const TodoList = ({todos, onToggle, onRemove}) => {
  return (
    <ul className='todo-list'>
          {todos.map((todo) =>(
              <li key={todo.id.toString()}>
                <span
                  className={['todo', todo.checked ? 'checked': ''].join(' ')}
                  onClick={() => onToggle && onToggle(todo)}
                  onKeyPress={() => onToggle &&onToggle(todo)}
                  role="button"
                  tabIndex={0}
                  >{todo.title}</span>
                <button
                  className='remove'
                  type='button'
                  onClick={()=> onRemove && onRemove(todo)}
                  >
                  <MdDelete size={28} />
                </button>
              </li>
            ))
          }
        </ul>
  )
}


TodoList.protoTypes ={
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isReguired,
      title:PropTypes.string.isReguired,
      checked: PropTypes.bool.isReguired,
    })
  ).isReguired,
  onToggle: PropTypes.func.isReguired,
  onRemove: PropTypes.func.isReguired,
}
export default TodoList
