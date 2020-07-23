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
		var imc = peso / (altura * altura);
		tdImc.textContent = imc.toFixed(2);
	}

}

// titulo.addEventListener("click", function(){
// 	console.log("Função anônima!");
// });

// function mostraMensagem(){
// 	console.log("Olá eu fui clicado!");
// }

var botaoAdicionar = document.querySelector("#adicionar-paciente");
// console.log(botaoAdicionar);

botaoAdicionar.addEventListener('click', function (event) {
	
	event.preventDefault(); // previne o comportamento padrão

	// Selecionando o formulário
	var form = document.querySelector("#form-adiciona");

	// Pegando os valores das td´s via parâmetro "name" do form
	var nome = form.nome.value;
	var peso = form.peso.value;
	var altura = form.altura.value;
	var gordura = form.gordura.value;

	// Criando a nova linha <tr>
	var pacienteTr = document.createElement("tr");

	// Criando as novas colunas <td>
	var nomeTd = document.createElement("td");
	var pesoTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");

	// Preenchendo os <td> com os valores que foram digitados no no form
	nomeTd.textContent = nome;
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;
	imcTd.textContent = imc;

	// Adicionando as colunas <td> na linha <tr>
	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

	// Adicionando os elementos criados no <tbody>
	var tabela = document.querySelector("#tabela-pacientes");

	// Adicionando o <tr> na tabela que já existia
	tabela.appendChild(pacienteTr);


});