import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { addTodo } from '../redux/todoSlice';

const AddTodoForm = ()=> {
    const [value, setvalue] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(addTodo({
            title: value,
        }))
        setvalue('');
    }

    return (
        <form onSubmit={onSubmit}> 
            <input 
                type='text' 
                placeholder='Add todo...' 
                value={value}
                onChange={(e) => setvalue(e.target.value)}
            >
            </input>
            <button type='submit' disabled={!value}>Add</button>
        </form>
    );
};

export default AddTodoForm;