var botaoAdicionar = document.querySelector("#adicionar-paciente");
// console.log(botaoAdicionar);

botaoAdicionar.addEventListener('click', function (event) {

    event.preventDefault(); // previne o comportamento padrão

    // Selecionando o formulário
    var form = document.querySelector("#form-adiciona");

    // Instanciando o objeto
    var paciente = obtemPacienteDoFormulario(form);

    // Criando a nova linha <tr>
    var pacienteTr = montaTr(paciente);

    // Adicionando os elementos criados no <tbody>
    var tabela = document.querySelector("#tabela-pacientes");

    // Adicionando o <tr> na tabela que já existia
    tabela.appendChild(pacienteTr);

    // Limpa os dados do form após clica no botão adicionar
    form.reset();

});

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {

    var pacienteTr = document.createElement("tr"); // cria a TR
    pacienteTr.classList.add("paciente"); // adiciona a classe paciente ao HTML

    // Adicionando as colunas <td> na linha <tr> já com suas classes
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}