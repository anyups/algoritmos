function setupGameBoard() {
    const squares = document.getElementsByClassName('square');
    for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener('click', function() {
        // fazer algo aqui.
      });
    }
  }
  