/* Neuseelandreise Skript */
// für einzeilige Kommentare

/*L --> Leaflet Modul, map ist die id, Koordinaten in Array, 8 = Zoomstufe*/
let lat = -34.42;
let lng = 172.67;
let zoom = 8;

let coords = [-34.42, 172.67];

let map = L.map('map').setView(coords, zoom);
//console.log('text');
//console.log('id = "map"');
//console.log(ETAPPEN);
//console.log(ETAPPEN[0]);
//console.log(ETAPPEN[0].nr);
//console.log(ETAPPEN[0].github);
//console.log(ETAPPEN[0].wikipedia);
//console.log(ETAPPEN[0].lng);

let popup = `<h3>${ETAPPEN[0].titel} (Etappe ${ETAPPEN[0].nr}</h3>
            <ul>
                <li> geogr.Breite: ${ETAPPEN[18].long} </li>
                <li> geogr.Länge: ${ETAPPEN[18].lat} </li>
                <li> Nummer: ${ETAPPEN[18].nr} </li>
                <li><a href="${ETAPPEN[18].wikipedia}">Link zur Wikipediaseite</a></li>
                <li><a href="${ETAPPEN[18].github}">Link zur Etappenseite</a></li>

            </ul>
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



for (let etappe of ETAPPEN){
    console.log(etappe)
    L.marker([etappe.lat, etappe.lng]).addTo(map)
    

}