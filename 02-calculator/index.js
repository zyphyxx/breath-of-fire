
// visor
let visor = document.getElementById('visor');
let nums = [];
let btn = document.querySelectorAll('.buttonsCal');

btn.forEach( buttons => {
  buttons.addEventListener('click', function () {
    let valor = buttons.getAttribute('data-value');
    visor.innerHTML += `${valor}`;

  })
});


