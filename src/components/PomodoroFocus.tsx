import { useState, useEffect } from 'react';
import TimeDisplay from './TimeDisplay';
import Controls from './Controls';
import tick from '../assets/Tick.mp3';
import { formatTime } from '../utils/timeUtils';

interface PomodoroFocusProps {
    handleEndFocus: () => void;
}

const PomodoroFocus = ({ handleEndFocus }: PomodoroFocusProps) => {
    const [timeRemaining, setTimeRemaining] = useState(typeof window !== 'undefined' && window.localStorage.getItem('focusTime') ? parseInt(window.localStorage.getItem('focusTime') || '25') * 60 * 1000 : 25 * 60 * 1000);
    const [endTime, setEndTime] = useState(Date.now() + timeRemaining);
    const [isRunning, setIsRunning] = useState(typeof window !== 'undefined' && window.localStorage.getItem('autostartTimers') === 'true' ? true : false);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (isRunning && timeRemaining > 0) {
            document.title = `${formatTime(timeRemaining)} - Focus`;
            interval = setInterval(() => {
                setTimeRemaining((timeRemaining) => endTime - Date.now());
            }, 10);
        } else if (!isRunning && timeRemaining !== 0) {
            if (interval) {
                clearInterval(interval as NodeJS.Timeout);
            }
        } else if (timeRemaining <= 0) {
            handleEndFocus();
        }
    }, [isRunning, timeRemaining]);

    const playSound = () => {
        const audio = new Audio(tick);
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
        handleEndFocus();
    };
    const handleReset = () => {
        playSound();
        setTimeRemaining(localStorage.getItem('focusTime') ? parseInt(localStorage.getItem('focusTime') as string) * 60 * 1000 : 25 * 60 * 1000);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <TimeDisplay time={timeRemaining} />
            <Controls handleStart={handleStart} handleStop={handleStop} handleReset={handleReset} isRunning={isRunning} />
        </div>
    );
};

export default PomodoroFocus;