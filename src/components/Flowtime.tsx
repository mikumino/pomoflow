import { useState } from 'react';
import FLowtimeFocus from './FlowtimeFocus';
import FlowtimeBreak from './FlowtimeBreak';

interface FlowtimeProps {
    playAlarm: () => void;

}

const Flowtime = ({ playAlarm }: FlowtimeProps) => {
    const [mode, setMode] = useState<'Focus' | 'Break'>('Focus');
    const [breakTime, setBreakTime] = useState(0);

    const handleEndFocus = (focusTime: number) => {
        document.title = 'PomoFlow';
        var savedMultiplier = localStorage.getItem('breakTimeMultiplier');
        var breakTimeMultiplier;
        if (savedMultiplier) {
            breakTimeMultiplier = parseFloat(savedMultiplier);
        } else {
            breakTimeMultiplier = 0.2;
        }
        setBreakTime(Math.floor(focusTime * breakTimeMultiplier));
        setMode('Break');
    };

    const handleEndBreak = () => {
        document.title = 'PomoFlow';
        playAlarm();
        setMode('Focus');
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className='flex flex-row items-center justify-center mb-7'>
                <h1 className={`btn mr-2 px-11 ${mode === 'Focus' ? 'btn-primary' : 'btn-disabled'}`}>Focus</h1>
                <h1 className={`btn px-11 ${mode === 'Break' ? 'btn-primary' : 'btn-disabled'}`}>Break</h1>
            </div>
            {mode === 'Focus' ? (
                <FLowtimeFocus handleEndFocus={handleEndFocus} />
            ) : (
                <FlowtimeBreak breakTime={breakTime} handleEndBreak={handleEndBreak} />
            )}
        </div>
    );
}

export default Flowtime;