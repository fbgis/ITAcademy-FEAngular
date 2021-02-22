$(document).ready(function () {

    //Funció fetch que obté un nou acudit de l'api
    async function fetchJoke() {
        let jokeAPI='http://api.icndb.com/jokes/random';
        let response = await fetch(jokeAPI);
        let data = await response.json();
        $("#joke").html(data.value.joke);
    }

    //Si el clica el botó es mostra un nou acudit
    $("#newJoke").click(function (e) { 
        e.preventDefault();
        fetchJoke();
    });

    //El primer cop que es carrege l'aplicació mostra directament el 1r acudit
    fetchJoke();
    
});