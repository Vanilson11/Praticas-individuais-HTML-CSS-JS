let num = document.getElementById('fnum')
let res = document.getElementById('res')
let vet = []

function buscar(){
    if(num.value.length == 0){
        alert('[ERROR] Por favor, digite os números.')
    } else {
        let par = []
        for(let pos = 0; pos <= 30; pos++){
            vet.push(parseInt(Math.random() * 16))
        }
        res.innerHTML = `<p>Os números gerados pelo computador foram ${vet}.</p>`
        if(vet.indexOf(Number(num.value)) != -1){
            for(let pos in vet){
                if(vet[pos] == Number(num.value)){
                    par.push(pos)
                }
            }
            res.innerHTML += `<p>O número digitado está nos índices ${par}</p>`
        } else{
            res.innerHTML += `<p>O número digitado não foi encontrado.</p>`
        }
    }
    
}

function limpar(){
    num.value = ''
    num.focus()
    res.innerHTML = ''
    vet = []
}