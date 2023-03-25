function calc(){
    var num1 = document.getElementById('n1')
    var tab = document.getElementById('tab')
    if (num1.value.length == 0){
        window.alert('[ERROR] Digite um número.')
    } else{
        tab.innerHTML = ''
        var n1 = Number(num1.value)
        for (var c = 1; c <= 10; c++){
            var item = document.createElement('option')
            item.text += `${n1} X ${c} = ${n1 * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}