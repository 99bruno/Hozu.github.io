const presentationBtn = document.getElementById('presentationBtn');
const codeBtn = document.getElementById('codeBtn');
const content = document.getElementById('content');

presentationBtn.addEventListener('click', function() {
    // Замість "presentation.html" вставте шлях до вашої HTML-презентації
    content.innerHTML = '<iframe src="Presentation_1.html" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>';
});

codeBtn.addEventListener('click', function() {
    // Тут можна вставити ваш код або інший вміст
    content.innerHTML = '<pre><code>// Ваш код тут</code></pre>';
});
