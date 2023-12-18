import { useState, useEffect } from 'react';
import TimeDisplay from './TimeDisplay';
import Controls from './Controls';
import tick from '../assets/Tick.mp3';


interface FlowtimeBreakProps {
    breakTime: number;
    handleEndBreak: () => void;
}

const FlowtimeBreak = ({ breakTime, handleEndBreak }: FlowtimeBreakProps) => {
    const [timeRemaining, setTimeRemaining] = useState(breakTime);
    const [endTime, setEndTime] = useState(Date.now() + breakTime);
    const [isRunning, setIsRunning] = useState(typeof window !== 'undefined' && window.localStorage.getItem('isRunning') === 'true' ? true : false);


    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (isRunning && timeRemaining > 0) {
            interval = setInterval(() => {
                setTimeRemaining((timeRemaining) => endTime - Date.now());
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

    const playSound = () => {
        const audio = new Audio(tick);
        // Volume set here so that Settings updates are reflected immediately
        audio.volume = typeof window !== 'undefined' ? parseFloat(window.localStorage.getItem('volume') || '1') : 1;
        audio.play();
    }

    const handleStart = () => {
        playSound();
        if (!isRunning) {
            setEndTime(Date.now() + timeRemaining);
        }
        setIsRunning(!isRunning);
    };
    const handleStop = () => {
        playSound();
        handleEndBreak();
    }
    const handleReset = () => {
        playSound();
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