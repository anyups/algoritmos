function setupGameBoard() {
  const squares = document.getElementsByClassName('square');
  let jogador1 = 'X';

  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function() {

      if (squares[i].innerText === '') {
        squares[i].innerText = jogador1;

        if (ganhador(jogador1)) {
          alert('parabéns ' + jogador1 + ' você venceu!');
          reiniciar();
        } else if (empate()) {
          alert('xiii, empataram!');
          reiniciar();
        } else {
          jogador1 = jogador1 === 'X' ? 'O' : 'X';
        }

      }

    });
  }
}

function ganhador(player) {
  const sequencias = [
     [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] 
  ];

  const squares = document.getElementsByClassName('square');
  for (let i = 0; i < sequencias.length; i++) {
    const [a, b, c] = sequencias[i];
    if (squares[a].innerText === player && squares[b].innerText === player && squares[c].innerText === player) {
      return true;
    }
  }

  return false;
}

function reiniciar() {
  const squares = document.getElementsByClassName('square');
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerText = '';
  }
}

function empate() {
  const squares = document.getElementsByClassName('square');
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].innerText === '') {
      return false;
    }
  }
  return true;
}

setupGameBoard();