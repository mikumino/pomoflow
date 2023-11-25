import React, { useState, useEffect } from 'react';
import TimeDisplay from './TimeDisplay';
import Controls from './Controls';

interface FlowtimeBreakProps {
    breakTime: number;
    handleEndBreak: () => void;
}

const FlowtimeBreak = ({ breakTime, handleEndBreak }: FlowtimeBreakProps) => {
    const [timeRemaining, setTimeRemaining] = useState(breakTime);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (isRunning && timeRemaining > 0) {
            interval = setInterval(() => {
                setTimeRemaining((timeRemaining) => timeRemaining - 10);
            }, 10);
        } else if (!isRunning && timeRemaining !== 0) {
            if (interval) {
                clearInterval(interval as NodeJS.Timeout);
            }
        } else if (timeRemaining <= 0) {
            handleEndBreak();
        }
        return () => clearInterval(interval as NodeJS.Timeout);
    }, [isRunning, timeRemaining]);

    const handleStart = () => {
        setIsRunning(!isRunning);
    };
    const handleStop = () => {
        handleEndBreak();
    }
    const handleReset = () => {
        setTimeRemaining(breakTime);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <TimeDisplay time={timeRemaining} />
            <Controls handleStart={handleStart} handleStop={handleStop} handleReset={handleReset} isRunning={isRunning} />
        </div>
    );
}

export default FlowtimeBreak;