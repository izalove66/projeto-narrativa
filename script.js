const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternstivas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "pergunta 1",
        alternativa:[
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "pergunta 2",
        alternativa:[
            "Alternativa 1",
            "Alternativa 2"
        ]
    }
];