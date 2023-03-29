var nome = document.getElementById('fname')
var res = document.getElementById('res')
let vet = []

function adicionar(){
    if(nome.value.length == 0){
        window.alert('[ERROR] Por favor, adicione os nomes.')
    } else{
        vet.push(nome.value)
    }
    nome.value = ''
    nome.focus()
    res.innerText = ''
}

function finalizar(){
    res.innerHTML += `<p>Os nomes digitados foram ${vet}</p>.`
}