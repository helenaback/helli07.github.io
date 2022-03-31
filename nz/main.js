/* Neuseelandreise Skript */
// für einzeilige Kommentare

/*L --> Leaflet Modul, map ist die id, Koordinaten in Array, 8 = Zoomstufe*/
var map = L.map('map').setView([-34.42, 172.67], 8);

/* Hintergrundkarte bauen. Z=Zoomfaktor, x=long, y=lat 
Surfer ist ein WMTS Surfer (Web Map Tile Service)*/
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
/*addTo(map) --> map ist die Variable*/

L.marker([-34.42, 172.67]).addTo(map)
    .bindPopup('Cape Reinga')
    .openPopup();