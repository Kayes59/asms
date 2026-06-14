  // Scroll top button
  window.addEventListener('scroll', () => {
    const btn = document.getElementById('scrollTop');
    if (window.scrollY > 400) btn.classList.add('visible');
    else btn.classList.remove('visible');
  });

//   // Nav active state on scroll
//   const sections = document.querySelectorAll('section[id], div[id]');
//   const navLinks = document.querySelectorAll('.nav-item > a');
//   window.addEventListener('scroll', () => {
//     let current = '';
//     sections.forEach(s => {
//       if (window.scrollY >= s.offsetTop - 200) current = s.id;
//     });
//     navLinks.forEach(a => {
//       a.classList.remove('active');
//       if (a.getAttribute('href') === '#' + current) a.classList.add('active');
//     });
//   });

//   // Mobile nav toggle
//   function toggleNav() {
//     const nav = document.getElementById('navLinks');
//     nav.classList.toggle('open');
//   }
// function toggleMenu(){
//   document.getElementById("navLinks").classList.toggle("active");
  
// }
// ===== MOBILE MENU =====
function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("active");
}


// ===== SCROLL ACTIVE MENU =====
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('.nav-inner a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(sec => {
    const sectionTop = sec.offsetTop - 200;
    if (scrollY >= sectionTop) {
      current = sec.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');

    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('navLinks').classList.remove('open');
      }
    });
  });

loadMembers();