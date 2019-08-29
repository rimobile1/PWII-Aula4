var Viagem = /** @class */ (function () {
    function Viagem(tempoGasto, velocidadeMedia, rendimntoVeiculo) {
        this.tempoGasto = tempoGasto;
        this.velocidadeMedia = velocidadeMedia;
        this.rendimntoVeiculo = rendimntoVeiculo;
    }
    Viagem.prototype.distancia = function () {
        return this.tempoGasto * this.velocidadeMedia;
    };
    Viagem.prototype.cosumo = function () {
        return this.distancia() / this.rendimntoVeiculo;
    };
    return Viagem;
}());
