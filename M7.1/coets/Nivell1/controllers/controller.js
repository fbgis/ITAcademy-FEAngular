"use strict";
let rockets = [];
//Funció per a crear un nou coet
function createRocket(code, propellers) {
    let rocket = new Rocket(code, propellers);
    rockets.push(rocket);
    console.log(rocket.showRocket());
    return rocket;
}
//1. Crear dos coets
//  let rocket1 = createRocket('32WESSDS',[10,30,80]);
//  let rocket2 = createRocket('LDSFJA32',[30,40,50,50,30,10]);
//2. Mostrem per pantalla els coets
// console.log('Output:');
// rockets.forEach(function (value){
//     console.log(value.showRocket());
// });
//3. Càlcul potència màxima
// console.log(rockets[0].calcMaxPower());
//5. Botons vista
//Funció per accelerar el coet
function speedUp(code) {
    for (let i = 0; i < rockets.length; i++) {
        if (rockets[i].code == code) {
            rockets[i].speedUp();
            console.log(rockets[i].currentOutput);
            break;
        }
    }
}
//Funció per a frenar el coet
function braking(code) {
    for (let i = 0; i < rockets.length; i++) {
        if (rockets[i].code == code) {
            rockets[i].braking();
            console.log(rockets[i].currentOutput);
            break;
        }
    }
}
//Funció per a mostra la informació d'un coet
function printInfo(code) {
    let info = '';
    for (let i = 0; i < rockets.length; i++) {
        if (rockets[i].code == code) {
            info = rockets[i].showRocket();
            break;
        }
    }
    let rocketInfo = document.getElementById('rocketInfo');
    rocketInfo.innerHTML = info;
}
//Funció per a mostra la informació de tots els coets
function printAll() {
    let info = '';
    let rocketInfo = document.getElementById('rocketInfo');
    rocketInfo.innerHTML = '';
    for (let i = 0; i < rockets.length; i++) {
        info = rockets[i].showRocket();
        let newli = document.createElement('li');
        newli.innerHTML = info;
        rocketInfo.appendChild(newli);
    }
}
