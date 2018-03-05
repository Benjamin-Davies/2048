function resizeGrid() {
  const width = Math.min(500, window.outerWidth - 100);

  document.body.style.setProperty('--grid-size', width + 'px');
}

export default function addEventListeners() {
  window.addEventListener('resize', resizeGrid);

  // Repeat because it doesn't seem to work first-time
  setTimeout(resizeGrid, 100);
  setTimeout(resizeGrid, 200);
  setTimeout(resizeGrid, 300);
}
