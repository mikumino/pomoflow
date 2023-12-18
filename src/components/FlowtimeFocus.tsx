import { useState, useEffect } from 'react';
import TimeDisplay from './TimeDisplay';
import Controls from './Controls';
import tick from '../assets/Tick.mp3';

interface FlowTimeFocusProps {
    handleEndFocus: (focusTime: number) => void;
}

const FlowtimeFocus = ({ handleEndFocus }: FlowTimeFocusProps) => {
    const [time, setTime] = useState(0);
    const [startTime, setStartTime] = useState(Date.now() - time);
    const [isRunning, setIsRunning] = useState(typeof window !== 'undefined' && window.localStorage.getItem('isRunning') === 'true' ? true : false);

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

    const playSound = () => {
        const audio = new Audio(tick);
        // Volume set here so that Settings updates are reflected immediately
        audio.volume = typeof window !== 'undefined' ? parseFloat(window.localStorage.getItem('volume') || '1') : 1;
        audio.play();
    }

    const handleStart = () => {
        playSound();
        if (!isRunning) {
            setStartTime(Date.now() - time);
        }
        setIsRunning(!isRunning);
    };

    const handleStop = () => {
        playSound();
        handleEndFocus(time);
    };

    const handleReset = () => {
        playSound();
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