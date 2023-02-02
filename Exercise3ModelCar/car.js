const box = document.getElementById('displaybox');

// car object
const car = {
    manufacturer: 'toyota',
    model: 'Corolla AE101',
    engine: '1,3 2E',
    bodystyle: 'Sedan' 
}

let img = document.createElement('img');
img.src = 'carimage.jpg';

box.append(img);

const infoBox = document.createElement('div');
infoBox.style = "width: 50%; height: 8rem; border: 1px solid black; padding: 1rem; align-items: center;"

box.append(infoBox);

let carBrand = document.createElement('p');
carBrand.style = "font-size: 1.5rem; margin: 0;"
carBrand.innerHTML = ('Manufacturer:' + " " + car.manufacturer);
infoBox.append(carBrand);

let model = document.createElement('p');
model.style = "font-size: 1.5rem; margin: 0;"
model.innerHTML = ('Make and Model:' + " " + car.model);
infoBox.append(model);

let engine = document.createElement('p');
engine.style = "font-size: 1.5rem; margin: 0;"
engine.innerHTML = ('Engine:' + " " + car.engine);
infoBox.append(engine);

let bodyStyle = document.createElement('p');
bodyStyle.style = "font-size: 1.5rem; margin: 0;"
bodyStyle.innerHTML = ('Body Style:' + " " + car.bodystyle);
infoBox.append(bodyStyle);