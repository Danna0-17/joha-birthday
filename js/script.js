// Genera unos corazones flotantes suaves en el fondo.
// Puramente decorativo — no afecta el contenido ni la navegación.
(function () {
  const layer = document.querySelector('.hearts');
  if (!layer) return;

  const count = window.innerWidth < 620 ? 8 : 14;

  for (let i = 0; i < count; i++) {
    const heart = document.createElement('span');
    heart.className = 'heart';
    heart.textContent = '♥';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.setProperty('--drift', (Math.random() * 60 - 30) + 'px');
    heart.style.animationDelay = (Math.random() * 14) + 's';
    heart.style.animationDuration = (10 + Math.random() * 8) + 's';
    heart.style.fontSize = (1 + Math.random() * 1.2) + 'rem';
    layer.appendChild(heart);
  }
})();

// Lightbox para los puntos del mapa en "Pequeños recuerdos".
// Solo se activa si la página tiene pines (.map-pin) y el lightbox en el HTML.
(function () {
  const pins = document.querySelectorAll('.map-pin');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');
  if (!pins.length || !lightbox || !lightboxImg) return;

  function open(src, label) {
    lightboxImg.src = src;
    lightboxImg.alt = label || 'Recuerdo';
    lightbox.hidden = false;
  }
  function close() {
    lightbox.hidden = true;
    lightboxImg.src = '';
  }

  pins.forEach((pin) => {
    pin.addEventListener('click', () => open(pin.dataset.img, pin.getAttribute('aria-label')));
  });
  if (closeBtn) closeBtn.addEventListener('click', close);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
})();
