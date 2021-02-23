//Codi JavaScript FASE 2

//Inicialització del mapa amb les coodenades i el zoom
var mymap = L.map('mapid').setView([41.387, 2.170], 16);

L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(mymap);

//Funció de l'esdeveniment click
function onMapClick(e) {
    //elimino el marcador anterior
    markerActual.clearLayers();

    //Creo el nou marcador
    let markerLatLon = L.marker(e.latlng);

    //afegeixo el marker al grup de layers per a poder-lo eliminar quan es troni a fer click
    markerActual.addLayer(markerLatLon);

    //Afegeixo el popup
    markerLatLon.bindPopup("Les meves coordenades son:<br><b>Lat: "+e.latlng.lat+" Lon: "+e.latlng.lng+"</b>").openPopup();

    //Zoom màxim al nou marcador
    mymap.setView([e.latlng.lat,e.latlng.lng],20);
    
}

//Grup de layers que contrindrà elmarcador actual per a poder-lo elimianr abans d'afegir-ne un de nou
var markerActual=L.layerGroup().addTo(mymap);

//Listening de l'esdeveniment click
mymap.on('click', onMapClick);