// TROCAR A COR DE FUNDO
function trocar(cor) {
    document.body.style.background = cor;
    
}

//mudar nome

function mudar(){
    let novo = document.getElementById("nome");
    document.getElementById("titulo").innerHTML = novo.value;
}
//operacao

function calc(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = num1 * num2;
}