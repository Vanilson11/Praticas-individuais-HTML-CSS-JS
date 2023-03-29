function calc(){
    let kg = document.getElementById('txtkg')
    let alt = document.getElementById('alt')
    var res = document.getElementById('res')

    if (kg.value.length == 0 || alt.value.length == 0){
        window.alert('[ERROR] Por favor, preencha os campos corretamente.')
    } else{
        let peso = Number(kg.value)
        let altu = Number(alt.value)
        let imc = peso/(altu ** 2)

        res.innerHTML = ''
        if(imc < 18.5){
            res.innerHTML = `Seu IMC é de <strong>${imc.toFixed(2)}</strong>. <p><strong>Você está abaixo do seu peso ideal</strong>.</p>`
            res.style.display = 'block'
        } else if(imc < 25){
            res.innerHTML = `Seu IMC é de <strong>${imc.toFixed(2)}</strong>. <p><strong>Você está no seu peso ideal</strong>.</p>`
            res.style.display = 'block'
        } else if(imc < 30){
            res.innerHTML = `Seu IMC é de <strong>${imc.toFixed(2)}</strong>. <p><strong>Você está em situação de sobrepeso</strong>.</p>`
            res.style.display = 'block'
        } else if(imc < 40){
            res.innerHTML = `Seu IMC é de <strong>${imc.toFixed(2)}</strong>. <p><strong>Você está em situação de obesidade</strong>.</p>`
            res.style.display = 'block'
        } else{
            res.innerHTML = `Seu IMC é de <strong>${imc.toFixed(2)}</strong>. <p><strong>Você é a Thaís Carla?????</strong>.</p>`
            res.style.display = 'block'
        }
    }
}