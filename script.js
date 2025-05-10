const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const stars = document.getElementById('stars');
const shootingStar = document.querySelector('.shooting-star');
const music = document.getElementById('bgMusic');

// Generate stars dynamically
for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.animationDelay = `${Math.random() * 5}s`;
  stars.appendChild(star);
}

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const scene = document.querySelector('.scene');

  if (scrollY > 100) {
    // Night mode
    scene.style.background = 'linear-gradient(to top, #0f2027, #203a43, #2c5364)';
    sun.style.top = '100%';
    sun.style.opacity = 0;
    moon.style.top = '20%';
    moon.style.opacity = 1;

    document.querySelectorAll('.star').forEach(star => star.style.opacity = 1);
    shootingStar.style.display = 'block'; // Show shooting star in night mode
  } else {
    // Day mode
    scene.style.background = 'linear-gradient(to top, #f3c07b, #fceabb)';
    sun.style.top = '20%';
    sun.style.opacity = 1;
    moon.style.top = '100%';
    moon.style.opacity = 0;

    document.querySelectorAll('.star').forEach(star => star.style.opacity = 0);
    shootingStar.style.display = 'none'; // Hide shooting star in day mode
  }
});

function scrollDown() {
  window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
}

function toggleMusic() {
  if (music.paused) music.play();
  else music.pause();
}
