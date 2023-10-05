 function convertMS( milliseconds ) {
    var year , month , week ,day, hour  , minute, seconds;
    // var day = 0, hour= 0, minute=0, seconds=0;
    seconds = Math.floor(milliseconds / 1000);
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;
    week = Math.floor(day / 7) ;
    day = day % 7 ;
    month = Math.floor(week / 4) ;
    week = week % 4 ;
    year = Math.floor(month / 12) ;
    month = month % 12 ;

    return {
        year ,
        month,
        week ,
        day: day,
        hour: hour,
        minute: minute,
        seconds: seconds
    };
}
// let ms = 168879837 ;
// let a = convertMS(ms) ;
// console.log(a);

export default function minifyMs(ms){
    let a = convertMS(ms) ;
    return ( a.year || a.month || a.week|| a.day || a.hour || a.minute || a.seconds) + ' ' +
    (a.year && 'years' || a.month && 'months' || a.week && 'weeks' || a.day && 'days' || a.hour && 'hours'|| a.minute && 'min' || a.seconds && 'sec')
}

// console.log(minifyMs(ms));