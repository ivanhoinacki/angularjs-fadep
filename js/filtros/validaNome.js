angular.module("ListaTelefonica").filter("validaNome", validaNomeFilter);

function validaNomeFilter() {
    return function(valorEntrada) {
        var nomeFormatado = "";
        var input = valorEntrada.split(" "); // Separo a string por espaco em um vetor

        nomeFormatado  = input.map(function(nome){
            // Pego o primero campo da string / Recupero todo o resto da string
            return nome.charAt(0).toUpperCase() + nome.substring(1);
        });

        // Separa o vetor por espaco
        console.log(nomeFormatado.join(" "));
        return nomeFormatado.join(" ");
    }
}
