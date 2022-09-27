import React, { useState} from 'react';

const FormTodo = props => {

const [description, setDiscription] = useState('');

const handleChange = e => {
    setDiscription(e.target.value);
};

const { handleAddItem } = props;
const handleSubmit = e => {
    e.preventDefault();

    handleAddItem({
        done: false,
        id: (+new Date()).toString(),
        description
    });
    setDiscription("");
};


return (
    <form onSubmit={handleSubmit} >
    <div className='todo-list2'>
        
        <input type='text'
            placeholder='tarea'
            autoComplete="off"
            value={description}
            onChange={handleChange}
            name='text'

        />
            <button onClick={handleSubmit} >
            Add 
            </button>
    </div>

    </form>
);
}

export default FormTodo;
