document.addEventListener('DOMContentLoaded', () => {
const sections = ['mission', 'programs', 'leadership', 'enroll'];
const navLinks = document.querySelectorAll('nav a[href^="#"]');

function getActiveSection() {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  // If near top of page, nothing is active
  if (scrollY < 100) return null;

  let current = null;
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + scrollY;
    if (scrollY >= top - windowHeight / 2) {
      current = id;
    }
  });
  return current;
}

function updateNav() {
  const active = getActiveSection();
  navLinks.forEach(link => {
    const href = link.getAttribute('href').replace('#', '');
    if (href === active) {
      link.classList.add('text-white', 'font-semibold');
      link.classList.remove('text-gray-300');
    } else {
      link.classList.remove('text-white', 'font-semibold');
      link.classList.add('text-gray-300');
    }
  });
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav(); // run once on load
  });

const menuBtn    = document.getElementById('mobile-menu-btn');
const menuClose  = document.getElementById('mobile-menu-close');
const mobileMenu = document.getElementById('mobile-menu');

function openMenu()  {
  mobileMenu.style.transform = 'translateX(0)';
  document.body.style.overflow = 'hidden'; // prevent scroll behind menu
}
function closeMenu() {
  mobileMenu.style.transform = 'translateX(100%)';
  document.body.style.overflow = '';
}

menuBtn.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);

// Tap anywhere outside the menu panel to close
mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu) closeMenu();
});

// Close when any nav link is tapped
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});
