var nav = document.getElementById("nav-toggle");

console.log(nav);

nav.addEventListener('click', function(e) {
    console.log("Button pressed");
    drawer.classList.toggle('open');
    e.stopPropagation();
  });