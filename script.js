// Auto year in footer
const y = document.getElementById('y');
if (y) y.textContent = new Date().getFullYear();
// Lightbox for gallery
function openLightbox(img) {
  const box = document.getElementById('lightbox');
  const full = document.getElementById('lightbox-img');
  full.src = img.src;
  box.classList.add('active');
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}
