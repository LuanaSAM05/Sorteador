function generateNumber() {
  const minInput = document.querySelector('.input-min').value;
  const maxInput = document.querySelector('.input-max').value;
  const resultadoEl = document.querySelector('.resultado');

  if (minInput === '' || maxInput === '') {
    alert("Preencha os dois campos.");
    return;
  }

  const min = Math.ceil(Number(minInput));
  const max = Math.floor(Number(maxInput));

  if (min >= max) {
    alert("O valor 'Entre' deve ser MENOR que o valor 'E'.");
    return;
  }

  const result = Math.floor(Math.random() * (max - min + 1)) + min;

  // Mostra resultado na tela
  resultadoEl.textContent = result;

  // Pequena animação
  resultadoEl.style.transform = 'scale(1.2)';
  setTimeout(() => { resultadoEl.style.transform = 'scale(1)'; }, 300);
}