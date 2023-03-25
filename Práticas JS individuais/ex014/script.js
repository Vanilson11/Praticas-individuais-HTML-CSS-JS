function carregar(){
    var data = new Date()
    var agora = data.getHours()
    var msg = document.getElementById('msg')
    var msg1 = document.getElementById('msg1')
    var img = document.getElementById('imagem')
    if (agora > 0 && agora < 12){
        document.body.style.background = 'lightblue'
        msg.innerHTML = `Agora são ${agora} horas`
        msg1.innerHTML = `<strong>Bom dia!</strong>`
        img.src = 'fotomanha.png'
    } else if(agora < 18){
        document.body.style.background = 'lightgreen'
        msg.innerHTML = `Agora são ${agora} horas`
        msg1.innerHTML = `<strong>Boa Tarde!</strong>`
        img.src = 'fototarde.png'
    } else{
        document.body.style.background = 'lightgrey'
        msg.innerHTML = `Agora são ${agora} horas.`
        msg1.innerHTML = `<strong>Boa Noite!</strong>`
        img.src = 'fotonoite.png'
    }
}

