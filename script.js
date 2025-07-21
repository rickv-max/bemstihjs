function toggleMenu() {
  const nav = document.querySelector('.navbar nav');
  nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
}

// Smooth scroll untuk internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
