/* Neuseelandreise Skript */
// für einzeilige Kommentare

/*L --> Leaflet Modul, map ist die id, Koordinaten in Array, 8 = Zoomstufe*/
let lat = -34.42
let lng = 172.67
let zoom = 8

let map = L.map('map').setView([lat, lng], zoom);

/* Hintergrundkarte bauen. Z=Zoomfaktor, x=long, y=lat 
Surfer ist ein WMTS Surfer (Web Map Tile Service)*/
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
/*addTo(map) --> map ist die Variable*/

L.marker([lat, lng]).addTo(map)
    .bindPopup('Cape Reinga')
    .openPopup();