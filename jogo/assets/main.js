function gerarSenha(comprimento, usarMaiusculas, usarMinusculas, usarNumeros, usarEspeciais) {
    const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const especiais = "!@#$%^&*()_+-=[]{}|;:'\,.<>/?";
  
    let caracteres = "";
    if (usarMaiusculas) {
      caracteres += maiusculas;
    }
    if (usarMinusculas) {
      caracteres += minusculas;
    }
    if (usarNumeros) {
      caracteres += numeros;
    }
    if (usarEspeciais) {
      caracteres += especiais;
    }
  
    let senha = "";
    for (let i = 0; i < comprimento; i++) {
      const numeroAleatorio = Math.floor(Math.random() * caracteres.length);
      senha += caracteres.charAt(numeroAleatorio);
    }
  
    return senha;
  }
  
  const comprimentoSenha = parseInt(prompt("Digite o comprimento da senha desejado:"));
  const usarMaiusculas = confirm("Deseja incluir letras maiúsculas na senha?");
  const usarMinusculas = confirm("Deseja incluir letras minúsculas na senha?");
  const usarNumeros = confirm("Deseja incluir números na senha?");
  const usarEspeciais = confirm("Deseja incluir caracteres especiais na senha?");
  
  const senhaGerada = gerarSenha(comprimentoSenha, usarMaiusculas, usarMinusculas, usarNumeros, usarEspeciais);
  alert("sua senha: " + senhaGerada);
  console.log("a senha já foi gerada!");