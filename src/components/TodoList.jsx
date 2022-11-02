import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete } from '../redux/todoSlice';

const TodoItems = ({id, title, completed})=> {
    const dispatch = useDispatch();

    const handleCheckboxClick = ()=> {
        dispatch(toggleComplete({id, completed: !completed}))
    };

    const handleDelete = ()=> {
        dispatch(deleteTodo({id}))
    };
    return (
        <li>
            <div>
                <span>
                    <input
                        type='checkbox'
                        checked={completed}
                        onClick={handleCheckboxClick}
                    >         
                    </input>
                    {title}
                </span>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </li>
    )
}

const TodoList = ()=> {
    const todos = useSelector((state)=> state.todos);

    return (
        <ul>
            {todos.map((todo)=> <TodoItems id={todo.id} title={todo.title} completed={todo.completed}/>)}
        </ul>
    )
}

export default TodoList;