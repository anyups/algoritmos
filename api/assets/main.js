function criarBanco(banco) {
    const container = document.getElementById('container');

    const codigo = document.createElement('h3');
    const nome = document.createElement('h2');
    const ispb = document.createElement('p');

    codigo.textContent = banco.code;
    nome.textContent = banco.fullName;
    ispb.textContent = banco.ispb;

    container.appendChild(codigo);
    container.appendChild(nome);
    container.appendChild(ispb);

}

fetch('https://brasilapi.com.br/api/banks/v1')
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);

    const bancos = data;

    bancos.forEach(banco => {
        criarBanco(banco)
    });
})
.catch(err => {
    console.log('Erro: ', err);
});