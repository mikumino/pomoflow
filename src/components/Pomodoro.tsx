import { useState } from "react";
import PomodoroFocus from "./PomodoroFocus";
import PomodoroBreak from "./PomodoroBreak";

interface PomodoroProps {
    playAlarm: () => void;
}

const Pomodoro = ({ playAlarm }: PomodoroProps) => {
    const [mode, setMode] = useState<'Focus' | 'Short Break' | 'Long Break'>('Focus');
    const [numIntervals, setNumIntervals] = useState(1);
    
    const handleEndFocus = () => {
        document.title = 'PomoFlow';
        playAlarm();
        var savedLongBreakIntervals = localStorage.getItem('longBreakIntervals') || '4';
        if (numIntervals % parseInt(savedLongBreakIntervals) === 0) {
            setMode('Long Break');
        } else {
            setMode('Short Break');
        }
    };
    const handleEndBreak = () => {
        document.title = 'PomoFlow';
        setNumIntervals(numIntervals + 1);
        playAlarm();
        setMode('Focus');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className='flex flex-row items-center justify-center mb-7'>
                <h1 className={`btn mr-2 px-11 ${mode === 'Focus' ? 'btn-primary' : 'btn-disabled'}`}>Focus</h1>
                <h1 className={`btn mr-2 px-11 ${mode === 'Short Break' ? 'btn-primary' : 'btn-disabled'}`}>Short Break</h1>
                <h1 className={`btn px-11 ${mode === 'Long Break' ? 'btn-primary' : 'btn-disabled'}`}>Long Break</h1>
            </div>
            {mode === 'Focus' ? (
                <PomodoroFocus handleEndFocus={handleEndFocus} />
            ) : mode === 'Short Break' ? (
                <PomodoroBreak handleEndBreak={handleEndBreak} numIntervals={numIntervals} />
            ) : (
                <PomodoroBreak handleEndBreak={handleEndBreak} numIntervals={numIntervals} />
            )}
        </div>
    );
}

export default Pomodoro;