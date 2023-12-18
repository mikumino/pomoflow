import { useState, useEffect } from 'react'

const PomoFlowSwitcher = () => {
    const [isPomo, setIsPomo] = useState(false);

    useEffect(() => {
        var savedPomo = localStorage.getItem('pomodoro');
        if (savedPomo) {
            setIsPomo(savedPomo === 'true');
        } else {
            setIsPomo(false);
        }
    }, [isPomo]);

    const handleModeChange = () => {
        localStorage.setItem('pomodoro', isPomo.toString());
        setIsPomo(!isPomo);
    }

    return (
        <label className="swap swap-rotate btn btn-ghost">
            <input type="checkbox" className="theme-controller" value="sunset" checked={isPomo} onChange={handleModeChange}  />
            <span className="swap-off">💧</span>
            <span className="swap-on">🍅</span>
        </label>
    );
}

export default PomoFlowSwitcher
