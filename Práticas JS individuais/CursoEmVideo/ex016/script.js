function contar(){
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var pass = document.getElementById('pass')
    var res = document.getElementById('res')
    if(ini.value.length == 0){
        res.innerHTML = `Impossível realizar contagem.`
    } else if(pass.value.length == 0 || Number(pass.value) == 0){
        window.alert('[ERROR] Considerando passo 1')
    } else{
        res.innerHTML = `Contando: <br>`
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pass.value)
        if (i < f){
            for(var c = i; c <= f; c+= p){
                res.innerHTML += `${c} \u{1F595}`
            }
        } else if (i > f){
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F595}`
            }
        }
        res.innerHTML += `\u{1F919}`
    }
}