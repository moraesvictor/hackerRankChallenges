/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s: string) {
    const [hour, minutes, seconds] = s.split(':');
  
    if (seconds.includes('PM') && !hour.includes('12')) {
      const secondsWithoutPm = seconds.replace('PM', '');
      const militaryHour = parseInt(hour, 10) + 12;
      return `${militaryHour}:${minutes}:${secondsWithoutPm}`;
    }
  
    if (seconds.includes('PM') && hour.includes('12')) {
      const secondsWithoutPm = seconds.replace('PM', '');
      return `12:${minutes}:${secondsWithoutPm}`;
    }
  
    if (seconds.includes('AM') && hour.includes('12')) {
      const secondsWithoutPm = seconds.replace('AM', '');
      return `00:${minutes}:${secondsWithoutPm}`;
    }
  
    return `${hour}:${minutes}:${seconds.replace('AM', '')}`;
  }
  