(function () {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get('lang') === 'en' ? 'en' : 'no';
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-lang]').forEach((el) => {
    el.classList.toggle('active', el.getAttribute('data-lang') === lang);
  });

  document.querySelectorAll('[data-lang-switch]').forEach((el) => {
    const target = el.getAttribute('data-lang-switch');
    const url = new URL(window.location.href);
    url.searchParams.set('lang', target);
    el.href = url.pathname + url.search;
    el.classList.toggle('active', target === lang);
    if (target === lang) el.setAttribute('aria-current', 'true');
  });

  document.querySelectorAll('a[data-internal-link]').forEach((el) => {
    const href = el.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) return;
    const url = new URL(href, window.location.origin);
    url.searchParams.set('lang', lang);
    el.setAttribute('href', url.pathname + url.search);
  });

  const toggle = document.querySelector('[data-mobile-toggle]');
  const menu = document.querySelector('[data-mobile-menu]');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => menu.classList.remove('open'));
    });
  }
})();
