"use strict";
class Rocket {
    constructor(code, propellers) {
        this.propellers = new Array();
        this.code = code;
        this.propellers = propellers;
        this.currentOutput = new Array(propellers.length).fill(0);
    }
    //Retorna un String amb els valors del coet
    showRocket() {
        let text = this.code + ': ';
        this.propellers.forEach(function (value) {
            text = text + String(value) + ',';
        });
        return text;
    }
    //Calcula la potència màxima del coet
    calcMaxPower() {
        let maxPower = 0;
        this.propellers.forEach(function (value) {
            maxPower = maxPower + value;
        });
        return maxPower;
    }
    //Mètode accelerar
    speedUp() {
        for (let i = 0; i < this.propellers.length; i++) {
            if (this.currentOutput[i] < this.propellers[i]) {
                this.currentOutput[i] = this.currentOutput[i] + 10;
            }
        }
    }
    //Mèrode per a frenar
    braking() {
        for (let i = 0; i < this.propellers.length; i++) {
            if (this.currentOutput[i] > 0) {
                this.currentOutput[i] = this.currentOutput[i] - 10;
            }
        }
    }
}
