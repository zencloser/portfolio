
/* form.js — Netlify contact form handling */
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    const orig = btn.innerHTML;

    btn.disabled = true;
    btn.innerHTML = 'Sending…';

    try {
      const formData = new FormData(form);

      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData).toString()
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      btn.innerHTML = '✓ Message Sent!';
      btn.style.background = '#22c55e';

      form.reset();

      setTimeout(() => {
        btn.innerHTML = orig;
        btn.style.background = '';
        btn.disabled = false;
      }, 3500);

    } catch (error) {
      console.error('Form submission error:', error);

      btn.innerHTML = 'Try Again';
      btn.style.background = '#ef4444';
      btn.disabled = false;

      setTimeout(() => {
        btn.innerHTML = orig;
        btn.style.background = '';
      }, 3500);
    }
  });
})();