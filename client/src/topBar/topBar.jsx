import './topBar.css';
import { useState } from 'react';
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export function TopBar() {
    const [mode, setMode] = useState(localStorage.getItem('mode') || "light");

    function logout() {
        fetch('/users/logout', {
            method: 'GET'
        })
            .then(() => {
                sessionStorage.clear();
            })
            .catch(error => {
                console.error('Failed to logout', error);
                alert('Błąd wylogowania.');
            })
            .then(() => {
                window.location.reload(false);
            });
    }

    return (
        <div className={`app ${mode}`}>
            <div className="topBar">
                <div className='topBar__placeholder'>
                    <Link className='topBar__placeholder__link' to='/register'>Join</Link>
                    <Link className='topBar__placeholder__link' to='/login'>login</Link>
                    <Link className='topBar__placeholder__link' to='/home' onClick={() => logout()}>logout</Link>
                </div>
                <h2 className='topBar__title'>
                    <Link className='topBar__title__link' to='/home'>
                        <span className='topBar__title__tin'>Tin</span>
                        <span className='topBar__title__zoo'>ZOO</span>
                    </Link>
                </h2>
                <div className='topBar__mode'>
                    <button
                        className='topBar__mode__button'
                        onClick={() => {
                            setMode(mode === 'light' ? 'dark' : 'light');
                            localStorage.setItem('mode', mode === 'light' ? 'dark' : 'light')
                        }}>
                        {mode === 'light' ? '🌙' : '☀️'}
                    </button>
                </div>
            </div>
            <Link className='plus' to='/add'>✚</Link>
            <Outlet />
        </div>
    );

}