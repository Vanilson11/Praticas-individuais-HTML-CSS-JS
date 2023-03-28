let num = document.getElementById('fnum')
let res = document.getElementById('res')
let vet = []

function buscar(){
    if(num.value.length == 0){
        alert('[ERROR] Por favor, digite os números.')
    } else {
        for(let pos = 0; pos <= 30; pos++){
            vet.push(parseInt(Math.random() * 16))
        }
        res.innerHTML = `<p>Os números gerados pelo computador foram ${vet}.</p>`
        if(vet.indexOf(Number(num.value)) != -1){
            res.innerHTML += `<p>${vet.indexOf(Number(num.value))}</p>`
        }
        //ESSE EXERCÍCIO ESTÁ INCOMPLETO
    }
}