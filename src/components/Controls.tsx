interface ControlsProps {
    handleStart: () => void;
    handleStop: () => void;
    handleReset: () => void;
    isRunning: boolean;
}

const Controls = ({ handleStart, handleStop, handleReset, isRunning }: ControlsProps) => {
    return (
        <div className="flex flex-row items-center justify-center">
            <button className="btn btn-circle btn-primary mr-4" onClick={handleStart}><iconify-icon icon={isRunning ? 'ph:pause-fill' : 'ph:play-fill'} /></button>
            <button className="btn btn-circle btn-outline btn-primary mr-4" onClick={handleStop}><iconify-icon icon="ph:stop-fill" /></button>
            <button className="btn btn-circle btn-outline" onClick={handleReset}><iconify-icon icon="solar:restart-broken"></iconify-icon></button>
        </div>
    );
}

export default Controls;