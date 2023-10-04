 function convertMS( milliseconds ) {
    var day, hour, minute, seconds;
    // var day = 0, hour= 0, minute=0, seconds=0;
    seconds = Math.floor(milliseconds / 1000);
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;
    return {
        day: day,
        hour: hour,
        minute: minute,
        seconds: seconds
    };
}
let ms = 22400000 ;
let a = convertMS(ms) ;
console.log(a);

console.log((a.day || a.hour || a.minute || a.seconds) + (a.day && 'day' || a.hour + 'hr'|| a.minute + 'min' || a.seconds + 'sec'));