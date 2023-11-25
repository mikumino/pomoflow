import { formatTime } from '../utils/timeUtils';

interface Props {
    time: number;
}

const Stopwatch = ({ time }: Props) => { 
    return (
        <div>
            {formatTime(time)}
        </div>
    );
}

export default Stopwatch;