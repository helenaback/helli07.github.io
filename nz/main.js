/* Neuseelandreise Skript */
// für einzeilige Kommentare

/*L --> Leaflet Modul, map ist die id, Koordinaten in Array, 8 = Zoomstufe*/
let lat = -34.42;
let lng = 172.67;
let zoom = 8;

let coords = [-34.42, 172.67];

let map = L.map('map').setView(coords, zoom);

console.log(ETAPPEN)

let popup = `<h3>Cape Reinga</h3>
            <ul>
                <li> geogr. Länge: ${lng}</li>
                <li> geogr. Breite: ${lat}</li>
`;


/* Hintergrundkarte bauen. Z=Zoomfaktor, x=long, y=lat 
Surfer ist ein WMTS Surfer (Web Map Tile Service)*/
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
/*addTo(map) --> map ist die Variable*/

L.marker([lat, lng]).addTo(map)
    .bindPopup(popup)
    .openPopup();