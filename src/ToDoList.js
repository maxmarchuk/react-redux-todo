import React from 'react';
import { ToDo } from './ToDo';


export function ToDoList(props) {
    const { todos } = props;

    return (
      <div className='todo'>
          <input type='text' placeholder='Add Too'/>
          <ul className='todo__list'>
              { todos.map(todo => (
                  <li key={ todo.id } className='todo__item'>
                      <ToDo todo={ todo }/>
                  </li>
              ))}
          </ul>
      </div>
    );
}