import { formatTime } from '../utils/timeUtils';

interface Props {
    time: number;
}

const TimeDisplay = ({ time }: Props) => { 
    return (
        <div className='text-6xl sm:text-8xl font-bold text-center mb-7'>
            {formatTime(time)}
        </div>
    );
}

export default TimeDisplay;