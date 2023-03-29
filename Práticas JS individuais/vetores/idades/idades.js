let num = document.getElementById('fnum')
let res = document.getElementById('res')
let vet = []

function adicionar(){
    if(num.value.length == 0 || Number(num.value) == 0){
        alert('[ERROR] Por favor, digite uma idade entre 1 e 130')
    } else {
        vet.push(Number(num.value))
    }
    num.value = ''
    num.focus()
    res.innerText = ''
}

function finalizar(){
    if(vet.length == 0){
        alert('[ERROR] Por favor, digite uma idade antes de finalizar')
    } else{
        let total = vet.length
        let soma = 0
        let media = 0
        let maior = 1
        let maior25 = []

        for(let pos in vet){
            soma += vet[pos]
            
        }
        media = soma/total
        res.innerHTML = `<p>Foram cadastradas ${total} idades, sendo elas ${vet}.</p>`
        res.innerHTML += `<p>A média entre as idades cadastradas é de ${media.toFixed(2)}.</p>`
        for(let pos in vet){
            if(vet[pos] > maior){
                maior = vet[pos]
            }
            if(vet[pos] > 25){
                maior25.push(vet.indexOf(vet[pos]))
            }
        }
        res.innerHTML += `<p>A maior idade digitada foi ${maior}</p>`
        res.innerHTML += `<p>As posições em que temos idades maiores que 25 são ${maior25}</p>`
    }
}