import React, { useState, useEffect } from 'react';

export default function Stopwatch() {
    const [flowBreak, setFlowBreak] = useState('flow');
    const [time, setTime] = useState(0);
    const [isOn, setIsOn] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isOn) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else if (!isOn && time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isOn, time]);

    const handleStartPause = () => {
        setIsOn(!isOn);
    };

    const setFlow = () => {
        setFlowBreak('flow');
    };

    const setBreak = () => {
        setFlowBreak('break');
    };

    const resetTimer = () => {
        setTime(0);
    };

    function msToTime(milliseconds) {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
      
        const paddedHours = String(hours).padStart(2, '0');
        const paddedMinutes = String(minutes).padStart(2, '0');
        const paddedSeconds = String(seconds).padStart(2, '0');
      
        return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
      }

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center mb-6">
                <h2 className={`btn mr-2 px-11 ${flowBreak == "flow" ? 'btn-primary' : 'btn-outline'}`} onClick={setFlow}>Flow</h2>
                <h2 className={`btn px-11 ${flowBreak == "break" ? 'btn-primary': 'btn-outline'}`} onClick={setBreak}>Break</h2>
            </div>
            <div className="flex flex-row items-center justify-center mb-7">
                <h1 className="text-6xl sm:text-8xl font-bold text-center">{msToTime(time)}</h1>
            </div>
            <div className="flex flex-row items-center justify-center">
                <div className="btn btn-circle btn-primary mr-4" onClick={handleStartPause}><iconify-icon icon={isOn ? 'ph:pause-fill' : 'ph:play-fill'} /></div>
                <div className="btn btn-circle btn-outline" onClick={resetTimer}><iconify-icon icon="solar:restart-broken"></iconify-icon></div>
            </div>
        </div>
    );
}