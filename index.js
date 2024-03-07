var setadireita = window.document.getElementById("setadireita")
var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")
var setaesquerda = window.document.getElementById("setaesquerda")

function rolarparadireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    setaesquerda.style = "display:flex; margin-top:55px"
    setadireita.style = "display:none"
}

function rolarparaesquerda() {
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    setaesquerda.style = "display:none"
    setadireita.style = "display:flex; margin-top:55px"
}