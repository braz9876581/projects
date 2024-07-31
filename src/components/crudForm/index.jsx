import React, { useState, useContext } from 'react';
import { CrudContext } from '../../contexts/crudContext';

const CrudForm = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const { handle } = useContext(CrudContext);
    
    return (
        <>
            <h1>Ola {user}</h1>
            <form onSubmit={(e) => handle (e, [user, email])}>
                <label htmlFor='user' id='user'>user</label>
                <input type='text' id='user' onChange={(e) => setUser(e.target.value)}></input>
                <label htmlFor='email' id='email'>email</label>
                <input type='text' id='email' onChange={(e) => setEmail(e.target.value)}></input>
                
                <button>Enviar</button>
            </form>
        </>
    )
}

export default CrudForm;