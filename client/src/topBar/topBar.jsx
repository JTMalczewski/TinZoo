import './topBar.css';
import { useState } from 'react';
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export function TopBar() {
    const [mode, setMode] = useState(localStorage.getItem('mode') || "light");

    return (
        <div className={`app ${mode}`}>
            <div className="topBar">
                <div className='topBar__placeholder'><Link className='topBar__placeholder__link' to='/register'>Join</Link><Link className='topBar__placeholder__link' to='/login'>Login</Link></div>
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
            <Outlet />
        </div>
    );

}