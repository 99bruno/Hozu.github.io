
// Необов'язковий JavaScript
document.querySelectorAll('.team-member').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('.member-info').style.transform = 'translateY(0)';
        item.querySelector('img').style.transform = 'translateY(-20%)';
    });

    item.addEventListener('mouseleave', () => {
        item.querySelector('.member-info').style.transform = 'translateY(100%)';
        item.querySelector('img').style.transform = 'translateY(0)';
    });
});


// Ініціалізація слайдера
const priceSlider = document.getElementById('price-slider');
const priceFrom = document.getElementById('price-from');
const priceTo = document.getElementById('price-to');

noUiSlider.create(priceSlider, {
    start: [0, 1000], // Початкове значення слайдера
    connect: true, // З'єднувати позначки на слайдері
    range: { // Діапазон значень слайдера
        'min': 0,
        'max': 1000
    },
    // Встановлення параметрів вигляду слайдера
    pips: {
        mode: 'values',
        values: [0, 1000],
        density: 4
    }
});

// Отримання значень "від" і "до" при зміні слайдера
priceSlider.noUiSlider.on('update', function (values) {
    const from = parseInt(values[0]);
    const to = parseInt(values[1]);

    // Оновлення значень "від" і "до" на сторінці
    priceFrom.textContent = from;
    priceTo.textContent = to;
});



