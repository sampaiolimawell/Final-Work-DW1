let mensagemValidacao = "";
let cpfDigitado = document.getElementById("cpf");
let nomeDigitado = document.getElementById("nome");
let dataDigitada = document.getElementById("data");
let telefoneDigitado = document.getElementById("telefone");
let contatoEmergencia = document.getElementById("emergencia");
let telefoneEmergencia = document.getElementById("telEmergencia");

function Continuar() {
    let cpf = cpfDigitado.value;
    let nome = nomeDigitado.value;
    let data = dataDigitada.value;
    let telefone = telefoneDigitado.value;
    let cttEmergencia = contatoEmergencia.value;
    let telEmergencia = telefoneEmergencia.value;

    let tudoCerto = true;

    if (cpf.length != 11) {
        tudoCerto = false;
        mensagemValidacao += "  O campo cpf deve conter 11 numeros!";
    }
    if (nome.length < 10) {
        tudoCerto = false;
        mensagemValidacao +=
            "  O campo nome deve conter no minimo 10 caracters!";
    }
    if (data === "") {
        tudoCerto = false;
        mensagemValidacao += "  O campo data é obrigatório!";
    }
    if (telefone.length != 11) {
        tudoCerto = false;
        mensagemValidacao += "  O campo telefone deve conter 11 numeros!";
    }
    if (cttEmergencia.length < 10) {
        tudoCerto = false;
        mensagemValidacao +=
            "  O campo contato de emergencia deve conter no minimo 10 caracters!";
    }
    if (telEmergencia.length != 11) {
        tudoCerto = false;
        mensagemValidacao +=
            "  O campo telefone de emergencia deve conter 11 numeros!";
    }

    if (tudoCerto === false) {
        let mensagemUsuario = document.getElementById("mensagemUsuario");
        mensagemUsuario.className = "alert alert-success";
        mensagemUsuario.innerText = mensagemValidacao;
    } else {
        window.sessionStorage.setItem("cpf", cpf);
        window.sessionStorage.setItem("nome", nome);
        window.sessionStorage.setItem("data", data);
        window.sessionStorage.setItem("telefone", telefone);
        window.sessionStorage.setItem("cttEmergencia", cttEmergencia);
        window.sessionStorage.setItem("telEmergencia", telEmergencia);
        window.location = "./assentoCerto.html";
    }
}
document
    .getElementById("btnContinuar")
    .addEventListener("click", Continuar);