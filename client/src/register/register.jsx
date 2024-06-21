import React, { useState } from 'react';
import './register.css';

export function Register() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [nick, setNick] = useState('');

    const handleChangeName = (event) => {
        setName(event.target.value);
    };
    const handleChangeSurname = (event) => {
        setName(event.target.value);
    };
    const handleChangeEmail = (event) => {
        setName(event.target.value);
    };
    const handleChangeNick = (event) => {
        setName(event.target.value);
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
                    <input className='register__form__input' type="text" value={name} onChange={handleChangeSurname} />
                </label>
                <label>
                    <p>I use this email:</p>
                    <input className='register__form__input' type="text" value={name} onChange={handleChangeEmail} />
                </label>
                <label>
                    <p>My nickname will be:</p>
                    <input className='register__form__input' type="text" value={name} onChange={handleChangeNick} />
                </label>
            </form>

        <button className='register__button'>
            REGISTER
        </button>
        </div>
    );

}