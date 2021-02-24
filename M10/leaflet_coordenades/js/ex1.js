//Codi JavaScript FASE 1

//Inicialització del mapa amb les coodenades i el zoom
var mymap = L.map('mapid').setView([41.387, 2.170], 16);

var OpenStreetMap_HOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
}).addTo(mymap);

//Marcador a Balmes 16
var marker = L.marker([41.387, 2.166]).addTo(mymap);

//Popup del marcador
marker.bindPopup("<b>Restaurant Centfocs</b><br><br>Restaurant mediterrani<br>Carre de Balmes, 16, 08007 Barcelona").openPopup();

