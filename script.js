const heartContainer = document.querySelector('.hearts');
const card = document.querySelector('.card');

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerHTML = '💖';
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.top = '110vh';
  heart.style.fontSize = `${16 + Math.random() * 20}px`;
  heart.style.animationDuration = `${6 + Math.random() * 4}s`;
  heart.style.animationDelay = `${Math.random() * 2}s`;
  heartContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}

function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.innerHTML = '✦';
  sparkle.style.left = `${Math.random() * 100}vw`;
  sparkle.style.top = '110vh';
  sparkle.style.fontSize = `${10 + Math.random() * 12}px`;
  sparkle.style.animationDuration = `${4 + Math.random() * 3}s`;
  sparkle.style.animationDelay = `${Math.random() * 2}s`;
  heartContainer.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 8000);
}

setInterval(createHeart, 500);
setInterval(createSparkle, 300);

setTimeout(() => card.classList.add('is-visible'), 250);

window.addEventListener('pointermove', (event) => {
  const x = event.clientX / window.innerWidth;
  const y = event.clientY / window.innerHeight;
  card.style.transform = `translateY(${(y - 0.5) * 4}px) rotateX(${(y - 0.5) * 2}deg) rotateY(${(x - 0.5) * 2}deg)`;
});

window.addEventListener('pointerleave', () => {
  card.style.transform = '';
});
