function setup() {
    createCanvas(430, 905);
  }
    function draw() {
    background(220);
    }
      
  function toggleMenu() {
    var menu = document.getElementById("myMenu");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }
  
  var linkClicavel = document.getElementById('Inicio');
  
  linkClicavel.addEventListener('click', function(event) {
    event.preventDefault();
    alert('Você clicou no elemento Inicio!');
  });
  
  var linkClicavel = document.getElementById('Sobre');
  
  linkClicavel.addEventListener('click', function(event) {
    event.preventDefault();
    alert('Você clicou no elemento Sobre!');
  });
  
  var linkClicavel = document.getElementById('Serviços');
  
  linkClicavel.addEventListener('click', function(event) {
    event.preventDefault();
  alert("Você clicou no elemento Serviços!");
  });
  
  var linkClicavel = document.getElementById('Contato');
  
  linkClicavel.addEventListener('click', function(event) {
    event.preventDefault();
    alert('Você clicou no elemento Contato!');
  });
  
  var linkClicavel = document.getElementById('Cadastro');
  
  
  linkClicavel.addEventListener('click', function(event) {
    event.preventDefault();
    alert("Você clicou no elemento Cadastro!")
  });