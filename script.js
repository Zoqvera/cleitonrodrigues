document.getElementById('year').textContent = new Date().getFullYear();

const footer = document.querySelector('footer');
if (footer) {
  const credit = document.createElement('span');
  credit.append('Desenvolvido por ');

  const link = document.createElement('a');
  link.href = 'https://zoqvera.com';
  link.textContent = 'Zoqvera';
  link.style.fontWeight = '600';
  link.style.textUnderlineOffset = '3px';
  link.setAttribute('aria-label', 'Acessar o site da Zoqvera');

  credit.append(link, '.');
  footer.appendChild(credit);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.reveal').forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index % 3, 2) * 70}ms`;
  observer.observe(el);
});
