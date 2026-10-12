(() => {
  try {
    const theme = localStorage.getItem('caltpa-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.dataset.theme = theme === 'dark' ? 'dark' : 'light';
    const size = Number(localStorage.getItem('caltpa-text-size'));
    if ([16,18,20,21,22,24].includes(size)) document.documentElement.style.setProperty('--text-size', size + 'px');
  } catch { /* Reading remains available without browser storage. */ }
})();
