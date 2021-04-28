let mensagem = ", Uma boa viagem!"

let divNome = document.getElementById("boaViagem");
let nome = window.sessionStorage.getItem("nome");
divNome.innerText = nome + mensagem;

mensagem = "Não esqueça, sua poltrona no avião é a "

let divPoltrona = document.getElementById("poltrona");
let poltrona = window.sessionStorage.getItem("cadeiraSelecionada");
divPoltrona.innerText = mensagem + poltrona;

mensagem = "Fique tranquilo, caso algo dê errado avisaremos à "

let divContato = document.getElementById("contato");
let contato = window.sessionStorage.getItem("cttEmergencia");
divContato.innerText = mensagem + contato;

mensagem = "Localizador "

let divLocal = document.getElementById("localizador");
let localizador = window.sessionStorage.getItem("localizador");
divLocal.innerText = mensagem + localizador;

setTimeout(() => {
    window.location = "paginaInicial.html";
}, 10000);