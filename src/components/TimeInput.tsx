import { formatTime } from "../utils/timeUtils";

interface Props {
    initialTime: number;
}

const TimeInput = ({ initialTime }: Props) => {
    return (
        <input type="time" defaultValue={formatTime(initialTime)} className="text-6xl sm:text-8xl font-bold text-center mb-7">
            
        </input>
    )
}

export default TimeInput;