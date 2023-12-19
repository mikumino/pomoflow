import { useState, useEffect } from 'react'

interface PomoFlowSwitcherProps {
    isPomodoro: boolean;
    handleModeChange: () => void;
}

const PomoFlowSwitcher = ({ isPomodoro, handleModeChange }: PomoFlowSwitcherProps) => {
    return (
        <label className="swap swap-rotate btn btn-ghost mb-2">
            <input type="checkbox" className="theme-controller" value="sunset" checked={isPomodoro} onChange={handleModeChange} />
            <span className="swap-off">💧</span>
            <span className="swap-on">🍅</span>
        </label>
    );
}

export default PomoFlowSwitcher
