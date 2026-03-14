// classe BASE "Casa"

class Casa {
    constructor (cor, numQuarto, temGaragem) {
        // propriedades privadas utilizando convenção de underscore
        this._cor = cor;
        this._numQuarto = numQuarto;
        this._temGaragem = temGaragem;
    }

    // métodos getters e setter para acessar e modificar as propriedades
    get cor() {
        return this._cor;
    }

    set cor(novaCor) {
        this._cor = novaCor;
    }

    get numQuarto() {
        return this._numQuarto;
    }

    set numQuarto(novoNumQuarto) {
        this._numQuarto = novoNumQuarto;
    }

    get temGaragem() {
        return this._temGaragem;
    }

    set temGaragem(novoTemGaragem) {
        this._temGaragem = novoTemGaragem;
    }

    // método para descrever a casa
    descrever() {
        let descricao = `Esta casa é de cor ${this.cor}, tem ${this.numQuarto} quartos `;
        if (this._temGaragem) {
            descricao += `e tem uma garagem.`;
        } else {
                descricao += `e não tem garagem.`;
        }
        return descricao;
    }
}

// classe DERIVADA "CasaLuxuosa" que HERDA de "Casa"
class CasaLuxuosa extends Casa {
    constructor(cor, numQuarto, temGaragem, temPiscina) {
        // chama o constructor da classe base
        super(cor, numQuarto, temGaragem);
        // propriedade adicional específica de classe derivadas
        this._temPiscina = temPiscina
    } 

    // getter e setter para a nova propriedade
    get temPiscina() {
        return this._temPiscina;
    }

    set temPiscina(novoTemPiscina) {
        this._temPiscina = novoTemPiscina;
    }

    // sobrescrita do método descrever para incluir a piscina
    descrever() {
        let descricao = super.descrever(); // chama o método descrever da classe base
        if (this._temPiscina) {
            descricao += "Também tem uma piscina.";
        } else {
            descricao += "Não tem piscina.";
        }
        return descricao;
    }
}

// criação de objetos (instâncias da classe Casa)
const minhaCasa = new Casa("azul", 3, true);
const casaLuxuosa = new CasaLuxuosa("branca", 5, true, true);

// manipulação dos objetos e exibição das descrições
console.log(minhaCasa.descrever());
console.log(casaLuxuosa.descrever());
