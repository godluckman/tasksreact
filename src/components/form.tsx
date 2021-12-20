import React, {useState} from 'react';

const Form = () => {

    const [value, setValue] = useState('Текст')

    return (
        <form>
            <input type='text' value={value} onChange={event => setValue(event.target.value)}/>
            <input type='text' value={value} onChange={event => setValue(event.target.value)}/>
            <input type='text' value={value} onChange={event => setValue(event.target.value)}/>
            <input type='text' value={value} onChange={event => setValue(event.target.value)}/>
            <input type='text' value={value} onChange={event => setValue(event.target.value)}/>
            <input type='text' value={value} onChange={event => setValue(event.target.value)}/>
            <input type='text' value={value} onChange={event => setValue(event.target.value)}/>
            <input type='text' value={value} onChange={event => setValue(event.target.value)}/>
        </form>
    );
};

export default Form;