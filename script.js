const form = document.querySelector('form');
const trocoDiv = document.querySelector('#troco');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const total = parseFloat(document.querySelector('#total').value);
  const pago = parseFloat(document.querySelector('#pago').value);

  const troco = pago - total;

  if (troco < 0) {
    trocoDiv.innerHTML = 'Valor pago é insuficiente';
  } else {
    trocoDiv.innerHTML = `Troco: R$ ${troco.toFixed(2)}`;
  }
});
