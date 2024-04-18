document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos
    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);

    // Verifica se o campo B é maior que o campo A
    if (campoB > campoA) {
        document.getElementById("message").innerHTML = "Formulário válido!";
        document.getElementById("message").className = "message valid";
    } else {
        document.getElementById("message").innerHTML = "O número em B deve ser maior que o número em A.";
        document.getElementById("message").className = "message invalid";
    }
});