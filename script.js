document.addEventListener('DOMContentLoaded', () => {
  const animated = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  animated.forEach((element) => observer.observe(element));

  const ctaButton = document.querySelector('[data-launch-button]');
  if (ctaButton) {
    ctaButton.addEventListener('click', () => {
      alert('Thanks for your interest in EcoPlay! Launch event details will be shared soon.');
    });
  }
});
