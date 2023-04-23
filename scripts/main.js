// Раскрытие выпадающего меню навигации
function dropMenu() {
  document.getElementById("dropMenu").classList.toggle("show");
}
// Закрытие при клике в другом месте окна
window.onclick = function (event) {
  if (!event.target.matches('.drop-btn')) {
    var dropdowns = document.getElementsByClassName("dropmenu-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('h2-show');
      change.target.classList.add('l-head-show');
      change.target.classList.add('r-head-show');
      change.target.classList.add('about-show');
      change.target.classList.add('portfolio-show');
    }
  });
}

let options = {
  threshold: [0.5]
};

let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.about-me>h2');
let elementsLeft = document.querySelectorAll('.l-head');
let elementsRight = document.querySelectorAll('.r-head');
let elementAbout = document.querySelectorAll('.section-about');
let elementPortfolio = document.querySelectorAll('.section-portfolio');

for (let elm of elements) {
  observer.observe(elm);
}

for (let elm of elementsLeft) {
  observer.observe(elm);
}

for (let elm of elementsRight) {
  observer.observe(elm);
}

for (let elm of elementAbout) {
  observer.observe(elm);
}

for (let elm of elementPortfolio) {
  observer.observe(elm);
}