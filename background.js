
//var url = 'http://localhost/webart/pessoal/extensao-api/api-extensao/'
var url = 'https://nuvem-azul.com/api-extensao' 

// Adiciona eventos para as abas superiores
document.getElementById('btnPessoa').addEventListener('click', abrirPessoa)
document.getElementById('btnProduto').addEventListener('click', abrirProduto)
document.getElementById('btnGit').addEventListener('click', abrirGit)
document.getElementById('btnEmpresa').addEventListener('click', abrirEmpresa)

// Adiciono o evento pra gerar novos dados
document.getElementById('btnGerarPessoa').addEventListener('click', getPessoa)
document.getElementById('btnGerarEmpresa').addEventListener('click', getEmpresa)
document.getElementById('btnGerarProduto').addEventListener('click', getProduto)
