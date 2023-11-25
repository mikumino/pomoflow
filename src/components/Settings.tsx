import { useRef, useEffect } from 'react';
import { IoIosSettings } from "react-icons/io";

const Settings = () => {
    const settingsRef = useRef(null);

    const handleOpen = () => {
        (settingsRef.current).showModal();
    }

    return (
        <div>
            <div className="btn btn-ghost" onClick={handleOpen}>
                <IoIosSettings className="text-primary text-2xl" />
            </div>
            <dialog id="settings" ref={settingsRef} className="modal outline-none" >
                <div className="modal-box">
                    <h1 className="text-2xl font-bold mb-4">Settings</h1>
                </div>
            </dialog>
        </div>
    );
}

export default Settings;