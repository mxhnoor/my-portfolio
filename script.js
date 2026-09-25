// Tab switching
// Grab every button with class "tab" and every section with class "panel"
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    // Turn "active" off for every tab and every panel...
    tabs.forEach((t) => t.classList.remove('active'));
    panels.forEach((p) => p.classList.remove('active'));

    // ...then turn it back on just for the one that was clicked.
    tab.classList.add('active');
    document.getElementById('panel-' + tab.dataset.tab).classList.add('active');
  });
});

// Home page slider
const slideEls = document.querySelectorAll('.slide');
const dotsWrap = document.getElementById('dots');
let current = 0; // index of the slide currently showing

slideEls.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.addEventListener('click', () => goTo(i));
  dotsWrap.appendChild(dot);
});
const dotEls = document.querySelectorAll('.dot');

function goTo(i) {
  slideEls[current].classList.remove('active');
  dotEls[current].classList.remove('active');

  current = (i + slideEls.length) % slideEls.length;

  slideEls[current].classList.add('active');
  dotEls[current].classList.add('active');
}

document.getElementById('prevBtn').addEventListener('click', () => goTo(current - 1));
document.getElementById('nextBtn').addEventListener('click', () => goTo(current + 1));