//Cálculo de aposentadoria

const
    nome = 'Silvana',
    sexo = 'F',
    idade = 48,
    contribuicao = 23;

const tempoContrib = idade + contribuicao;

if (contribuicao >= 30 && tempoContrib >= 85){
    console.log(`${nome}, você pode se aposentar!`);
}
if (contribuicao >= 30 || tempoContrib >=85){
    console.log(`${nome}, você pode se aposentar!`);
} else {
    console.log(`${nome}, você ainda não pode se aposentar.`);
}
