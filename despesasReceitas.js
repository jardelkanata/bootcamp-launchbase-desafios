// Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o 
// saldo (receitas - despesas).

const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];

function calculaSaldo(receitas, despesas) {
      calcReceitas = somaNumeros(receitas)
      calcDespesas = somaNumeros(despesas)

      return calcReceitas - calcDespesas
  }

// A função abaixo serve para dar funcionalidade a função calcula saldo, que tem valores nominais
// permitindo apontar valores de todos os dos arrays.  
function somaNumeros(numeros) {
    soma = 0;
    for (let numero of numeros){
        soma = soma + numero
    }
    return soma
}


for (let i = 0; i < usuarios.length; i++){
    let saldo = calculaSaldo(usuarios[i].receitas, usuarios[i].despesas)

if (saldo > 0){
        console.log(`${usuarios[i].nome} possui saldo POSITIVO de ${saldo}`);
    } else {
        console.log(`${usuarios[i].nome} possui saldo NEGATIVO de ${saldo}`)
    }
}

        