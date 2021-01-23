//Recuperem els elements formulari i els guardem en tres constants
const formRegistre = document.getElementById('formRegistre');
const formLogin = document.getElementById('formLogin');
const formFiltres = document.getElementById('form-filtres');

//Funció de validació del formulari de login
function loginValidate() {

    var acumErrores = 0;
	
	formLogin.classList.remove('is-invalid');

	var inputEmail = document.getElementById('inputEmailLogin');
	var inputPassword = document.forms["myFormLogin"]["inputContrasenyaLogin"];

	if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Aquest camp és obligatori";
        acumErrores ++;
    }else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "El correu electrònic no té un format vàlid";
		acumErrores ++;
	}

    if(inputPassword.value == "") {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Aquest camp és obligatori";
		acumErrores ++;
	}

    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}

}

//Funció de validació del formulari de registre
function registerValidate() {

    let acumErroresR = 0;
	
	formLogin.classList.remove('is-invalid');

    var inputNom = document.forms["myFormRegistre"]["inputNom"];
	var inputEmailRegistre = document.forms["myFormRegistre"]['inputEmailRegistre'];
    var inputPasswordRegistre = document.forms["myFormRegistre"]["inputContrasenya"];
    var inputPasswordRepetir = document.forms["myFormRegistre"]["inputContrasenyaRepetir"];
    var inputComarca = document.forms["myFormRegistre"]["inputComarca"];

    if(inputNom.value == "") {
		inputNom.classList.add("is-invalid");
		document.getElementById("errorNom").textContent = "Aquest camp és obligatori";
		acumErroresR ++;
	}

	if(inputEmailRegistre.value == "") {
		inputEmailRegistre.classList.add("is-invalid");
		document.getElementById("errorEmailRegistre").textContent = "Aquest camp és obligatori";
        acumErroresR ++;
    }else if(!validar_email(inputEmailRegistre.value)){
		inputEmailRegistre.classList.add("is-invalid");
		document.getElementById("errorEmailRegistre").textContent = "El correu electrònic no té un format vàlid";
		acumErroresR ++;
	}

    if(inputContrasenyaRegistre.value == "") {
		inputContrasenyaRegistre.classList.add("is-invalid");
		document.getElementById("errorContrasenyaRegistre").textContent = "Aquest camp és obligatori";
		acumErroresR ++;
	}else if(!validar_emailNivell2(inputContrasenyaRegistre.value)){
		inputContrasenyaRegistre.classList.add("is-invalid");
		document.getElementById("errorContrasenyaRegistre").textContent = "La contrasenya com a mínim ha de tenir una longitud de 8 caràctes, contenir una majúscula i un número";
		acumErroresR ++;
	}

	if(inputContrasenyaRepetir.value == "") {
		inputContrasenyaRepetir.classList.add("is-invalid");
		document.getElementById("errorContrasenyaRepetir").textContent = "Aquest camp és obligatori";
		acumErroresR ++;
	}else if(inputContrasenyaRepetir.value != inputContrasenyaRegistre.value) {
			inputContrasenyaRepetir.classList.add("is-invalid");
			document.getElementById("errorContrasenyaRepetir").textContent = "No has repetit la mateixa contrasenya";
			acumErroresR ++;
	}

	if(inputComarca.value == "") {
		inputComarca.classList.add("is-invalid");
		document.getElementById("errorComarca").textContent = "La comarca és obligatòria";
		acumErroresR ++;
	}

    if (acumErroresR > 0){
        return false;
    }else{
		return true;
	}

}

//Funció de validació del formulari filtres
function filtresValidate(){

	let acumErrorsF = 0;

	formFiltres.classList.remove('is-invalid');

    var inputNom = document.forms["form-filtres"]["inputNom"];
	var inputComarcaFlitre = document.forms["form-filtres"]['inputComarcaFlitre'];
    var inputsupmin = document.forms["form-filtres"]["inputsupmin"];
    var inputsupmax = document.forms["form-filtres"]["inputsupmax"];

	//Com a mínim hi ha d'haver un filtre amb algun valor
	if(inputAny.value == "" && inputComarcaFlitre.value=="" && inputsupmin.value==0 && inputsupmax.value==0) {
		inputAny.classList.add("is-invalid");
		document.getElementById("errorGlobal").textContent = "Cal indicar almenys un filtre";
		acumErrorsF ++;
	}

	//La superfície mínima ha de ser menor o igual a la superfície màxima
	if(inputsupmin.value>inputsupmax.value){
		inputsupmin.classList.add("is-invalid");
		document.getElementById("errorSupMin").textContent = "La superfície mínima no pot ser superior a la màxima";
		acumErrorsF ++;
	}

	if (acumErrorsF > 0){
        return false;
    }else{
		return true;
	}

}

//Funció del listener del rang mínim. Modifica el valor de l'atiqueta
function changeMin(){
	document.getElementById("valorMin").textContent = 'Supefície mínima: ' + inputsupmin.value+' Hes.';
}

//Funció del listener del rang màxim. Modifica el valor de l'atiqueta
function changeMax(){
	document.getElementById("valorMax").textContent = 'Supefície màxima: ' + inputsupmax.value+' Hes.';
}


formLogin.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);

formRegistre.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);

function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}

//Listener dels inputs tipus rang
document.getElementById('inputsupmin').addEventListener("input", () => {changeMin();});
document.getElementById('inputsupmax').addEventListener("input", () => {changeMax();});

//Funció de validació de la contrasenya. NIVELL 2
function validar_emailNivell2(contrasenya){
	correcte=true
	let regexNum=/.*[0-9].*/; //Expressió regular mínim 1 número
	let regexMajuscula=/.*[A-Z].*/; //Exrpessió regular mínim 1 majúscula

	// if (contrasenya.length<8) {
	// 	correcte=false;
	// }else if (!(regexNum.test(contrasenya))){
	// 	correcte=false;
	// }else if (!(regexMajuscula.test(contrasenya))){
	// 	correcte=false;
	// }

	if ((contrasenya.length<8) || (!(regexNum.test(contrasenya))) || (!(regexMajuscula.test(contrasenya)))){
		correcte=false;
	}


	// if (contrasenya.length<8 || !(regexNum.text(contrasenya)) || !(regexMajuscula.text(contrasenya))){
	// 	correcte==false;
	// }
	return correcte;
}