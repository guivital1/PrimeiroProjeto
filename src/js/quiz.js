alert("Seja bem vindo ao quiz")

//criando as perguntas
const perguntas = [
    {
        pergunta: "Pergunta numero1 ?\n a)Opção A \n b)Opção B \n c) Opção C",
        resposta:"A"
    },
    {
        pergunta: "Pergunta numero2 ?\n a)Opção A \n b)Opção B \n c) Opção C",
        resposta:"A"
    },
    {
        pergunta: "Pergunta numero3 ?\n a)Opção A \n b)Opção B \n c) Opção C",
        resposta:"A"
    },
    {
        pergunta: "Pergunta numero4 ?\n a)Opção A \n b)Opção B \n c) Opção C",
        resposta:"A"
    },
    {
        pergunta: "Pergunta numero5 ?\n a)Opção A \n b)Opção B \n c) Opção C",
        resposta:"A"
    },
]

//declarando a variavel acerto

let acertos = 0;

// percorrendo as perguntas

for(let i = 0; i<perguntas.length; i++){
    const respostaUsuario = prompt(perguntas[i].pergunta)

if(respostaUsuario.toLowerCase()===perguntas[i].resposta.toLowerCase()){
    acertos ++
}
}

//mostrando resultado na pagina quiz

document.getElementById("msg").innerHTML = (`Você acertou ${acertos} de ${perguntas.length} perguntas`)
