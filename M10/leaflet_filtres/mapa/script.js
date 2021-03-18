var map = L.map('mapid').on('load', onMapLoad).setView([41.400, 2.206], 9);

//Centrem el mapa a la posició de l'ususari
map.locate({setView: true, watch:true, maxZoom: 16});
	
var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

//en el clusters almaceno todos los markers
var markers = L.markerClusterGroup();
var data_markers = [];

function onMapLoad() {

	console.log("Mapa cargado");
    /*
	FASE 3.1
		1) Relleno el data_markers con una petición a la api
		2) Añado de forma dinámica en el select los posibles tipos de restaurantes
		3) Llamo a la función para --> render_to_map(data_markers, 'all'); <-- para mostrar restaurantes en el mapa
	*/

	//Emplenar data_markers i el select amb els possibles tipus de restaurants
	$.getJSON("http://localhost/mapa/api/apiRestaurants.php",
        function (data) {
			console.log(data);
			var marker;
			let llistaSelect=[];
            $.each(data, function (index, item) { 

				//Creo un nou marcador
				data_markers.push(item);

				//Bucle dels diversos tipus de cuina de l'item.
				let tipusCuinaLlista = item.kind_food.split(",");
				for (let i = 0; i < tipusCuinaLlista.length; i++) {
					if (llistaSelect.indexOf(tipusCuinaLlista[i])==-1){
						//Si no he afegir anteriorment el tipus al select l'hi afegeixo
						llistaSelect.push(tipusCuinaLlista[i]); //Afegeixo l'element a la llista d'elements per saber quins he afegit
						$('#kind_food_selector').append(`<option value="${tipusCuinaLlista[i]}">${tipusCuinaLlista[i]}</option>`); //Afegeixo l'element al select
					}
				}
		 
			});

			//Crido la funció per a mostrar tots els restuarants al mapa
			render_to_map(data_markers,'all');
        }
	);

}

$('#kind_food_selector').on('change', function() {
  //console.log(this.value);
  render_to_map(data_markers, this.value);
});



function render_to_map(data_markers,filter){

	/*
	FASE 3.2
		1) Limpio todos los marcadores
		2) Realizo un bucle para decidir que marcadores cumplen el filtro, y los agregamos al mapa
	*/	

	//Netejo els marcadors
	markers.clearLayers();

	//Bucle per afegir al mapa els marcadors que compleixe el filtre
	$.each(data_markers, function (index, item) { 
		//Afegeixo el marcador si els haig d'afegir tot o bé si és del tipus seleccionat
		var marker;
		afegir=false;
		$.each(item.kind_food.split(","), function (indexKind, itemKind) { 
			if(filter==itemKind){
			   afegir=true;
			}
	   	});
		if(filter=='all'||afegir==true){
			marker = L.marker(new L.LatLng(item.lat,item.lng));
			
			marker.bindPopup(`
				<div class="card" style="width: 18rem;">
					<img src="img/${item.photo}" class="card-img-top">
					<div class="card-body">
						<h5 class="card-title">${item.name}</h5>
						<p class="card-text"><b>Adreça: </b>${item.address}</p>
						<p class="card-text"><b>Tipus de cuina: </b>${item.kind_food}</p>
					</div>
				</div>
			`);
			markers.addLayer(marker);
		}
	});
	
	//Afegeixo els marcadors al mapa
	map.addLayer(markers);
	
			
}