function verificar(){
    var data = new Date()
    var anoa = data.getFullYear()
    var fano = document.getElementById('txtano')
    var idade = anoa - Number(fano.value)
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fano.value.length == 0 || Number(fano.value) > anoa){
        window.alert('[ERROR] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', 'criancam.png')
            } else if (idade < 23){
                img.setAttribute('src', 'jovemmas.png')
            } else if(idade < 60){
                img.setAttribute('src', 'adultomas.png')
            } else{
                img.setAttribute('src', 'idosomas.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', 'criancaf.png')
            } else if(idade < 23){
                img.setAttribute('src', 'jovemfem.png')
            } else if(idade < 60){
                img.setAttribute('src', 'adultofem.png')
            } else {
                img.setAttribute('src', 'fotoidosa.png')
            }
        }
    }
    res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
    res.style.textAlign = 'center'
    res.appendChild(img)
}