$(document).ready(function () {

    //Funció que obté un nou acudit de l'api mitjançant una crida AJAX
    function newJoke(){ 

        let jokeAPI='http://api.icndb.com/jokes/random';
        $.getJSON(jokeAPI, function (data) {
            $("#joke").html(data.value.joke);
        });

    }

    //Si el clica el botó es mostra un nou acudit
    $("#newJoke").click(function (e) { 
        e.preventDefault();
        newJoke();
    });

    //El primer cop que es carrege l'aplicació mostra directament el 1r acudit
    newJoke();
    
});