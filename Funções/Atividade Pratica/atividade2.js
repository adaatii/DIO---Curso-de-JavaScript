function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 30,
}
const pessoa2 = {
    nome: "João",
    idade: 25,
}
const animal = {
    nome: "Toddy",
    idade: 5,
    raca: "VL",
}

//console.log(calculaIdade.call(animal, 7));
console.log(calculaIdade.apply(animal, [7]));