let numero = document.getElementById('fnum')
let res = document.getElementById('res')
let vet = []
let mult = []

function inList(n, l){
    if(l.indexOf(n) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(numero.value.length == 0){
        alert('[error] Por favor, digite os números.')
    } else if(!inList(Number(numero.value), vet)){
        vet.push(Number(numero.value))
    } else {
        alert('error, número já adicionado')
    }
    if(Number(numero.value) % 10 == 0){
        mult.push(Number(numero.value))
    }
    numero.value = ''
    numero.focus()
    res.innerText = ''
}

function finalizar(){
    if(vet.length == 0){
        alert('[ERROR] Por favor, digite os valores.')
    } else {
        res.innerHTML += `Os números digitados foram ${vet}`
        res.innerHTML += `<p>Os multiplos de 10 digitados foram ${mult}</p>`
    }
    
}