var primeiroValor = parseInt(prompt("Digite o primeiro valor"))
var segundoValor = parseInt(prompt("Digite o segundo valor"))

//operações serão + - * /\
var operacao = prompt("Digite 1 para fazer uma divisao, 1 para multiplicação, 3 para soma, 4 para subtração, 5 para potenciação, 6 para radiciação")

if (operacao == 1) {
  var resultado = primeiroValor / segundoValor
  document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado.toFixed(3) + "</h2>")
}else if (operacao == 2) {
  var resultado = primeiroValor * segundoValor
  document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado.toFixed(3) + "</h2>")
}else if (operacao == 3) {
  var resultado = primeiroValor + segundoValor
  document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado.toFixed(3) + "</h2>")
}else if (operacao == 4) {
  var resultado = primeiroValor - segundoValor
  document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado.toFixed(3) + "</h2>")
}else if (operacao == 5) {
  var resultado = primeiroValor ** segundoValor
  document.write("<h2>" + primeiroValor + "^" + segundoValor + " = " + resultado.toFixed(3) + "</h2>")
}else if (operacao == 6) {
  var resultado = primeiroValor ** (1/segundoValor)
  document.write("<h2>" + primeiroValor + "^1/" + segundoValor + " = " + resultado.toFixed(3) + "</h2>")
}else {
  document.write("<h2>" + "Op. invalida" + "</h2>")
}


//if ( 1 < operacao > 4) {
 // document.write("<h2>" + "Op. invalida" + "</h2>")
//}
//}document.write("<h2>" + "Operação invalida" + "</h2>")


//document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")


