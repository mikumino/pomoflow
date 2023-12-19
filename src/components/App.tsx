import { useState } from 'react';
import Flowtime from './Flowtime';
import Pomodoro from './Pomodoro';
import alarm from '../assets/Alarm.mp3';
import higurashi from '../assets/Higurashi.mp3';

const App = () => {
    const alarmSounds = {
        Classic: alarm,
        Higurashi: higurashi,
    };

    const [isPomodoro, setIsPomodoro] = useState(typeof window !== 'undefined' && window.localStorage.getItem('pomodoro') === 'true' ? true : true);

    const playAlarm = () => {
        var alarmSound = localStorage.getItem('alarmSound');
        const audio = new Audio(alarmSounds[alarmSound as keyof typeof alarmSounds] || alarmSounds['Classic']);
        audio.volume = typeof window !== 'undefined' ? parseFloat(window.localStorage.getItem('volume') || '1') : 1;
        audio.play();
    }

    return isPomodoro ? <Pomodoro playAlarm={playAlarm} /> : <Flowtime playAlarm={playAlarm} />;
}

export default App;