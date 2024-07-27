function fuja() {
    var botaoNao = document.getElementById("nao");
    var larguraJanela = window.innerWidth;
    var alturaJanela = window.innerHeight;
    var maxX = larguraJanela - botaoNao.offsetWidth;
    var maxY = alturaJanela - botaoNao.offsetHeight;
    var aleatorioX = Math.floor(Math.random() * maxX);
    var aleatorioY = Math.floor(Math.random() * maxY);
    botaoNao.style.left = aleatorioX + "px";
    botaoNao.style.top = aleatorioY + "px";
}

document.getElementById("sim").addEventListener("click", function() {
    // Altera o fundo para preto
    document.body.style.transition = "background-color 1s";
    document.body.style.backgroundColor = "black";

    // Após um curto intervalo, redireciona para a nova página
    setTimeout(function() {
        window.location.href = "resultado.html";
    }, 1000); // Tempo para a transição do fundo
});
