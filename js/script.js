//var nome=" Rodrigo Henrique ";
//var idade=13;
//var numero;
//var numero2;
//var soma;
//var sub;
//var dividir;
//var multiplicar;
/*
estas linhas nao estao funcionando
*/
//alert(nome);
///alert(idade);
//alert(nome+idade);
//concatenando nome com idade
//alert(numero);
//numero=25;
//numero2=10;
//soma=numero+numero2;
//sub=numero-numero2;
//dividir=numero/numero2;
//multiplicar=numero*numero2;
//alert(soma);
//alert(sub);
//alert(dividir);
//alert(multiplicar);
//alert(" O primeiro numero é igual á "+numero+" E segundo numero é igual á "+numero2+" A soma destes numero é igual á "+soma);

//var primeironome;
////var anoatual;
//var anonascimento;
//var mes;
//var txt = document.getElementById('escreve')

//////anoatual=2018
//anonascimento=anoatual-idade;
////txt=innerHTML=(nome);

//alert(" Olá " +primeironome+" Você nasceu em "+anonascimento+" no mes de "+mes);
/*
var nome;
var idade;
var ano;
var anos;
var ola;

nome=prompt("digite o seu nome?");
idade=prompt("digite a sua idade");
ano=2018-idade;
ola=" ola voce nasceu em ";

document.write("<div><p>"+nome+"</p><p>"+idade+"</p></div>");
document.write("<div><p>"+ola+" "+ano+"</div>");*/

//document.getElementById("nome").innerHTML=nome;
//document.getElementById("idade").innerHTML=idade+(" anos ");




//document.getElementById('nome');
//document.write("<p>"+nome+"</p>");


/*var vl1;
var vl2;
var valor1;
var valor2;


vl1=prompt("escolha um numero");
vl2=prompt("escolha outro numero para ser somado ao primeiro");
valor1=vl1;
valor2=vl2;

function soma(valor1,valor2){
	alert(typeof valor1);
	return valor1 + valor2;
}
//document.getElementById("soma").innerHTML=soma(242424242424,252151132111230000);
document.getElementById("soma").innerHTML=soma();
//document.write("<div><p> a soma de 10 e 10 é"+soma(10,10)+"</p></div>");
//document write("<div><p>"+soma(valor1,valor2)+"</p></div>");

*/
/*function somavalores(){

var valor1,valor2;
var soma;

valor1=document.getElementById("valor1").value;
valor2=document.getElementById("valor2").value;
soma=parseInt(valor1) + parseInt(valor2);

alert(soma);
}

function multiplicaçaodevalores(){
	var valor3,valor4;
	var multiplicar;

	valor3=document.getElementById("valor3").value;
	valor4=document.getElementById("valor4").value;
	multiplicar=parseInt(valor3) * parseInt(valor4);

alert(multiplicar);
	
}	

function divisaodevalores(){

var valor5,valor6;
var dividir;

valor1=document.getElementById("valor5").value;
valor2=document.getElementById("valor6").value;
dividir=parseInt(valor5) / parseInt(valor6);

alert(dividir)*/

/*function menos(){

var valor1;
valor1=(valor2)-(valor1);
}

 function mais(){
var valor2;
valor2=(valor1)+(valor2);
}

var numero=0;
function mais(){
	numero++;
	document.getElementById("valor").innerHTML=numero;

}

function menos(){
	numero--;
	document.getElementById("valor").innerHTML=numero;
}
*/



// function calculoIMC(){
	
// var peso;

// var cm;
// var altura = (metro*100)+centimetros;
// var imc = peso / (altura * altura);

// 	peso= +document.getElementById("peso").value;
	
// 	var metro= +document.getElementById("tamanho").value;
	
// 	cm= +document.getElementById("cm").value;	
// 	alert(altura);
// 	alert(peso);

/*var peso = +document.getElementById('tonelada').value;
var centimetros = +document.getElementById('centimetros').value;
var metro = +document.getElementById('tamanho').value;

var altura = ((metro * 100) + centimetros )/100;

var imc = peso / (altura * altura);

var imc = document.getElementById("IMC").innerHTML=imc;*/



// }

function calculoIMC(){

var form = document.getElementById("form");

var kilos = +form.peso.value;

var metro = +form.metro.value;

var centimetros = +form.cm.value;

var altura = (metro * 100 + centimetros)/100;

var imc = kilos /(altura * altura);

form.imc.value=imc.toFixed(1);

if (imc <=18.5){
	alert("Você está muito magro,recomendaçao:coma mais!");
}
else if (imc >18.5 && imc<=24.9){
	alert("Você está no peso ideal,recomendaçao:continue assim :)!");
}
else if (imc >24.9 && imc<=29.9){
	alert("Você está com sobrepeso,recomendaçao:começe a comer melhor!");
}
else if (imc >30.0 && imc<=34.9){
	alert("Você está com a primeira fase do sobrepeso,recomendaçao: procure uma academia!!")
}
else if (imc >35.0 && imc<=39.9){
	alert("Você está com a segunda fase do sobrepeso,recomendaçao:procure um medico e coma melhor!")
}
else if (imc >40.0){
	alert("voce esta na terceira fase do sobrepeso,recomendaçao:procure um medico,faça academia e coma melhor!");
}

}