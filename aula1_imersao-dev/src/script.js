let umaBiquiniMoeda = 30;

function conversor() {
    var valorReais = prompt("Digite a quantia que você tem (apenas números)"); 
    var resultado = valorReais * umaBiquiniMoeda; 
    var resultadoFormatado = resultado.toFixed(2).toLocaleString("pt-BR");

    alert("Essa seria sua conta bancária: R$ " + resultadoFormatado + " em Bikini Bottom Dollars");
}

document.getElementById("converterBtn").addEventListener("click", conversor);