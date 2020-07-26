var botaoAdicionar = document.querySelector("#adicionar-paciente");
// console.log(botaoAdicionar);

botaoAdicionar.addEventListener('click', function (event) {

    event.preventDefault(); // previne o comportamento padrão

    // Selecionando o formulário
    var form = document.querySelector("#form-adiciona");

    // Instanciando o objeto
    var paciente = obtemPacienteDoFormulario(form);


    var erros = validaPaciente(paciente);
    console.log(erros);
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    if (!validaPaciente(paciente)) {
        console.log("Paciente inválido!");
        return;
    }
    adicionaPacienteNaTabela(paciente);
    // Limpa os dados do form após clica no botão adicionar
    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

}

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


function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco")
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido!");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida!");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ficar em branco.")
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ficar em branco.")
    }

    return erros;

}