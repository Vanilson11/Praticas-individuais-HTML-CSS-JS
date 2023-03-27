function calcular(){
    var valor = document.getElementById('totval')
    var sal = document.getElementById('sal')
    var ano = document.getElementById('ano')
    var res = document.getElementById('res')
    var meses = Number(ano.value) * 12
    var prest = Number(valor.value)/(Number(ano.value) * 12)
    
    if(prest > 30 * Number(sal.value)/100){
        res.innerHTML = `<strong>Empréstimo Negado!</strong> O valor da prestação está excedendo os 30% do seu salário atual.`
    } else{
        res.innerHTML = `<strong>Empréstimo aceito!</strong> O valor das prestações será de ${meses} vezes de ${prest.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} reais.`
    }
}