
// Adiciona eventos
document.getElementById('btnPessoa').addEventListener("click", abrirPessoa)
document.getElementById('btnProduto').addEventListener("click", abrirProduto)

function abrirPessoa(){

    // mudar cor btn selecionado
    document.getElementById('btnPessoa').style.backgroundColor  = 'coral'
    document.getElementById('btnProduto').style.backgroundColor = ''

    // mostrar/ocultar conteudo selecionado
    document.getElementById('dvProduto').style.display = 'none'
    document.getElementById('dvPessoa').style.display  = ''

    document.getElementById('txtNome')
    document.getElementById('txtCpf')
    document.getElementById('txtRg')
    document.getElementById('txtDataNascimento')
}

function abrirProduto(){

    // mudar cor btn selecionado
    document.getElementById('btnProduto').style.backgroundColor = 'coral'
    document.getElementById('btnPessoa').style.backgroundColor  = ''

    // mostrar/ocultar conteudo selecionado
    document.getElementById('dvPessoa').style.display  = 'none'
    document.getElementById('dvProduto').style.display = ''
}