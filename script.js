// Ініціалізація карти
/* global L */

/* jshint esversion: 6 */
"use strict";

var mymap = L.map('map').setView([49.841909, 24.031569], 16, 'cartodbpositron');



// Додавання шару карт OpenStreetMap
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
     {
         maxZoom: 19,
     }).addTo(mymap);

// Додавання позначки
L.marker([49.841909, 24.031569]).addTo(mymap)
    .bindPopup('Місце розташування.')
    .openPopup();

// Завантаження даних з CSV файлу





// Завантаження даних з CSV файлу
fetch('Data/Restaurants.csv')
    .then(response => response.text())
    .then(data => {
        // Розділити рядки CSV файлу
        const rows = data.split('\n');

        // Пройтися по кожному рядку (крім заголовка)
        for (let i = 1; i < rows.length; i++) {
            const row = rows[i].split(','); // Розділити рядок на стовпці

            const name = row[0].trim(); // Отримати назву ресторану
            const address = row[1].trim(); // Отримати адресу ресторану
            const coordinates = JSON.parse(row[2].trim()); // Отримати координати та перетворити рядок у об'єкт

            // Створити маркер з координатами та додати на карту
            const marker = L.marker([coordinates.lat, coordinates.lng]).addTo(mymap);

            // Встановити вспливаюче вікно з назвою та адресою ресторану
            marker.bindPopup(`<b>${name}</b><br>${address}`);
        }
    })
    .catch(error => {
        console.error('Помилка завантаження даних:', error);
    });



