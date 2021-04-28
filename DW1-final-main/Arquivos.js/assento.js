let cadeiras = document.getElementsByClassName("cadeira");
let cadeiraSelecionada = null;
let mensagemUsuario = "";

for (let i = 0; i < cadeiras.length; i++) {
    const cadeira = cadeiras[i];

    if (cadeira.className.includes("indisponivel")) {
        continue;
    }

    cadeira.addEventListener("click", function(valor) {
        cadeiraSelecionada = valor.target.innerText;

        //desmarcando qualquer cadeira selecionada anteriormente
        let cadeirasSelecionadas = document.getElementsByClassName(
            "cadeira selecionada"
        );
        for (let i = 0; i < cadeirasSelecionadas.length; i++) {
            cadeirasSelecionadas[i].className = "cadeira";
        }

        let escolhida = valor.target.className = "cadeira selecionada";

        console.log(cadeiraSelecionada);



    });
}

function Continuar() {


    if (cadeiraSelecionada === null) {
        let mensagemUsuario = document.getElementById("mensagemUsuario");
        mensagemUsuario.className = "alert alert-success";
        mensagemUsuario.innerText = "você deve selecionar uma cadeira";
        return;
    }
    window.sessionStorage.setItem("cadeiraSelecionada", cadeiraSelecionada);
    window.location = "./saudacaoFinal.html"

}
document
    .getElementById("btnContinuar")
    .addEventListener("click", Continuar);