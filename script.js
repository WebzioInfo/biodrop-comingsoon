document.addEventListener('DOMContentLoaded', () => {

  // ── Floating Bubbles ──────────────────────────────────────────
  const bubbleContainer = document.getElementById('bubbles-container');

  function createBubble() {
    const bubble = document.createElement('div');
    const size     = Math.random() * 50 + 14;
    const left     = Math.random() * 100;
    const duration = Math.random() * 12 + 10;
    const delay    = Math.random() * 6;

    bubble.className = 'bubble';
    bubble.style.width  = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left   = `${left}%`;
    bubble.style.setProperty('--dur', `${duration}s`);
    bubble.style.setProperty('--del', `${delay}s`);

    bubbleContainer.appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
      createBubble();
    }, (duration + delay) * 1000);
  }

  for (let i = 0; i < 18; i++) {
    setTimeout(createBubble, Math.random() * 4000);
  }

  // ── Logo Parallax on Mouse Move ───────────────────────────────
  const logo = document.getElementById('brand-logo');
  const glow = document.querySelector('.logo-glow');

  document.addEventListener('mousemove', (e) => {
    if (!logo || !glow) return;
    const mx = (e.clientX - window.innerWidth  / 2) * 0.008;
    const my = (e.clientY - window.innerHeight / 2) * 0.008;
    logo.style.transform = `translateY(0) translate(${mx}px, ${my}px)`;
    glow.style.transform = `translate(calc(-50% + ${mx * 2}px), calc(-50% + ${my * 2}px))`;
  });

  // ── Email Subscription Form ───────────────────────────────────
  const form        = document.getElementById('notify-form');
  const emailInput  = document.getElementById('user-email');
  const formMessage = document.getElementById('form-message');
  const notifyBtn   = document.getElementById('notify-btn');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    if (!email) return;

    const btnText = notifyBtn.querySelector('.btn-text');
    notifyBtn.disabled = true;
    btnText.textContent = 'Processing…';

    setTimeout(() => {
      formMessage.textContent  = '🎉 You\'re on the list! We\'ll notify you at launch.';
      formMessage.style.color  = 'var(--teal-dark)';
      emailInput.value         = '';
      notifyBtn.disabled       = false;
      btnText.textContent      = 'Notify Me';

      setTimeout(() => { formMessage.textContent = ''; }, 6000);
    }, 1200);
  });

});
