"use strict";
let rockets = [];
//Funció per a crear un nou coet
function createRocket(code, propellers, rocketNum) {
    let rocket = new Rocket(code, propellers);
    rockets.push(rocket);
    console.log(rocket.showRocket());
    //Activo els botons de control i mostro el rocket
    let rocketButtons = document.getElementById('btnsRocket' + rocketNum);
    rocketButtons.style.display = 'block';
    let rocketIcon = document.getElementById('rocket' + rocketNum);
    rocketIcon.style.display = 'block';
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
function speedUp(code, rocketNum) {
    let power = 0;
    for (let i = 0; i < rockets.length; i++) {
        if (rockets[i].code == code) {
            rockets[i].speedUp();
            console.log(rockets[i].currentOutput);
            power = rockets[i].calcCurrentPower();
            break;
        }
    }
    let rocketIcon = document.getElementById('rocket' + rocketNum);
    //rocketIcon.classList.add('horizTranslate');
    let speed = Math.round(1000 / power);
    console.log(speed);
    rocketIcon.style.transitionTimingFunction = 'linear';
    rocketIcon.style.transitionDuration = String(speed) + 's';
    rocketIcon.style.marginLeft = '95%';
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
    if (rockets.length > 0) {
        for (let i = 0; i < rockets.length; i++) {
            info = rockets[i].showRocket();
            let newli = document.createElement('li');
            newli.innerHTML = info;
            rocketInfo.appendChild(newli);
        }
    }
    else {
        rocketInfo.innerHTML = 'No rocket created.';
    }
}
