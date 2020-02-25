const programador = {
    nome: "Carlos",
    idade: 32
}
const objeto = {
    propriedade: [
        {
            nome: "C++",
            especialidade: "Desktop"
        },
        {
            nome: "JavaScript",
            especialidade: "Web/Mobile"
        }
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${objeto.propriedade[0].nome} com especialidade em ${objeto.propriedade[0].especialidade}`)