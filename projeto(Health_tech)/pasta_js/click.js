function trocaMenu() {
    var menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }
function verificaTela() {
  var menu = document.querySelector('.menu');
  if (window.innerWidth > 600 && menu.style.display === 'block') {
    menu.style.display = 'none';
  }
}

window.addEventListener('resize', verificaTela);

