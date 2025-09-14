let numero1 = parseFloat(prompt("Digite o primeiro numero: "));
let operador = prompt("Qual operador quer utilizar? (+, -, *, /)");
let numero2 = parseFloat(prompt("Digite o segundo numero: "));

switch(operador){
    case "+":
        alert("Resultado = " + numero1+numero2);
    break;
    case "-":
        alert("Resultado = " + numero1-numero2);
    break;
    case "*":
        alert("Resultado = " + numero1*numero2);
    break;
    case "/":
        alert("Resultado = " + numero1/numero2);
    break;
    default:
        alert("Operador invalido (ERROR)");
}
console.log("Codigo rodando!");