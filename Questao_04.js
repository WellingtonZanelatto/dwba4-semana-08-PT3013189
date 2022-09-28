class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
      this.nome = primeiroNome;
      this.sobrenome = segundoNome;
      this.nota1 = primeiraNota;
      this.nota2 = segundaNota;
    }


    nomeCompleto() {  
        return this.nome + this.sobrenome;  
    }
    media() {  
        return ((this.nota1 * 0.6) + (this.nota2 * 0.4));  
    }

    situacao() {
      var situacaoFinal;
        if(((this.nota1 * 0.6) + (this.nota2 * 0.4)) >= 6.0){
        situacaoFinal = 'Aprovado';
        } else {
          situacaoFinal = 'Reprovado';
        }
      return situacaoFinal;
    }
  
}

var nomes = new Array();
var nomes = [];

var sobrenomes = new Array();
var sobrenomes = [];

var notas1 = new Array();
var notas1 = [];

var notas2 = new Array();
var notas2 = [];

var alunos = new Array();
var alunos = [];

nomes[0] = "Wellington ";
nomes[1] = "Bruce ";
nomes[2] = "Clark ";
nomes[3] = "Diana ";
nomes[4] = "Jessica ";

sobrenomes[0] = "Zanelatto";
sobrenomes[1] = "Wayne";
sobrenomes[2] = "Kent";
sobrenomes[3] = "Prince";
sobrenomes[4] = "Jones";

notas1[0] = 10.0;
notas1[1] = 9.0;
notas1[2] = 5.0;
notas1[3] = 5.5;
notas1[4] = 6.0;

notas2[0] = 6.0;
notas2[1] = 7.0;
notas2[2] = 5.5;
notas2[3] = 4.5;
notas2[4] = 10.0;


for (var i=0; i < nomes.length; i++){
   alunos[i] = new Aluno(nomes[i], sobrenomes[i], notas1[i], notas2[i]);
   alert('Nome: ' + alunos[i].nomeCompleto() + ' Media: ' + alunos[i].media() + ' Situação: ' + alunos[i].situacao());
}