// ── i18n 초기화 ──
const { applyLang, detectLang, t } = window.EMC_I18N;
applyLang(detectLang());

// ── 언어 버튼 ──
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

// ── Nav scroll ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40));

// ── Hamburger ──
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// ── Particles ──
const container = document.getElementById('particles');
for (let i = 0; i < 30; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  const s = Math.random() * 4 + 2;
  p.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;width:${s}px;height:${s}px;--dur:${Math.random()*6+6}s;--delay:${Math.random()*8}s;`;
  container.appendChild(p);
}

// ── Scroll reveal ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) { setTimeout(() => entry.target.classList.add('visible'), i * 80); observer.unobserve(entry.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

// ── Contact form ──
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  const lang = localStorage.getItem('emc_lang') || 'ko';
  btn.textContent = t('form_done', lang);
  btn.style.background = '#00b87a';
  setTimeout(() => { btn.textContent = t('form_submit', lang); btn.style.background = ''; e.target.reset(); }, 3000);
});

// ── Active nav ──
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) cur = s.id; });
  navAnchors.forEach(a => { a.style.color = a.getAttribute('href') === `#${cur}` ? 'var(--green)' : ''; });
});
