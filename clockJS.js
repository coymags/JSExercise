
let clock = new Date();

//array for the name of days and month
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// get the number of month
let monthNumber = clock.getMonth()
let monthName = months[monthNumber]




// get the number of date and display
let numberOfDate = clock.getDate()
document.getElementById('monthname').innerHTML = monthName + " " + numberOfDate

//get the clock hours, minutes and seconds
let hours = clock.getHours()
let minutes = clock.getMinutes()
let seconds = clock.getSeconds()

let amOrPm = (hours >= 12) ? "PM" : "AM"
// display clock with am and pm
document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds + " "+ amOrPm 

// get the current day from sunday to monday
let dayNumber = clock.getDay()
let dayName = days[dayNumber]

// display what day it is
document.getElementById("day").innerHTML = dayName

console.log( hours + ":" + minutes + ":" + seconds + " "+ amOrPm )
console.log(clock)
console.log(monthNumber)