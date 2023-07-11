function soma(a, b) {
    return a + b;
  }
  
  function mult(a, b) {
    return a * b;
  }
  
  function div(a, b) {
    return a / b;
  }
  
  function sub(a, b) {
    return a - b;
  }
  
  let primeiroNumero = parseFloat(prompt("Digite o primeiro número:"));
  let segundoNumero = parseFloat(prompt("Digite o segundo número:"));
  
  alert("soma dos dois numeros: " + soma(primeiroNumero, segundoNumero));
  alert("multiplicação dos dois numeros: " + mult(primeiroNumero, segundoNumero));
  alert("divisão dos dois numeros: " + div(primeiroNumero, segundoNumero));
  alert("subtração dos dois numeros: " + sub(primeiroNumero, segundoNumero));