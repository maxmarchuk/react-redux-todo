import { ADD_TODO, TOGGLE_TODO } from './redux_constants';

//hack for generating unique ids
let lastUID = 0;
const getNextId = () => lastUID++;

export function addTodo(text) {
    return {
        type: ADD_TODO,
        payload: {
            id: getNextId(),
            isDone: false,
            text
        }
    };
}

export function toggleToDo(id) {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}