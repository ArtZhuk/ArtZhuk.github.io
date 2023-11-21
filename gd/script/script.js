const burger = document.querySelector('.nav-burger');
const navMenu = document.querySelector('.nav-menu');
const nav = document.querySelector('.nav');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
nav.before(scrollWatcher);

const navOserver = new IntersectionObserver((entries)=> {
  nav.classList.toggle('sticky', !entries[0].isIntersecting);
});

navOserver.observe(scrollWatcher);

burger.addEventListener('click', (e)=> {
  console.log(e.target)
  if(e.currentTarget.getAttribute('aria-expanded') === 'false'){
    e.currentTarget.setAttribute('aria-expanded', 'true');
    navMenu.classList.add('expanded');
    document.body.style.overflow = 'hidden';
  } else {
    e.currentTarget.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('expanded');
    document.body.style.overflow = 'auto';
  }
});

window.addEventListener('resize', ()=> {
  navMenu.classList.add('no-animation');
  setTimeout(()=> navMenu.classList.remove('no-animation'), 500);
});