//variaveis
//
//pegando o paciente pela id TR
var paciente = document.querySelector("#paciente1");

//pegando peso do html pelo td
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

//pegando altura do html pelo td
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var pesoValido = true;
var alturaValida = true;

if(peso <= 0 || peso >= 1000)
{
    console.log("Peso inválido!");
    var pesoValido = false;
    tdImc.textContent = "Peso Inválido";
}

if(altura <= 0 || altura >= 3.00)
{
    console.log("Altura inválida!");
    var alturaValida = false;
    tdImc.textContent = "Altura Inválida";
}


//calculando e validando imc
if(pesoValido && alturaValida)
{
    var tdImc = paciente.querySelector(".info-imc");
    var imc = peso / (altura * altura);
    //colocando imc no td
    tdImc.textContent = imc;
}






//teste console

//console.log(paciente); //tr
//console.log(tdPeso); //td Peso
//console.log(peso); //obter valor 100
//console.log(tdAltura); //td Altura
//console.log(altura); //obter valor 2,00m
//console.log(imc);//obter imc

//
