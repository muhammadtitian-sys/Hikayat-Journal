/*
  parallax.js — Hikayat Journal Archive
  Cara pakai: tambah di index.html sebelum </body>:
  <script src="parallax.js"></script>
*/

(function () {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  let ticking = false;

  function updateParallax() {
    const scrollY = window.scrollY;
    const heroH   = hero.offsetHeight;

    // Hanya aktif saat hero masih visible
    if (scrollY < heroH) {
      // Background gerak setengah kecepatan scroll — efek depth
      const offset = scrollY * 0.38;
      hero.style.setProperty('--parallax-y', offset + 'px');
    }

    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });

  // Set CSS custom property untuk parallax
  // Di theme-light.css, .hero::before pakai: transform: translateY(var(--parallax-y, 0))
  updateParallax();
})();
