document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('show');
  });

  // Optional: Close menu on link click (mobile UX)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function () {
      navLinks.classList.remove('show');
    });
  });
});
