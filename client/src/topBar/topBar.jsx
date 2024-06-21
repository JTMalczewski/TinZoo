import './topBar.css';

export function TopBar({mode, setMode}) {
    return (
        <div className="topBar">
            <div className='topBar__placeholder'></div>
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
    );

}