
function abrirEmpresa(){

    // mudar cor btn selecionado
    document.getElementById('btnPessoa').style.backgroundColor  = ''
    document.getElementById('btnGit').style.backgroundColor     = ''
    document.getElementById('btnProduto').style.backgroundColor = ''
    document.getElementById('btnEmpresa').style.backgroundColor = 'coral'

    // mostrar/ocultar conteudo selecionado
    document.getElementById('dvProduto').style.display = 'none'
    document.getElementById('dvGit').style.display     = 'none'
    document.getElementById('dvPessoa').style.display  = 'none'
    document.getElementById('dvEmpresa').style.display = ''

    getEmpresa()
}

function getEmpresa(){
    var get = new XMLHttpRequest()
    get.open('GET', url+'?gerar-empresa', true)
    get.send()

    get.onreadystatechange = function(){
    
        if (get.readyState == 4 && get.status == 200) {
            var retorno = get.responseText
            var retornoJson = JSON.parse(retorno)[0]

            // se tiver marcado pra ter mascara
            if(document.getElementById('chkMascara').checked == true){
                // 16300-000
                retornoJson.cnpj     = retornoJson.cnpj.substr(0, 2)+'.'+retornoJson.cnpj.substr(2, 3)+'.'+retornoJson.cnpj.substr(5, 4)+'-'+retornoJson.cnpj.substr(12, 2)
                retornoJson.cep      = retornoJson.cep.substr(0, 4)+'-'+retornoJson.cep.substr(5, 3)
                retornoJson.telefone = '('+retornoJson.telefone.substr(0, 2)+')'+retornoJson.telefone.substr(2, 4)+'-'+retornoJson.telefone.substr(6, 4)
            }

            document.getElementById('txtNomeEmpresa').value = retornoJson.nome
            document.getElementById('txtCnpj').value  = retornoJson.cnpj
            document.getElementById('txtEndereco').value   = retornoJson.endereco
            document.getElementById('txtCep').value = retornoJson.cep
            document.getElementById('txtTelefone').value = retornoJson.telefone
        }
    }
}
