
function abrirProduto(){

    // mudar cor btn selecionado
    document.getElementById('btnProduto').style.backgroundColor = 'coral'
    document.getElementById('btnGit').style.backgroundColor     = ''
    document.getElementById('btnPessoa').style.backgroundColor  = ''
    document.getElementById('btnEmpresa').style.backgroundColor = ''

    // mostrar/ocultar conteudo selecionado
    document.getElementById('dvPessoa').style.display  = 'none'
    document.getElementById('dvGit').style.display     = 'none'
    document.getElementById('dvEmpresa').style.display = 'none'
    document.getElementById('dvProduto').style.display = ''

    getProduto()
}

function getProduto(){

    var get = new XMLHttpRequest()
    
    get.open('GET', url+'?gerar-produto', true)
    get.send()

    get.onreadystatechange = function(){
    
        if (get.readyState == 4 && get.status == 200) {
            var retorno = get.responseText
            var retornoJson = JSON.parse(retorno)[0]

            document.getElementById('txtDescricao').value = retornoJson.descricao
            document.getElementById('txtPeso').value  = retornoJson.peso
            document.getElementById('txtSku').value   = retornoJson.sku
        }
    }
}