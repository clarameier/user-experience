// função que simula uma operação assíncrona de verificação do status de uma casa
function verificarStatusCasa(casa) {

    return new Promise((resolve, reject) => {

        // simulando uma operação assíncrona que leva 2 segundos para ser concluída
        setTimeout(() => {
            const sucesso = Math.random() > 0.5; // simulando sucesso ou falha de forma aleatória
            if (sucesso) {
                resolve(`A casa localizada em ${casa.endereco} está em boas condições!`);
            } else {
                reject(`A casa localizada em ${casa.endereco} precisa de reparos.`);
            }
        }, 2000);

    });
}

// classe "casa"
class Casa {
    constructor(endereco, cor, numQuartos, temGaragem) {
        this.endereco = endereco;
        this.cor = cor;
        this.numQuartos = numQuartos;
        this.temGaragem = temGaragem;
    }

    // método para descrever a casa
    descrever() {
        let descricao = `Casa localizada em ${this.endereco}, de cor ${this.cor}, com ${this.numQuartos} quartos `;

        descricao += this.temGaragem ? "e possuí garagem." : "e não possuí garagem.";

        return descricao;
    }

    // método para verificar o status da casa
    verificarStatusCasa() {

        verificarStatusCasa(this)
            .then((resultado) => {
                console.log(resultado); // resultado positivo
            })
            .catch((erro) => {
                console.error(erro);
            });
    }
}

// criação de um objeto (instância da classe Casa)
const minhaCasa = new Casa("Rua A, 123", "azul", 3, true);

// manipulação do objeto e exibição da descrição
console.log(minhaCasa.descrever());

// verificação do status da casa utilizando a promessa
minhaCasa.verificarStatusCasa();

// caso de falha
const casaInvalida = new Casa("", 0, "verde", 2, false);
console.log(casaInvalida.descrever());
casaInvalida.verificarStatusCasa();