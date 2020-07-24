var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
// console.log(pacientes);

for (var i = 0; i < pacientes.length; i++) {

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoEvalido = true;
	var alturaEvalido = true;

	if (peso <= 0 || peso >= 1000) {
		// console.log("Peso inválido");
		pesoEvalido = false;
		tdImc.textContent = "Peso inválido!";
		// paciente.style.backgroundColor = "lightcoral";
		paciente.classList.add("paciente-invalido"); // permite adicionar uma classe em css
	}

	if (altura <= 0 || altura >= 3.00) {
		// console.log("Altura inválida");
		alturaEvalido = false;
		tdImc.textContent = "Altura inválida!";
		// paciente.style.backgroundColor = "lightcoral";
		paciente.classList.add("paciente-invalido");
	}

	if (pesoEvalido && alturaEvalido) {
		var imc = calculaImc(peso, altura);
		tdImc.textContent = imc;
	}

}

function calculaImc(peso, altura){
	var imc = 0;
	imc = peso / (altura * altura);
	return imc.toFixed(2);
}


// titulo.addEventListener("click", function(){
// 	console.log("Função anônima!");
// });

// function mostraMensagem(){
// 	console.log("Olá eu fui clicado!");
// }

