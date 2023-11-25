import { FaPlay, FaPause, FaStop, FaRotateLeft } from "react-icons/fa6";

interface ControlsProps {
    handleStart: () => void;
    handleStop: () => void;
    handleReset: () => void;
    isRunning: boolean;
}

const Controls = ({ handleStart, handleStop, handleReset, isRunning }: ControlsProps) => {
    return (
        <div className="flex flex-row items-center justify-center">
            <button className="btn btn-circle btn-primary mr-4" onClick={handleStart}>
                {isRunning ? (
                    <FaPause />
                ) : (
                    <FaPlay />
                )}
            </button>
            <button className="btn btn-circle btn-outline btn-primary mr-4" onClick={handleStop}><FaStop />
            </button>
            <button className="btn btn-circle btn-outline" onClick={handleReset}><FaRotateLeft /></button>
        </div>
    );
}

export default Controls;