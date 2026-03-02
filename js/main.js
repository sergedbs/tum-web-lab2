// Mobile scroll progress bar
(function () {
  var bar = document.getElementById('scrollProgress');
  window.addEventListener('scroll', function () {
    var scrolled = window.scrollY;
    var total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = total > 0 ? (scrolled / total * 100) + '%' : '0%';
  }, { passive: true });
})();

// Show open/closed status + closing time in the mobile call bar
(function () {
  var now = new Date();
  var day = now.getDay(); // 0=Sun, 1=Mon ... 6=Sat
  var hour = now.getHours() + now.getMinutes() / 60;
  // Café: Mon-Thu 07-22, Fri-Sun 07-23
  var closeHour = (day >= 1 && day <= 4) ? 22 : 23;
  var open = hour >= 7 && hour < closeHour;
  var el = document.getElementById('callBarStatus');
  el.innerHTML = open
    ? '<i class="fa-solid fa-circle" style="color:#4ade80;font-size:0.6rem;vertical-align:middle"></i> Deschis · Închide la ' + closeHour + ':00'
    : '<i class="fa-solid fa-circle" style="color:#f87171;font-size:0.6rem;vertical-align:middle"></i> Închis acum';
  el.className = 'mobile-call-bar__status mobile-call-bar__status--' + (open ? 'open' : 'closed');
})();

// Scroll-spy: highlight active nav link based on visible section
(function () {
  var sections = document.querySelectorAll('section[id], footer[id]');
  var links = document.querySelectorAll('.nav-link[href^="#"]');
  if (!('IntersectionObserver' in window)) return;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var id = entry.target.getAttribute('id');
        links.forEach(function (link) {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(function (sec) { observer.observe(sec); });
})();

// Scroll-triggered entrance animations
(function () {
  var els = document.querySelectorAll('.animate-on-scroll');
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(function (el) { observer.observe(el); });
})();

// Back to top button
(function () {
  var btn = document.getElementById('backToTop');
  window.addEventListener('scroll', function () {
    btn.classList.toggle('is-visible', window.scrollY > 300);
  }, { passive: true });
  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
