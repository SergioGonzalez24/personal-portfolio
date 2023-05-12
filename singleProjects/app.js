// Remove loader after page has loaded
window.addEventListener('load', function () {
    const loader = document.getElementById('loader');
    loader.classList.add('fadeOut');
  });