var ano = 2000
if (ano % 4 == 0) & (ano % 100 == 0) || (ano % 400 == 0){
    console.log('O ano é Bissexto')
} else {
    console.log('O ano não é Bissexto')
}