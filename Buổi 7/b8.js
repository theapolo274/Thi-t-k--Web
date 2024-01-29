function myD() {
    document.getElementById("menu").style.width = "250px";
  }
  
  function myX() {
    document.getElementById("menu").style.width = "0";
  }
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 100) { 
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
    