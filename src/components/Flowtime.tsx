import React, { useState, useEffect } from 'react';
import TimeDisplay from './TimeDisplay';
import Controls from './Controls';

const Flowtime = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else if (!isRunning && time !== 0) {
            if (interval) {
                clearInterval(interval as NodeJS.Timeout);
            }
        }
        return () => clearInterval(interval as NodeJS.Timeout);
    }, [isRunning, time]);

    const handleStart = () => {
        setIsRunning(!isRunning);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setTime(0);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <TimeDisplay time={time} />
            <Controls handleStart={handleStart} handleStop={handleStop} handleReset={handleReset} isRunning={isRunning} />
        </div>
    );
}

export default Flowtime;