const LOCALIZADORES_VALIDADOR = [
    "A75HB2",
    "B56T23",
    "2MJ03J",
    "3LQ7RZ",
    "BNS981",
    "MJ765S",
    "BN78JH",
    "EUAN82",
    "0",
];

function Continuar() {
    let mensagemValidacao = "";
    let localizadorDigitado = document
        .getElementById("txtLocalizador")
        .value.toUpperCase();

    let ehValido = false;

    for (let i = 0; i < LOCALIZADORES_VALIDADOR.length; i++) {
        if (localizadorDigitado === LOCALIZADORES_VALIDADOR[i])
            ehValido = true;
    }

    if (localizadorDigitado.length !== 6) {
        ehValido = false;
        mensagemValidacao += "O localizador deve conter seis digitos";
    }

    if (ehValido === false) {
        let mensagemUsuario = document.getElementById("mensagemUsuario");
        mensagemUsuario.className = "alert alert-success";
        mensagemUsuario.innerText =
            "Localizador não encontrado!" + " " + mensagemValidacao;
    } else {
        window.sessionStorage.setItem("localizador", localizadorDigitado);
        window.location = "./passageiros.html";
    }
}

document
    .getElementById("btnContinuar")
    .addEventListener("click", Continuar);