let btnAdd = document.querySelector('button')
let table = document.querySelector('table')

let vinculoSelect = document.querySelector('#vinculo')
let tiutloInput = document.querySelector('#titulo')
let autorInput = document.querySelector('#autor')
let edicaoInput = document.querySelector('#edicao')
let isnnInput = document.querySelector('#issn')
let anoInput = document.querySelector('#ano')
let editoraInput = document.querySelector('#editora')

btnAdd.addEventListener('click', () => {
  event.preventDefault()

  let vinculo = vinculoSelect.value
  let titulo = tiutloInput.value
  let autor = autorInput.value
  let edicao = edicaoInput.value
  let issn = isnnInput.value
  let ano = anoInput.value
  let editora = editoraInput.value

  let template = `
          <tr>
            <td>${vinculo}</td>
            <td>${titulo}</td>
            <td>${autor}</td>
            <td>${edicao}</td>
            <td>${issn}</td>
            <td>${ano}</td>
            <td>${editora}</td>
          </tr>
                `

  table.innerHTML += template
})

var pacientes = document.querySelectorAll("table");
    pacientes.forEach(function(paciente) {
        paciente.addEventListener("dblclick", function() {
            this.remove();
        });
    });

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      display.textContent = minutes + ":" + seconds;
      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}
window.onload = function () {
  var duration = 60 * 60; // Converter para segundos
      display = document.querySelector('#timer'); // selecionando o timer
  startTimer(duration, display); // iniciando o timer
};

