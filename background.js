
//'http://localhost/webart/pessoal/extensao-api/api-extensao/'
var url = 'https://nuvem-azul.com/api-extensao' 

// Adiciona eventos para as abas superiores
document.getElementById('btnPessoa').addEventListener('click', abrirPessoa)
document.getElementById('btnProduto').addEventListener('click', abrirProduto)
document.getElementById('btnGit').addEventListener('click', abrirGit)

// Adiciono o evento pra gerar novos dados
document.getElementById('btnGerarPessoa').addEventListener('click', getPessoa)
document.getElementById('btnGerarProduto').addEventListener('click', getProduto)

function abrirPessoa(){

    // mudar cor btn selecionado
    document.getElementById('btnPessoa').style.backgroundColor  = 'coral'
    document.getElementById('btnGit').style.backgroundColor = ''
    document.getElementById('btnProduto').style.backgroundColor = ''

    // mostrar/ocultar conteudo selecionado
    document.getElementById('dvProduto').style.display = 'none'
    document.getElementById('dvGit').style.display  = 'none'
    document.getElementById('dvPessoa').style.display  = ''

    getPessoa()
}

function abrirProduto(){

    // mudar cor btn selecionado
    document.getElementById('btnProduto').style.backgroundColor = 'coral'
    document.getElementById('btnGit').style.backgroundColor = ''
    document.getElementById('btnPessoa').style.backgroundColor  = ''

    // mostrar/ocultar conteudo selecionado
    document.getElementById('dvPessoa').style.display  = 'none'
    document.getElementById('dvGit').style.display  = 'none'
    document.getElementById('dvProduto').style.display = ''

    getProduto()
}

function abrirGit(){
    // mudar cor btn selecionado
    document.getElementById('btnPessoa').style.backgroundColor  = ''
    document.getElementById('btnProduto').style.backgroundColor = ''
    document.getElementById('btnGit').style.backgroundColor = 'coral'

    // mostrar/ocultar conteudo selecionado
    document.getElementById('dvProduto').style.display = 'none'
    document.getElementById('dvPessoa').style.display  = 'none'
    document.getElementById('dvGit').style.display  = ''
}

function getPessoa(){

    var get = new XMLHttpRequest()
    get.open('GET', url+'?gerar-pessoa', true)
    get.send()

    get.onreadystatechange = function(){
    
        if (get.readyState == 4 && get.status == 200) {
            var retorno = get.responseText
            var retornoJson = JSON.parse(retorno)[0]

            // se tiver marcado pra ter mascara
            if(document.getElementById('chkMascara').checked == true){
                
                retornoJson.cpf = retornoJson.cpf.substr(0, 3)+'.'+retornoJson.cpf.substr(3, 3)+'.'+retornoJson.cpf.substr(6, 3)+'-'+retornoJson.cpf.substr(9, 3)
                retornoJson.rg = retornoJson.rg.substr(0, 2)+'.'+retornoJson.rg.substr(2, 3)+'.'+retornoJson.rg.substr(5, 3)+'-'+retornoJson.rg.substr(8, 3)
                retornoJson.data_nascimento = retornoJson.data_nascimento.substr(8, 2)+'/'+retornoJson.data_nascimento.substr(5, 2)+'/'+retornoJson.data_nascimento.substr(0, 4)
            }

            document.getElementById('txtNome').value = retornoJson.nome
            document.getElementById('txtCpf').value  = retornoJson.cpf
            document.getElementById('txtRg').value   = retornoJson.rg
            document.getElementById('txtDataNascimento').value = retornoJson.data_nascimento
        }
    }
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