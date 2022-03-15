let car1 = {
  marka: "Bmw",
  model: "535i",
  hp:306,
  speed: 230,
  color: "red",
};
let car2 = {
  marka: "Lexus",
  model: "LS500L",
  hp:380,
  speed: "270km/h",
};



let brand = document.getElementById('brand');



function bestcars(car) {

let screen='';
for (const key in car) {
    
    screen+=`<li value=${key} selected disabled>${car[key]}</li>`
}
brand.innerHTML = screen;
}