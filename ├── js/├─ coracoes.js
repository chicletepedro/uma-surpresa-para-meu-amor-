function createHeartDown() {
  const heart = document.createElement('div');
  heart.textContent = '💖';
  heart.style.position = 'fixed';
  heart.style.top = '-50px'; // Começa fora do topo
  heart.style.left = Math.random() * 100 + 'vw'; // Horizontal aleatória
  heart.style.fontSize = (20 + Math.random() * 20) + 'px';
  heart.style.color = '#e91e63';
  heart.style.opacity = 0.8;
  heart.style.userSelect = 'none';
  heart.style.pointerEvents = 'none';
  heart.style.zIndex = 9999;

  const duration = 5000 + Math.random() * 5000; // entre 5s e 10s

  document.body.appendChild(heart);

  let start = null;
  function animate(timestamp) {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;
    const progress = elapsed / duration;
    const topPos = progress * (window.innerHeight + 100) - 50;
    heart.style.top = topPos + 'px';

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      heart.remove();
    }
  }

  requestAnimationFrame(animate);
}

// Cria um coração a cada 400ms
setInterval(createHeartDown, 400);
