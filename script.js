document.addEventListener('DOMContentLoaded', () => {
const sections = ['mission', 'programs', 'community', 'enroll'];
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


(function () {
  const track   = document.getElementById('carousel-track');
  const dotsEl  = document.getElementById('carousel-dots');
  const counter = document.getElementById('carousel-counter');
  const caption = document.getElementById('carousel-caption');

  const captions = [
    "Library Robotics Workshop · 2026",
    "Students programming their robots",
    "Kids learning about robotics basics",
    "Presenting autonomous mode",
  ];

  const total = document.querySelectorAll('.carousel-slide').length;
  let current = 0;
  let autoTimer;

  // Build dots
  for (let i = 0; i < total; i++) {
    const d = document.createElement('div');
    d.style.cssText = `width:7px;height:7px;border-radius:50%;cursor:pointer;
      transition:background 0.3s,transform 0.3s;`;
    d.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(d);
  }

  function updateDots() {
    [...dotsEl.children].forEach((d, i) => {
      d.style.background  = i === current ? '#a78bfa' : 'rgba(255,255,255,0.25)';
      d.style.transform   = i === current ? 'scale(1.3)' : 'scale(1)';
    });
  }

  function goTo(idx) {
    current = (idx + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    counter.textContent   = `${current + 1} / ${total}`;
    caption.textContent   = captions[current] || '';
    updateDots();
    resetAuto();
  }

  function resetAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), 4500);
  }

  window.moveCarousel = (dir) => goTo(current + dir);

  goTo(0);
})();
