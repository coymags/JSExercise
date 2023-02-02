const dataContainer = document.getElementById('datacontainer');

// create an image element and append to div element 'datacontainer'
let img = document.createElement('img');
img.src = 'cristmastree.jpg';
img.style = "width: 15rem; height: 20rem;"

dataContainer.append(img);


// setup date to calculate how many days before cristmas
// current date
const today = new Date()
// date of cristmas day
let christMasDay = new Date(today.getFullYear(), 11, 25);

console.log(christMasDay);
// one day time
const oneDay = 1000 * 60 * 60 * 24;
const diff = Math.ceil((christMasDay.getTime() - today.getTime()) / (oneDay));


let p = document.createElement('p')
p.innerHTML = ('Christmas in' + ' ' + diff +' ' + 'days');
p.style = "font-size:3rem;"

dataContainer.append(p);


console.log(diff)





