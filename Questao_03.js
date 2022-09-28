var alunos = new Array();
var alunos = [];

var notas1 = new Array();
var notas1 = [];

var notas2 = new Array();
var notas2 = [];

//var notaPeso1;
//var notaPeso2;
//var notaFinal;

alunos[0] = "Wellington Zanelatto";
alunos[1] = "Bruce Wayne";
alunos[2] = "Clark Kent";

notas1[0] = 8;
notas1[1] = 9;
notas1[2] = 7

notas2[0] = 5;
notas2[1] = 7;
notas2[2] = 10;

for (var i=0; i < alunos.length; i++){
   var notaPeso1 = notas1[i] * 0.6;
   var notaPeso2 = notas2[i] * 0.4;
   var notaFinal = notaPeso1 + notaPeso2;
   alert("Nome do aluno: " + alunos[i] + "\n"+"Nota 1: " + notas1[i] + "\n"+"Nota 2: "+ notas2[i] + "\n");
   alert("Nome do aluno: " + alunos[i] + "\n"+"Nota final: " + notaFinal);
}