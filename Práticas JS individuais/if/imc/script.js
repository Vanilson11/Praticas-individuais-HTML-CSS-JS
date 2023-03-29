function calc(){
    var alt = document.getElementById('alt')
    var height = parseFloat(alt.value)
    var kg = document.getElementById('kg')
    var quilo = parseFloat(kg.value)
    var imc = quilo/(height ** 2)
    var res = document.querySelector('p#imc')
    if (alt.value.length == 0 && kg.value.length == 0){
        window.alert('[ERROR] Verifique os dados e tente novamente.')
    } else if (imc < 18.5){
        res.innerHTML = `</strong>${imc.toFixed(2)}</strong>`
    } else if(imc >= 18.5 && imc < 25){
        res.innerHTML = `<strong>${imc.toFixed(2)}</strong>`
    } else if(imc < 30){
        res.innerHTML = `<strong>${imc.toFixed(2)}</strong>`
    } else if(imc < 40){
        res.innerHTML = `<strong>${imc.toFixed(2)}</strong>`
    } else{
        res.innerHTML = `<strong>${imc.toFixed(2)}</strong>`
    }
}
