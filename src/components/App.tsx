import { useState } from 'react';
import Flowtime from './Flowtime';
import Pomodoro from './Pomodoro';
import alarm from '../assets/alarm.mp3';
import higurashi from '../assets/higurashi.mp3';

const App = () => {
    const alarmSounds = {
        Classic: alarm,
        Higurashi: higurashi,
    };

    const [isPomodoro, setIsPomodoro] = useState(typeof window !== 'undefined' && window.localStorage.getItem('pomodoro') === 'true' ? true : false);

    const handleModeChange = () => {
        setIsPomodoro(!isPomodoro);
        localStorage.setItem('pomodoro', isPomodoro ? 'false' : 'true');
    }

    const playAlarm = () => {
        var alarmSound = localStorage.getItem('alarmSound');
        const audio = new Audio(alarmSounds[alarmSound as keyof typeof alarmSounds] || alarmSounds['Classic']);
        audio.volume = typeof window !== 'undefined' ? parseFloat(window.localStorage.getItem('volume') || '1') : 1;
        audio.play();
    }

    return isPomodoro ? <Pomodoro playAlarm={playAlarm} isPomodoro={isPomodoro} handleModeChange={handleModeChange}/> : <Flowtime playAlarm={playAlarm} isPomodoro={isPomodoro} handleModeChange={handleModeChange} />;
}

export default App;