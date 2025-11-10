function generateNumber() {
  const minInput = document.querySelector('.input-min').value;
  const maxInput = document.querySelector('.input-max').value;

  // Verifica se os campos estão vazios
  if (minInput === '' || maxInput === '') {
    alert("Preencha os dois campos.");
    return;
  }

  const min = Math.ceil(minInput);
  const max = Math.floor(maxInput);

  // Verifica se min é menor que max
  if (min >= max) {
    alert("O valor 'Entre' deve ser MENOR que o valor 'E'.");
    return;
  }

  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  alert(result);
}