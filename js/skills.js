/* skills.js — animate skill bars on scroll */
(function () {
  const bars = document.querySelectorAll('.skill-card__bar[data-level]');
  if (!bars.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const bar   = entry.target;
        const level = bar.dataset.level + '%';
        /* slight delay so card entrance animation is visible first */
        setTimeout(() => { bar.style.width = level; }, 300);
        observer.unobserve(bar);
      });
    },
    { threshold: 0.3 }
  );

  bars.forEach(b => observer.observe(b));
})();
