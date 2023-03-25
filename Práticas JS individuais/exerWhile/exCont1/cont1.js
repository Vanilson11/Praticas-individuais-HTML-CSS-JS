function contar(){
    var num = document.getElementById('num')
    var res = document.getElementById('res')
    if (num.value.length == 0 || Number(num.value) <= 0){
        window.alert('[ERROR] Digite um número maior que zero')
    } else{
        var n1 = Number(num.value)
        var c = 1
        res.innerHTML = ''
        while (c <= n1){
            res.innerHTML += `${c} `
            c++
        }
        res.innerHTML += `<p>Acabou!</p>`
    }
}