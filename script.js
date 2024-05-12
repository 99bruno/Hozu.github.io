const presentationBtn = document.getElementById('presentationBtn');
const codeBtn = document.getElementById('codeBtn');
const content = document.getElementById('content');
const backBtn = document.getElementById('backBtn');

presentationBtn.addEventListener('click', function() {
    content.innerHTML = '<iframe src="Presentation_1.html" class="fullscreen" frameborder="0"></iframe>';
});

codeBtn.addEventListener('click', function() {
    content.innerHTML = '<pre><code>// Ваш код тут</code></pre>';
});



if (window.innerWidth <= 768) { // Якщо ширина екрану менше або рівна 768px (тобто, мобільний пристрій)
    backBtn.style.display = 'block';
}
