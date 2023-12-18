import { useRef, useEffect, useState } from 'react';
import { IoIosSettings } from "react-icons/io";

const Settings = () => {
    const settingsRef = useRef<HTMLDialogElement | null>(null);
    const [alarmSound, setAlarmSound] = useState('Classic');
    const [volume, setVolume] = useState(1);
    const [breakTimeMultiplier, setBreakTimeMultiplier] = useState(0.2);
    const [autostartTimers, setAutostartTimers] = useState(false);

    const handleOpen = () => {
        if (settingsRef.current) {
            settingsRef.current.showModal();
            // stupid but works CHANGE LATER
            const savedAlarmSound = localStorage.getItem('alarmSound') || alarmSound;
            const savedVolume = localStorage.getItem('volume') || volume.toString();
            const savedBreakTimeMultiplier = localStorage.getItem('breakTimeMultiplier') || breakTimeMultiplier.toString();
            const savedAutostartTimers = localStorage.getItem('autostartTimers') || autostartTimers.toString();
            if (savedAlarmSound) {
                setAlarmSound(savedAlarmSound);
            }
            if (savedVolume) {
                setVolume(parseFloat(savedVolume));
            }
            if (savedBreakTimeMultiplier) {
                setBreakTimeMultiplier(parseFloat(savedBreakTimeMultiplier));
            }
            if (savedAutostartTimers) {
                setAutostartTimers(savedAutostartTimers === 'true');
            }
        }
    }

    const handleSave = () => {
        localStorage.setItem('alarmSound', alarmSound);
        localStorage.setItem('volume', volume.toString());
        localStorage.setItem('breakTimeMultiplier', breakTimeMultiplier.toString());
        localStorage.setItem('autostartTimers', autostartTimers.toString());
    }

    return (
        <div>
            <div className="btn btn-ghost" onClick={handleOpen}>
                <IoIosSettings className="text-primary text-2xl" />
            </div>
            <dialog id="settings" ref={settingsRef} className="modal outline-none" >
                <div className="modal-box">
                    <h1 className="text-3xl font-bold mb-4">Settings</h1>
                    <h2 className="font-bold mb-2">General</h2>
                    <h3>Alarm Sound</h3>
                    <p className="text-xs mb-2">The sound that plays when the timer ends</p>
                    <select className="select select-bordered w-full mb-4" onChange={(e) => setAlarmSound(e.target.value)} value={alarmSound}>
                        <option>Classic</option>
                        <option>Higurashi</option>
                    </select>
                    <h3>Volume</h3>
                    <p className="text-xs mb-2">The volume of sound effects</p>
                    <p className="text-xs mb-2">Current volume: {Math.floor(volume*100)}%</p>
                    <input type="range" className="range range-primary w-full mb-4 " min="0" max="1" step="0.01" value={volume} onChange={(e) => setVolume(parseFloat(e.target.value))} />
                    <h2 className="font-bold mb-2">Flowtime</h2>
                    <h3>Break Time Multiplier</h3>
                    <p className="text-xs mb-2">The number multiplied against focus time to get break time (Default: 0.2)</p>
                    <input type="number" className="input input-bordered w-full mb-4" value={breakTimeMultiplier} onChange={(e) => setBreakTimeMultiplier(parseFloat(e.target.value))} />
                    <h3>Autostart Timers</h3>
                    <p className="text-xs mb-2">Autostart timer when switching between focus and break (Default: false)</p>
                    <input type="checkbox" className="toggle" checked={autostartTimers} onChange={(e) => setAutostartTimers(e.target.checked)} />

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-primary" onClick={handleSave}>Save</button>
                            <button className="btn btn-ghost">Cancel</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
}

export default Settings;