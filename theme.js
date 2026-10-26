// Apply the saved choice before styles render; otherwise follow the device theme.
(() => {
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = null;
  try { preference = localStorage.getItem('earth-group-theme'); } catch (_) { /* Storage may be disabled. */ }
  const apply = theme => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#191e1b' : '#f3f0e8');
    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(theme === 'dark'));
      toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      toggle.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    }
  };
  apply(preference === 'light' || preference === 'dark' ? preference : system.matches ? 'dark' : 'light');
  system.addEventListener('change', event => {
    if (preference !== 'light' && preference !== 'dark') apply(event.matches ? 'dark' : 'light');
  });
  document.addEventListener('DOMContentLoaded', () => {
    apply(document.documentElement.dataset.theme);
    document.querySelector('.theme-toggle')?.addEventListener('click', () => {
      preference = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      apply(preference);
      try { localStorage.setItem('earth-group-theme', preference); } catch (_) { /* The toggle still works for this page. */ }
    });
  });
})();
