
function abrirGit(){
    // mudar cor btn selecionado
    document.getElementById('btnPessoa').style.backgroundColor  = ''
    document.getElementById('btnEmpresa').style.backgroundColor = ''
    document.getElementById('btnProduto').style.backgroundColor = ''
    document.getElementById('btnGit').style.backgroundColor     = 'coral'

    // mostrar/ocultar conteudo selecionado
    document.getElementById('dvProduto').style.display = 'none'
    document.getElementById('dvPessoa').style.display  = 'none'
    document.getElementById('dvEmpresa').style.display = 'none'
    document.getElementById('dvGit').style.display     = ''
}