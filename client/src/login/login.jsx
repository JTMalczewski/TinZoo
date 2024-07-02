import React, { useState } from 'react';
import './login.css';

export function Login() {
    const [nick, setNick] = useState('');
    const [pass, setPass] = useState('');

    const handleChangeNick = (event) => {
        setNick(event.target.value);
    };
    const handleChangePass = (event) => {
        setPass(event.target.value);
    };
    const sendLogin = () => {
        fetch('http://localhost:3000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "username": nick, "password": pass })
        })
    };

    return (
        <div className="login">
            <form className="login__form">
                <label>
                    <p>Nick:</p>
                    <input className='login__form__input' type="text" value={nick} onChange={handleChangeNick} />
                </label>
                <label>
                    <p>Password:</p>
                    <input className='login__form__input' type="password" value={pass} onChange={handleChangePass} />
                </label>
            </form>

            <button className='login__button' onClick={() => sendLogin()}>
                LOGIN
            </button>
        </div>
    );

}