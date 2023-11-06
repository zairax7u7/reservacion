var dateHeaderDocument = document.getElementById('sheet-date__span-day');
var numberHeader = document.getElementById('sheet-date__span-number-day');


// days of the week inside of an array
const DaysOfWeek = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

// make a date
var todayDateDay = new Date ()

// get a day of the week, but when we get the day the system gives us one day later , and need put - 1 for gives us the day is today
var gDateDay = todayDateDay.getDay() - 1;

//  here chanche the content inside of dateHeaderDocument for the new with the array
dateHeaderDocument.textContent = ` ${DaysOfWeek[gDateDay]} `




// hay un erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
// hay un erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
// hay un erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
// hay un erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
// hay un erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
// hay un erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
// hay un erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
var todayDayNumber = new Date();

var gNumDay = todayDateDay.getDate();

gNumDay = (gNumDay < 10) ? '0' + gNumDay : gNumDay

numberHeader.textContent = ` ${gNumDay} `
// hay un erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
// hay un erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
// hay un erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
// hay un erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
// hay un erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr