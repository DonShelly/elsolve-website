(() => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  const top = document.querySelector('.top');
  if (top) {
    const onScroll = () => {
      top.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });

    document.querySelectorAll('[data-reveal], [data-reveal-stagger]').forEach((el) => {
      io.observe(el);
    });

    document.querySelectorAll('[data-reveal-stagger]').forEach((wrap) => {
      [...wrap.children].forEach((child, i) => {
        child.style.setProperty('--i', i);
      });
    });
  } else {
    document.querySelectorAll('[data-reveal], [data-reveal-stagger]').forEach((el) => {
      el.classList.add('is-in');
    });
  }
})();
