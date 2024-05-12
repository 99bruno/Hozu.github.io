// Ініціалізація карти
/* global L */
var mymap = L.map('map').setView([51.505, -0.09], 13);


// Додавання шару карт OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(mymap);

// Додавання позначки
L.marker([51.5, -0.09]).addTo(mymap)
    .bindPopup('Місце розташування.')
    .openPopup();
