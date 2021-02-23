//Codi JavaScript FASE 1

//Inicialització del mapa amb les coodenades i el zoom
var mymap = L.map('mapid').setView([41.387, 2.170], 16);

L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(mymap);

//Marcador a Balmes 16
var marker = L.marker([41.387, 2.166]).addTo(mymap);

//Popup del marcador
marker.bindPopup("<b>Restaurant Centfocs</b><br><br>Restaurant mediterrani<br>Carre de Balmes, 16, 08007 Barcelona").openPopup();

