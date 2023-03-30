let nome = document.getElementById('fname')
let fsex = document.getElementsByName('fsex')
let fsal = document.getElementById('fsal')
let res = document.getElementById('res')
let FLista = document.getElementById('FLista')
let names = []
let sexs = []
let salarios = []

function isEmpty(n, sl){
    if(n == 0 || sl == 0){
        return true
    } else {
        return false
    }
}

function vetEmpty(n, sl){
    if(n == 0 || sl == 0){
        return true
    } else{
        return false
    }
}

function adicionar(){
    if(isEmpty(nome.value.length, fsal.value.length)){
        alert('[ERROR] Por favor, digite os valores.')
    } else{
        if(fsex[0].checked){
            sexs.push('M')
        } else if(fsex[1].checked){
            sexs.push('F')
        }
        names.push(nome.value)
        salarios.push(Number(fsal.value))
    }
    nome.value = ''
    nome.focus()
    fsal.value = ''
    res.innerHTML = ''
}

function analisar(){
    if(vetEmpty(names, salarios)){
        alert('[ERROR] Por favor, digite os valores antes de finalizar.')
    } else{
        res.innerHTML = `<p>Os nomes registrados foram ${names}.</p>`
        res.innerHTML += `<p>Os sexos cadastrados foram, respectivamente, ${sexs}.</p>`
        res.innerHTML += `<p>Os salários informados, respectivamente, foram ${salarios}.</p>`
        for(let pos in sexs){
            if(sexs[pos] == 'F' && salarios[pos] > 5000){
                let item = document.createElement('option')
                item.innerHTML = `${names[pos]}, ${salarios[pos]}`
                FLista.appendChild(item)
            }
        }
    }
}