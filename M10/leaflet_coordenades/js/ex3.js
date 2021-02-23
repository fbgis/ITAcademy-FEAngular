//Codi JavaScript FASE 3

//Inicialització del mapa amb les coodenades i el zoom
var mymap = L.map('mapid').setView([41.387, 2.170], 16);

L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(mymap);

//Creem la icona personalitzada
var mandalorianIcon = L.icon({
    iconUrl: 'img/mandalorian_vermell.png',
    shadowUrl: 'img/mandalorian_ombra.png',

    iconSize:     [50, 50], // size of the icon
    shadowSize:   [70, 40], // size of the shadow
    iconAnchor:   [25, 50], // point of the icon which will correspond to marker's location
    shadowAnchor: [10, 40],  // the same for the shadow
    popupAnchor:  [0, -50] // point from which the popup should open relative to the iconAnchor
});

//Funció de l'esdeveniment click
function onMapClick(e) {
    //elimino el marcador anterior
    markerActual.clearLayers();

    //Creo el nou marcador
    //Utilitzem la icona personalitzada
    let markerLatLon = L.marker(e.latlng, {icon:mandalorianIcon});

    //afegeixo el marker al grup de layers per a poder-lo eliminar quan es troni a fer click
    markerActual.addLayer(markerLatLon);

    //Afegeixo el popup
    markerLatLon.bindPopup("<b>Coordenades del refugi mandalorian:</b><br><br>Lat: "+e.latlng.lat+" Lon: "+e.latlng.lng).openPopup();

    //Zoom màxim al nou marcador
    mymap.setView([e.latlng.lat,e.latlng.lng],20);
    
}

//Grup de layers que contrindrà elmarcador actual per a poder-lo elimianr abans d'afegir-ne un de nou
var markerActual=L.layerGroup().addTo(mymap);

//Listening de l'esdeveniment click
mymap.on('click', onMapClick);