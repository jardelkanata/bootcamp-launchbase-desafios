//Lista de usuários e suas tecnologias

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];


for(let i = 0; i< usuarios.length; i++) {
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
}

// Algoritmo com for..of

// for (let usuario of usuarios){
//         console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`);
//     }

