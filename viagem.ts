class Viagem {

    constructor(public  tempoGasto:number,public velocidadeMedia:number,public rendimntoVeiculo:number){}


distancia():number
{
return this.tempoGasto*this.velocidadeMedia

}   

cosumo():number
{

    return this.distancia()/this.rendimntoVeiculo
}


}