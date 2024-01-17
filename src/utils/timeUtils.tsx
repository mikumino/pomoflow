export const formatTime = (time: number) => {
    const totalSeconds = Math.floor(time / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
  
    // Hours only display if you have at least 1 hour, I think it looks cleaner :P
    const paddedHours = (hours > 0) ? String(hours).padStart(2, '0') + ':' : '';
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');
  
    return `${paddedHours}${paddedMinutes}:${paddedSeconds}`;
}