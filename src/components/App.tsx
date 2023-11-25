import React, { useState } from 'react';
import FlowtimeFocus from './FlowtimeFocus';
import FlowtimeBreak from './FlowtimeBreak';

const App = () => {
    const [mode, setMode] = useState<'Focus' | 'Break'>('Focus');
    const [breakTime, setBreakTime] = useState(0);

    const handleEndFocus = (focusTime: number) => {
        setBreakTime(Math.floor(focusTime / 5));
        setMode('Break');
    };

    const handleEndBreak = () => {
        setMode('Focus');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className='flex flex-row items-center justify-center mb-7'>
                <h1 className={`btn mr-2 px-11 ${mode === 'Focus' ? 'btn-primary' : 'btn-disabled'}`}>Focus</h1>
                <h1 className={`btn px-11 ${mode === 'Break' ? 'btn-primary' : 'btn-disabled'}`}>Break</h1>
            </div>
            {mode === 'Focus' ? (
                <FlowtimeFocus handleEndFocus={handleEndFocus} />
            ) : (
                <FlowtimeBreak breakTime={breakTime} handleEndBreak={handleEndBreak} />
            )}
        </div>
    );
}

export default App;