var idade = 18
    console.log(`Você tem ${idade} anos.`)
if(idade < 16){
    console.log(`Não eleitor`)
} else if (idade < 18 || idade > 65){
    console.log ('Eleitor facultativo')
} else {
    console.log ('Eleitor obrigatório')
}