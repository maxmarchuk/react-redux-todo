import { ADD_TODO, TOGGLE_TODO } from './redux_constants';
const defaultState = [];

export default function (todos = defaultState, action) {
    switch (action.type) {
        case ADD_TODO:
        case TOGGLE_TODO:
        default:
            return todos;
    }
}