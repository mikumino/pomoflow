import { useEffect, useState } from "react";
import { formatTime } from "../utils/timeUtils";
import tick from '../assets/Tick.mp3';
import TimeDisplay from "./TimeDisplay";
import Controls from "./Controls";

interface PomodoroBreakProps {
    handleEndBreak: () => void;
    numIntervals: number;
}

const PomodoroBreak = ({ handleEndBreak, numIntervals }: PomodoroBreakProps) => {
    // Determine if this is a long break
    const isLongBreak = typeof window !== 'undefined' && window.localStorage.getItem('longBreakIntervals') ? numIntervals % parseInt(window.localStorage.getItem('longBreakIntervals') || '4') === 0 : false;
    // Get the break time
    var breakTime: number;
    if (isLongBreak) {
        breakTime = typeof window !== 'undefined' && window.localStorage.getItem('longBreakTime') ? parseInt(window.localStorage.getItem('longBreakTime') || '15') * 60 * 1000 : 15 * 60 * 1000;
    } else {
        breakTime = typeof window !== 'undefined' && window.localStorage.getItem('shortBreakTime') ? parseInt(window.localStorage.getItem('shortBreakTime') || '5') * 60 * 1000 : 5 * 60 * 1000;
    }

    const [timeRemaining, setTimeRemaining] = useState(breakTime);
    const [endTime, setEndTime] = useState(Date.now() + breakTime);
    const [isRunning, setIsRunning] = useState(typeof window !== 'undefined' && window.localStorage.getItem('autostartTimers') === 'true' ? true : false);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (isRunning && timeRemaining > 0) {
            document.title = `${formatTime(timeRemaining)} - Break`;
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
        audio.volume = typeof window !== 'undefined' ? parseFloat(window.localStorage.getItem('volume') || '1') : 1;
        audio.play();
    }
    const handleStart = () => {
        playSound();
        if (!isRunning) {
            setEndTime(Date.now() + timeRemaining);
        }
        setIsRunning(!isRunning);
    }
    const handleStop = () => {
        playSound();
        handleEndBreak();
    }
    const handleReset = () => {
        playSound();
        setTimeRemaining(breakTime);
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <TimeDisplay time={timeRemaining} />
                <Controls handleStart={handleStart} handleStop={handleStop} handleReset={handleReset} isRunning={isRunning} />
            </div>
        </div>
    );
};

export default PomodoroBreak;