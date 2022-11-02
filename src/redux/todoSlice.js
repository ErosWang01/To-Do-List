import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: uuidv4(),
                title: action.payload.title,
                completed: false
            };
            state.push(todo);
        },
        deleteTodo: (state, action) => {
            return state.filter((todo)=> todo.id !== action.payload.id)
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex((todo)=> todo.id === action.payload.id);
            state[index].completed = action.payload.completed;
        }
    }
});

export const { addTodo,  deleteTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;