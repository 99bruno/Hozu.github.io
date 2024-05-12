const presentationBtn = document.getElementById('presentationBtn');
const codeBtn = document.getElementById('codeBtn');
const content = document.getElementById('content');

presentationBtn.addEventListener('click', function() {
    content.innerHTML = '<iframe src="Presentation_1.html" class="fullscreen" frameborder="0"></iframe>';
});

codeBtn.addEventListener('click', function() {
    content.innerHTML = '<pre><code>// Ваш код тут</code></pre>';
});
