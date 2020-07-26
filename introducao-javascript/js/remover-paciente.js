var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    var alvoEvento =event.target;
    var paiDoAlvo = alvoEvento.parentNode; // TR = paciente a remover
    paiDoAlvo.remove();
    // event.target.parentNode.remove(); // Tudo em apenas uma linha
});
