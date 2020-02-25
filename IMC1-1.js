//Cálculo IMC

//Crie constantes para armazenar os dados: nome, peso, altura e sexo.

const 
     nome = 'Carlos', 
     peso = 84, 
     altura = 1.88, 
     sexo = 'M';

const imc = peso/(altura*altura);

if (imc >= 30){
    console.log('Carlos, você está acima do peso.')
} else{
    console.log('Carlos, você não está acima do peso.')
}

