
// Adiciona eventos
// this.document.getElementById('btnSalvar').addEventListener("click", salvar)

var divPrincipal = document.getElementById('divPrincipal')

// Cria elementos
var div = document.createElement('div')
var h3  = document.createElement('h3')
var h5  = document.createElement('h5')

h3.textContent = 'aqui h3'
h5.textContent = 'aqui h5 teste'

// ADICIONA ELEMENTOS NA divPrincipal
div.appendChild(h3)
div.appendChild(h5)
divPrincipal.appendChild(div)