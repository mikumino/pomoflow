import { useState } from "react";
// Import pomodoro components when they are ready

interface PomodoroProps {
    playAlarm: () => void;
}

const Pomodoro = ({ playAlarm }: PomodoroProps) => {
    const [mode, setMode] = useState<'Focus' | 'Short Break' | 'Long Break'>('Focus');
    const [numIntervals, setNumIntervals] = useState(0);
    
    const handleEndFocus = () => {
        document.title = 'PomoFlow';
        playAlarm();
        setMode('Short Break');
    };
    const handleEndShortBreak = () => {
        document.title = 'PomoFlow';
        playAlarm();
        setMode('Focus');
    };
    const handleEndLongBreak = () => {
        document.title = 'PomoFlow';
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
                <PomodoroShortBreak handleEndShortBreak={handleEndShortBreak} />
            ) : (
                <PomodoroLongBreak handleEndLongBreak={handleEndLongBreak} />
            )}
        </div>
    );
}

export default Pomodoro;