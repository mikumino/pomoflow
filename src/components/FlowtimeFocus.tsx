import { useState, useEffect } from 'react';
import TimeDisplay from './TimeDisplay';
import Controls from './Controls';

interface FlowTimeFocusProps {
    handleEndFocus: (focusTime: number) => void;
}

const FlowtimeFocus = ({ handleEndFocus }: FlowTimeFocusProps) => {
    const [time, setTime] = useState(0);
    const [startTime, setStartTime] = useState(Date.now() - time);
    const [isRunning, setIsRunning] = useState(localStorage.getItem('autostartTimers') === 'true' ? true : false);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((time) => Date.now() - startTime);
            }, 10);
        } else if (!isRunning && time !== 0) {
            if (interval) {
                clearInterval(interval as NodeJS.Timeout);
            }
        }
        return () => clearInterval(interval as NodeJS.Timeout);
    }, [isRunning, time, startTime]);

    const handleStart = () => {
        if (!isRunning) {
            setStartTime(Date.now() - time);
        }
        setIsRunning(!isRunning);
    };

    const handleStop = () => {
        handleEndFocus(time);
    };

    const handleReset = () => {
        setStartTime(0);
        setTime(0);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <TimeDisplay time={time} />
            <Controls handleStart={handleStart} handleStop={handleStop} handleReset={handleReset} isRunning={isRunning} />
        </div>
    );
}

export default FlowtimeFocus;