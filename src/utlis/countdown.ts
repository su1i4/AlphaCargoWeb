import dayjs, { Dayjs } from "dayjs";

interface TimeStamp {
  hours: string;
  minutes: string;
}

export const CountDown = (openHour: number, closeHour: number): TimeStamp => {
  const now: Dayjs = dayjs(); 
  const currentTime = now.hour();
  const currentMinute = now.minute(); 

  if (currentTime >= closeHour) {
    const nextOpenTime = now.add(1, 'day').startOf('day').hour(openHour).minute(0);
    const hoursRemaining = nextOpenTime.diff(now, 'hours');
    const minutesRemaining = nextOpenTime.diff(now, 'minutes') % 60;
    return { hours: hoursRemaining.toString(), minutes: minutesRemaining.toString() };
  } else if (currentTime >= openHour) {
    const hoursRemaining = closeHour - currentTime;
    const minutesRemaining = 60 - currentMinute;
    return { hours: hoursRemaining.toString(), minutes: minutesRemaining.toString() };
  } else {
    const hoursRemaining = openHour - currentTime;
    const minutesRemaining = 60 - currentMinute;
    return { hours: hoursRemaining.toString(), minutes: minutesRemaining.toString() };
  }
};
