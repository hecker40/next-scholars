const menuBtn   = document.getElementById('mobile-menu-btn');
const menuClose = document.getElementById('mobile-menu-close');
const mobileMenu = document.getElementById('mobile-menu');

function openMenu() {
  mobileMenu.style.transform = 'translateX(0)';
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  mobileMenu.style.transform = 'translateX(100%)';
  document.body.style.overflow = '';
}

menuBtn.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);

// Close when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});
