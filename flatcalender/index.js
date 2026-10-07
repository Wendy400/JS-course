require ('datejs')

const calendarA = [
    {"date": "2024-06-15T12:00:00", "event":"Wedding"}, 
    {"date": "2024-07-03T19:00:00", "event":"Dinner Reservations"}, 
    {"date": "2024-07-20T08:00:00", "event":"Doctors Appointment"}
];

const calendarB = [
    {"date": "2024-05-15T09:00:00", "event":"Interview"}, 
    {"date": "2024-06-22T20:00:00", "event":"Concert"}, 
    {"date": "2024-07-01T14:00:00", "event":"Coffee Date"}
];

function mergeCalendars(calA, calB) {
    const newCalendar= [...calA, ...calB]
    return newCalendar

}
const newCalendar = mergeCalendars(calendarA, calendarB)
console.log(newCalendar)


function readCalendarDates(calendar) {
    calendar . forEach (item =>{ 
        const parsedDate= new Date(item.date)
        console.log(`${item.event} -${parsedDate.toString("hh:mmtt MMMM dS, yyyy")}`); 
    }) ;
}


//console.log("welcome to flatcalender");
//console.log(...mergeCalendars(calendarA, calendarB));
//console.log(...calendarA, ...calendarB) does the merge functions work, if merge function is not a must, this will work the same
readCalendarDates(newCalendar)



