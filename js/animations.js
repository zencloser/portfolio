/* animations.js — IntersectionObserver scroll reveals */
(function () {
  /* Add scroll-triggered classes to elements */
  const targets = [
    { selector: '.about__left',      cls: 'fade-left'  },
    { selector: '.about__right',     cls: 'fade-right' },
    { selector: '.project-card',     cls: 'fade-up'    },
    { selector: '.skill-card',       cls: 'fade-up'    },
    { selector: '.testimonial-card', cls: 'fade-up'    },
    { selector: '.contact__left',    cls: 'fade-left'  },
    { selector: '.contact__right',   cls: 'fade-right' },
    { selector: '.section-header',   cls: 'fade-up'    },
    { selector: '.section-label:not(.section-header .section-label)', cls: 'fade-up' },
  ];

  targets.forEach(({ selector, cls }) => {
    document.querySelectorAll(selector).forEach(el => {
      el.classList.add(cls);
    });
  });

  /* Add stagger to grids */
  document.querySelectorAll('.skills__grid, .work__grid, .testimonials__grid').forEach(grid => {
    grid.classList.add('stagger-children');
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach(el => {
    observer.observe(el);
  });

  /* Button ripple effect */
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height);
      ripple.classList.add('ripple');
      ripple.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${e.clientX - rect.left - size / 2}px;
        top:  ${e.clientY - rect.top  - size / 2}px;
      `;
      btn.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });

  /* Page loader */
  const loader = document.querySelector('.page-loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('hidden'), 1500);
    });
  }
})();
