let nota = document.getElementById('fnum')
let res = document.getElementById('res')
let vet = []


function adicionar(){
    if(nota.value.length == 0 || Number(nota.value) < 0 || Number(nota.value > 10)){
        alert('[ERROR] Por favor, digite notas entre 0 e 10.')
    } else {
        vet.push(Number(nota.value))
    }
    nota.value = ''
    nota.focus()
    res.innerHTML = ''
}

function acimaMedia(n, m){
    if(n > m){
        return true
    } else {
        return false
    }
}

function finalizar(){
    if(vet.length == 0){
        alert('[ERROR] Por favor, insira as notas antes de finalizar.')
    } else{
        let total = vet.length
        let soma = 0
        let media = 0
        let acimMedia = []
        let maior = 0
        let maiorNota = []
        for(let pos in vet){
            soma += vet[pos]
        }
        media = soma/total
        for(let pos in vet){
            if(acimaMedia(vet[pos], media)){
                acimMedia.push(vet[pos])
            }
            if(vet[pos] > maior){
                maior = vet[pos]
            }
        }
        for(let pos in vet){
            if(vet[pos] == maior){
                maiorNota.push(pos)
            }
        }
        res.innerHTML = `<p>As notas registradas foram ${vet}.</p>`
        res.innerHTML += `<p>A média das notas é de ${media.toFixed(2)}</p>`
        res.innerHTML += `<p>Há ${acimMedia.length} alunos acima da média da turma.</p>`
        
        res.innerHTML += `<p>A maior nota registrada está nos índices ${maiorNota}.</p>`
    }
}

function limpar(){
    res.innerHTML = ''
    vet = []
    nota.value = ''
    nota.focus()
}