/* form.js — contact form handling */
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const btn   = form.querySelector('button[type="submit"]');
    const arrow = btn.querySelector('.btn__arrow');
    const orig  = btn.innerHTML;

    /* Loading state */
    btn.disabled  = true;
    btn.innerHTML = '<span style="display:inline-flex;gap:8px;align-items:center"><span class="spin" style="display:inline-block;width:14px;height:14px;border:2px solid rgba(255,255,255,0.3);border-top-color:#fff;border-radius:50%;animation:spin 0.6s linear infinite"></span> Sending…</span>';

    /* Add spin keyframes if not present */
    if (!document.getElementById('spinStyle')) {
      const s = document.createElement('style');
      s.id = 'spinStyle';
      s.textContent = '@keyframes spin{to{transform:rotate(360deg)}}';
      document.head.appendChild(s);
    }

    /* Simulate async send (replace with your real endpoint) */
    await new Promise(r => setTimeout(r, 1800));

    /* Success state */
    btn.innerHTML = '✓ Message Sent!';
    btn.style.background = '#22c55e';
    form.reset();

    setTimeout(() => {
      btn.innerHTML = orig;
      btn.style.background = '';
      btn.disabled = false;
    }, 3500);
  });
})();
