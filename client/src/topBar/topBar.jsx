import './topBar.css';
import { useState } from 'react';
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export function TopBar() {
    const [mode, setMode] = useState(localStorage.getItem('mode') || "light");

    return (
        <div className={`app ${mode}`}>
            <div className="topBar">
                <div className='topBar__placeholder'><Link>®️</Link></div>
                <h2 className='topBar__title'>
                    <span className='topBar__title__tin'>Tin</span>
                    <span className='topBar__title__zoo'>ZOO</span>
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