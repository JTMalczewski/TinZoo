import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './register.css';

export function Register() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [pass, setPass] = useState('');
    const [nick, setNick] = useState('');

    const handleChangeName = (event) => {
        setName(event.target.value);
    };
    const handleChangeSurname = (event) => {
        setSurname(event.target.value);
    };
    const handleChangePass = (event) => {
        setPass(event.target.value);
    };
    const handleChangeNick = (event) => {
        setNick(event.target.value);
    };
    const sendRegister = () => {
        fetch('http://localhost:3000/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "firstName": name, "lastName": surname, "username": nick, "password": pass })
            .then(response => response.json())
            
        })
    };

    return (
        <div className="register">
            <form className="register__form">
                <label>
                    <p>My name is:</p>
                    <input className='register__form__input' type="text" value={name} onChange={handleChangeName} />
                </label>
                <label>
                    <p> My surname is:</p>
                    <input className='register__form__input' type="text" value={surname} onChange={handleChangeSurname} />
                </label>
                <label>
                    <p>I'll use this nick:</p>
                    <input className='register__form__input' type="text" value={nick} onChange={handleChangeNick} />
                </label>
                <label>
                    <p>My password'll be:</p>
                    <input className='register__form__input' type="password" value={pass} onChange={handleChangePass} />
                </label>
            </form>

            <Link className='register__button' onClick={() => sendRegister()} to='/survey'>
                REGISTER
            </Link>
        </div>
    );
}