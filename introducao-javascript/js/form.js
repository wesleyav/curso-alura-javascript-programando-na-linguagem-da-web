var botaoAdicionar = document.querySelector("#adicionar-paciente");
// console.log(botaoAdicionar);

botaoAdicionar.addEventListener('click', function (event) {

    event.preventDefault(); // previne o comportamento padrão

    // Selecionando o formulário
    var form = document.querySelector("#form-adiciona");

    // Instanciando o objeto
    var paciente = obtemPacienteDoFormulario(form);


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
    imcTd.textContent = calculaImc(peso, altura);

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

function obtemPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}