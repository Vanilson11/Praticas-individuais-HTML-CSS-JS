let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function inList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(num.value.length == 0 || Number(num.value) < 1 || Number(num.value) > 100){
        window.alert('[ERROR] Por favor, digite um número entre 1 e 100')
    } else if(!inList(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.innerText = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        window.alert('numero já presente na lista')
    }
    num.value = ''
    num.focus()
    res.innerHTML = ''
}

function analisar(){
    if(valores.length == 0){
        alert('[ERROR] Por favor, adicione valores à lista')
    } else {
        var total = valores.length
        var soma = 0
        var maior = 1
        var menor = 1
        var media = 0
        for(let pos in valores){
            soma += valores[pos]
            media = soma/valores.length
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        res.innerHTML = `<p>O total de números digitados foi de ${total}.</p>`
        res.innerHTML += `<p>A soma entre todos os número digitados é de ${soma}</p>`
        res.innerHTML += `<p>O maior valor digitado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor digitado foi ${menor}</p>`
        res.innerHTML += `<p>A média entre os números digitados é de ${media.toFixed(2)}</p>`
    }
    
}