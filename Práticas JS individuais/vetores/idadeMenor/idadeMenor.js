let nomeF = document.getElementById('fname')
let idadeF = document.getElementById('fidade')
let menorId = document.getElementById('menorList')
let res = document.getElementById('res')
let nomes = []
let idades = []

function isName(n){
    if(n == 0){
        return true
    } else {
        return false
    }
}

function isOld(l, i){
    if(l == 0 || i == 0){
        return true
    } else{
        return false
    }
}

function adicionar(){
    if(isName(nomeF.value.length)){
        alert('[ERROR] Por favor, digite o nome.')
    } else if(isOld(idadeF.value.length, Number(idadeF.value))){
        alert('[ERROR] Por favor, digite uma idade entre 1 e 100.')
    } else{
        nomes.push(nomeF.value)
        idades.push(Number(idadeF.value))
    }
    nomeF.value = ''
    nomeF.focus()
    idadeF.value = ''
    res.innerHTML = ''
}


function Analisar(){
    if(nomes.length == 0 || idades.length == 0){
        alert('[ERROR] Por favor, informe os nomes e idades antes de finalizar.')
    } else{
        res.innerHTML = `<p>Os nomes cadastrados foram: ${nomes}.</p>`
        res.innerHTML += `<p>As idades cadastradas de cada um respectivamente são: ${idades}.</p>`
    }
    for(let pos = 0; pos < idades.length; pos++){
        if(idades[pos] < 18){
            let item = document.createElement('option')
            item.innerHTML = `${nomes[pos]}, ${idades[pos]}.`
            menorId.appendChild(item)
        }
    }
}