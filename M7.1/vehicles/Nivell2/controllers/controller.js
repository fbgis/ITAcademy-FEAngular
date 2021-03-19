"use strict";
var car;
function afegirCotxe() {
    //recuperem els valors introduits al formulari
    var plate = document.getElementById('inputPlate').value;
    var color = document.getElementById('inputColor').value;
    var brand = document.getElementById('inputBrand').value;
    //Verificació de la matrícula
    var re_matricula = /[0-9]{4}[a-zA-Z]{3}$/;
    if (re_matricula.test(plate)) {
        //creem una nova instància de la classe Car
        car = new Car(plate, color, brand);
        //Mostrem els atributs del nou Car
        var resultat = document.getElementById('resultat');
        resultat.innerHTML = "Plate: " + car.plate + "  --  Brand: " + car.brand + "  --  Color: " + car.color;
        //Ocultem el primer formulari
        var formCotxe = document.getElementById('formCotxes');
        formCotxe.className = 'd-none';
        //Mostrem el segon formulari
        var formRodes = document.getElementById('formRodes');
        formRodes.className = 'd-block';
    }
    else {
        var inputplate = document.getElementById('inputPlate');
        inputplate.classList.add("is-invalid");
        var divErrorPlate = document.getElementById('errorPlate');
        divErrorPlate.textContent = "Cal que la matrícula contingui 4 números i 3 caràcters";
    }
    return false;
}
function afegirRodes() {
    //recuperem els valors introduits al formulari
    var marques = new Array(4);
    var diametres = new Array(4);
    for (var i = 1; i < 5; i++) {
        var idBrand = 'inputBrand' + String(i);
        marques[i - 1] = document.getElementById(idBrand).value;
        var idDiametre = 'inputDiam' + String(i);
        diametres[i - 1] = Number(document.getElementById(idDiametre).value);
    }
    //Comprovo que el diàmetre de totes les rodes sigui correcte
    var rodes = true;
    for (var i = 1; i < 5; i++) {
        if (diametres[i - 1] < 0.4 || diametres[i - 1] > 2) {
            var idDiametre = 'inputDiam' + String(i);
            var inputdiametre = document.getElementById(idDiametre);
            inputdiametre.classList.add("is-invalid");
            var idError = 'errorDiam' + String(i);
            var divErrorPlate = document.getElementById(idError);
            divErrorPlate.textContent = "El diàmetre ha de ser un valor entre 0,4 i 2.";
            rodes = false;
        }
    }
    //Si totes les ordes tenen el diàmetre correcte les afegeixo al cotxe i les mostro
    if (rodes) {
        for (var i = 1; i < 5; i++) {
            //afegim les rodes a la instància de la classe Car
            car.addWheel(new Wheel(diametres[i - 1], marques[i - 1]));
            //Mostrem les rodes del Car
            var idResultatRodes = 'resultatRodes' + String(i);
            var resultatRodes = document.getElementById(idResultatRodes);
            resultatRodes.innerHTML = "Wheel " + i + ": <br>    Brand: " + car.wheels[i - 1].brand + " -- Diameter: " + car.wheels[i - 1].diameter;
            //resultatRodes.innerHTML=`Wheel ${i}: <br>    Brand: ${car.wheels[i].brand} -- Diameter: ${car.wheels[i].diameter}`;
        }
    }
    return false;
}
