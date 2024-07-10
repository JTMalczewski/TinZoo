import React, { useState } from 'react';
import './login.css';

export function Login() {
    const [nick, setNick] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeNick = (event) => {
        setNick(event.target.value);
    };
    const handleChangePass = (event) => {
        setPassword(event.target.value);
    };
    const sendLogin = () => {
        fetch('http://localhost:3000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "username": nick, "password": password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert('Błąd logowania: ' + data.error);
            } else {
                console.log(data);
                sessionStorage.setItem('userId', data.userId);
                sessionStorage.setItem('username', data.username);
                sessionStorage.setItem('survey', Object.values(data.survey))
                window.location.href = '/home';
            }
        })
        .catch(error => alert('Błąd logowania: ' + error.message));
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
                    <input className='login__form__input' type="password" value={password} onChange={handleChangePass} />
                </label>
            </form>

            <button className='login__button' onClick={() => sendLogin()}>
                LOGIN
            </button>
        </div>
    );

}