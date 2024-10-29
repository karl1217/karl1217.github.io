const themeMode = document.getElementById('theme-toggle-button');

themeMode.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
});