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

//let popup = `<h3>${ETAPPEN[18].titel} (Etappe ${ETAPPEN[18].nr})</h3>
//            <ul>
//               <li> geogr.Breite: ${ETAPPEN[18].long} </li>
//               <li> geogr.Länge: ${ETAPPEN[18].lat} </li>
//               <li> Nummer: ${ETAPPEN[18].nr} </li>
//               <li><a href="${ETAPPEN[18].wikipedia}">Link zur Wikipediaseite</a></li>
//               <li><a href="${ETAPPEN[18].github}">Link zur Etappenseite</a></li>
//           </ul>
//    `;


/* Hintergrundkarte bauen. Z=Zoomfaktor, x=long, y=lat 
Surfer ist ein WMTS Surfer (Web Map Tile Service)*/
let startlayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
/*addTo(map) --> map ist die Variable*/

//L.marker([lat, lng]).addTo(map)
//    .bindPopup(popup)
//    .openPopup();
//

let layerControl = L.control.layers({
    "Openstreetmap": startlayer,
    "Topograhie": L.tileLayer.provider("OpenTopoMap"),

}).addTo(map);

let miniMap = new L.Control.MiniMap(
    L.tileLayer.provider("OpenStreetMap.Mapnik")
    
).addTo(map);

for (let etappe of ETAPPEN) {
    //console.log(etappe)
    let popup = `<h3>${etappe.titel} (Etappe ${etappe.nr})</h3>
            <ul>
                <li> geogr. Breite: ${etappe.lng} </li>
                <li> geogr. Länge: ${etappe.lat} </li>
                <li><a href="${etappe.wikipedia}">Link zur Wikipediaseite</a></li>
                <li><a href="https://${etappe.github}.github.io/nz">Link zur Etappenseite</a></li>

            </ul>
        `;
    L.marker([etappe.lat, etappe.lng]).addTo(map)
        .bindPopup(popup);

    //Etappennavigation erweitern
    //"#navigation" --> id navigation wird angesprochen
    //Verbindung zwischen Script und html code --> query Selector
    let link = `<a href="https://${etappe.github}.github.io/nz" class="etappenLink" title="${etappe.titel}">${etappe.nr}</a>`;
    document.querySelector("#navigation").innerHTML += link;


}


//DOC Hütten anzeigen 
for (let hut of HUTS) {
    //console.log(etappe)
    let popup = `
                <h3>${hut.name}</h3>
                <h4>${hut.region}</h4>
                <hr>
                <p>${hut.info}</p>
                <img src="${hut.image}" alt="Vorschaubild">
                <hr>
                <a href="${hut.link}" target="Neuseeland" >Link zur Hütte</a>
        `;
    L.circleMarker([hut.lat, hut.lng]).addTo(map)
        .bindPopup(popup);
}

//Massstab
L.control.scale({
    imperial: false,
}).addTo(map);

L.control.fullscreen().addTo(map);

//Fullscree

layerControl.expand();