
$(document).ready(function() {
	var map = L.map('map').setView([40.2838, -3.8215], 15);

	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> ',
    	maxZoom: 25
	}).addTo(map);

	L.marker([40.2838, -3.82159]).addTo(map)
			.bindPopup("<b>URJC</b><br />AULARIO III").openPopup();

	var popup = L.popup();

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("Coordenadas del  sitio: " + e.latlng.toString())
			.openOn(map);
	}

	map.on('click', onMapClick);


//Geolocalizacion, ejercicio 5.9.3
	map.locate({setView: true, maxZoom: 16});
		map.on('locationfound', function(e) {
		L.marker(e.latlng).addTo(map).bindPopup("Te encuentras dentro de este círculo").openPopup();
		L.circle(e.latlng, radius).addTo(map);
		
	});
	
	map.on('locationerror', onLocationError);


});

