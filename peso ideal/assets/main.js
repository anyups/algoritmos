const peso = parseFloat(prompt("Informe o seu peso (em kg):"));
const altura = parseFloat(prompt("Informe a sua altura (em metros):"));
const sexo = prompt("Informe o seu sexo ('m' para masculino, 'f' para feminino):");

function calcularPesoIdeal(peso, altura, sexo) {
  let pesoIdeal = 0;

  if (sexo === "m") {
    pesoIdeal = 72.7 * altura - 58;
  } else if (sexo === "f") {
    pesoIdeal = 62.1 * altura - 44.7;
  }

  return pesoIdeal;
}

const pesoIdeal = calcularPesoIdeal(peso, altura, sexo);
console.log("O peso ideal é:", pesoIdeal.toFixed(2), "kg");
