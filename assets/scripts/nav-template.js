//Utiliza o código da navbar.html e insere em uma div para ser usado como template.
document.addEventListener('DOMContentLoaded', function() {
  fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar-container').innerHTML = data;
    });
});