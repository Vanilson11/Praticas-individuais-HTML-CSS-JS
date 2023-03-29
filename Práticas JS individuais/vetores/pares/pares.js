let num = document.getElementById('fnum')
let res = document.getElementById('res')
let vet = []

function adicionar(){
    if(num.value.length == 0 && Number(num.value) == 0){
        alert('[ERROR] Por favor, digite um número.')
    } else{
        vet.push(Number(num.value))
    }
    num.value = ''
    num.focus()
    res.innerHTML = ''
}

function finalizar(){
    if(vet.length == 0){
        alert('[ERROR] Por favor, digite um número.')
    } else {
        res.innerHTML = `<p>Os números digitados foram ${vet}.</p>`
        for(let pos in vet){
            if(vet[pos] % 2 == 0){
                res.innerHTML += `<p>O número ${vet[pos]} é par e está no índice ${vet.indexOf(vet[pos])}</p>`
            }
        }
    }
}