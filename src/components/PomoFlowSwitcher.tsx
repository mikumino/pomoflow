import { useState, useEffect } from 'react'

const PomoFlowSwitcher = () => {
    const [isPomo, setIsPomo] = useState(typeof window !== 'undefined' && window.localStorage.getItem('pomodoro') === 'true' ? true : false);

    const handleModeChange = () => {
        console.log('handleModeChange');
        
        localStorage.setItem('pomodoro', isPomo ? 'false' : 'true');
        setIsPomo(!isPomo);
    };


    return (
        <label className="swap swap-rotate btn btn-ghost">
            <input type="checkbox" className="theme-controller" value="sunset" checked={isPomo} onChange={handleModeChange} />
            <span className="swap-off">💧</span>
            <span className="swap-on">🍅</span>
        </label>
    );
}

export default PomoFlowSwitcher
