import React from 'react';
import { render } from 'react-dom';
import { ToDoList } from './ToDoList';


const dummyTodos = [
    { id: 0, isDone: true,  text: 'Eat bagel(s)' },
    { id: 1, isDone: false, text: 'Run a marathon' },
    { id: 2, isDone: false, text: 'Implement todo App' },
    { id: 3, isDone: false, text: 'Consider buying a boat' }
];

function App () {
    return <ToDoList todos={ dummyTodos }/>
};

render(
    <App/>,
    document.getElementById('app')
);
