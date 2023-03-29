let vet = []
for (let pos = 0; pos < 20; pos++){
    vet.push(parseInt(Math.random() * 100))
}
console.log(`O vetor tem ${vet.length} números, sendo eles ${vet}.`)
vet.sort()
console.log(`Esse é o vetor em ordem crescente: ${vet}.`)

