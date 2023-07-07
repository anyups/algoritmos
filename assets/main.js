// 1
let letra = 'B';
if (letra == 'A' || letra == 'E' || letra == 'I' || letra == 'O' || letra == 'U') {
    console.log('vogal');
} else {
    console.log('consoante');
}

// 2
let nota = 85;
if (nota <= 20) {
    console.log('F');
} else if(nota <= 40){
    console.log('D');
} else if(nota <= 60){
    console.log('C');
} else if(nota <= 80){
    console.log('B');
} else { 
    console.log('A');
}

//3
let numero = 10;
if (numero % 3 === 0 && numero % 5 === 0) {
    console.log('seu número é divisível por 3 e por 5!');
} else {
    console.log('vixi');
}

//4
let valor = 10;
if (valor % 2 === 0) {
    console.log('par');
} else {
    console.log('ímpar');
}

//5
let numb = 0;
if (numb > 0) { 
   console.log('positivo'); 
} else if(numb < 0){ 
   console.log('negativo');
} else{
   console.log('zero');
}

//6
const array = [1, 2, 3];
array.forEach(num => console.log(num));

//7
const numeros = [1, 2, 3, 4, 5];
for(let nmr of numeros){
    console.log(nmr);
}

//8
let divi = 1;
while (true) {
  if (divi % 5 === 0 && divi % 7 === 0) {
    console.log('o número ' + divi + ' é divisível por cinco e por sete');
    break;
  }
  divi++;
}

//9
let pares = 1;
do {
    pares++;
    if(pares % 2 !== 0){
    continue;
   }
    console.log(pares);
} while (pares <= 10);

// 10
const pessoa = {
    nome: 'any',
    idade: 17,
    cidade: 'nova andradina'
};
for(let atributo in pessoa){
    console.log(atributo + ": " + pessoa[atributo]);
}

// 11
let multi = 1;
while(multi <= 100) {
    if(multi % 2 === 0 && multi % 3 === 0 && multi % 5 === 0) {
      break;
    } 
    multi++;
}
console.log('o menor número divisível por 2, 3 e 5 é ' + multi);

// 12
for (const [index, caract] of ['a', 'b', 'c'].entries()) {
    console.log('a letra ' + caract + ' está na posição ' + index)
}

// 13
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador = contador + 2;
}

// 14
// let sn;
// do{
    // sn = prompt('Deseja sair? sim/não');
// }   while(sn !== "sim");
    // console.log("Você saiu!");

// 15
const letras = "any";
for(let abc in letras){
    console.log(letras[abc]);
}

// 16
let primo = parseInt(prompt("Digite um número inteiro positivo:"));
let ehPrimo = true;
if (primo < 2) {
  ehPrimo = false;
} else {
  for (let i = 2; i <= Math.sqrt(primo); i++) {
    if (primo % i === 0) {
      ehPrimo = false;
      break;
    }
  }
}

if (ehPrimo) {
  console.log(primo + " é um número primo.");
} else {
  console.log(primo + " não é um número primo.");
}

// 17
let subtrair = 10;
while (subtrair >= 1) {
    console.log(subtrair);
    subtrair--;
}

// 18
let num1 = parseInt(prompt('Digite o primeiro numero'));
let num2 = parseInt(prompt('Digite o segundo numero'));
do {
    num1++;
    if(num1 % 2 !== 0){
        continue;
    } console.log(num1);
} while (num1 <= num2)


// 19
let notas = parseInt(prompt("Digite a quantidade de notas:"));
let soma = 0;
for (let i = 1; i <= notas; i++) {
  let nota = parseFloat(prompt("Digite a nota " + i + ":"));
  soma += nota;
}
let media = soma / notas;
console.log("A média das notas é:", media.toFixed(2));

// 20
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let acertou = false;
console.log("Bem-vindo ao Jogo de Adivinhação!");
while (!acertou) {
  let palpite = parseInt(prompt("Digite seu palpite (entre 1 e 100):"));
  tentativas++;

  if (palpite === numeroAleatorio) {
    acertou = true;
    console.log("Parabéns! Você acertou o número em " + tentativas + " tentativas.");
  } else if (palpite < numeroAleatorio) {
    console.log("O número correto é maior. Tente novamente!");
  } else {
    console.log("O número correto é menor. Tente novamente!");
  }
}