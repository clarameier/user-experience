// classe base "imovel"
class Imovel {
    constructor(endereco, tamanho) {
        this.endereco = endereco;
        this.tamanho = tamanho;
    }

    // método abstrato para descrever o imóvel (deve ser implementado nas subclases)
    descrever() {
        throw new Error("Este método deve ser implementado por subclasses.");
    }
}

// classe derivada "Casa" que herda de "Imovel"
class Casa extends Imovel {
    constructor(endereco, tamanho, cor, numQuartos, temGaragem) {
        super(endereco, tamanho);
        this.cor = cor;
        this.numQuartos = numQuartos;
        this.temGaragem = temGaragem;
    }

    // implementação do método descrever
    descrever() {
        let descricao = `Casa localizada em ${this.endereco}, de cor ${this.cor}, com${this.numQuartos} quartos, de tamanho ${this.tamanho}m² `;

        // operador ternário
        descricao += this.temGaragem ? "e possui garagem." : "e não possui garagem.";

        return descricao
    }
}


// classe derivada "Apartamento" que herda de "Imovel"
class Apartamento extends Imovel {
    constructor(endereco, tamanho, numAndar, temElevador) {
        super(endereco, tamanho);
        this.numAndar = numAndar;
        this.temElevador = temElevador;
    }

    // implementação do método descrever
    descrever() {
        let descricao = `Apartamento localizado em ${this.endereco}, no ${this.numAndar}º andar, de tamanho ${this.tamanho}m² `

        descricao += this.temElevador ? "e possuí elevador." : "e não possuí elevador.";

        return descricao;
    }
}


// função para descrever um imóvel (polimorfismo)
function descreverImovel(imovel) {
    console.log(imovel.descrever());
}

// criação de objetos (instâncias das classes)
const minhaCasa = new Casa("Rua A, 123", 120, "azul", 3, true);
const meuApartamento = new Apartamento("Avenida B, 456", 85, 7, true);

// manipulação dos objetos e exibição das descrições usando polimorfismo
descreverImovel(minhaCasa);
descreverImovel(meuApartamento);