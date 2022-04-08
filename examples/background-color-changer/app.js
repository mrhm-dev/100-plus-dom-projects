const btnColorChange = document.querySelector('.change-color');

function generateRandomNumber(n) {
  return Math.floor(Math.random() * n);
}

btnColorChange.addEventListener('click', () => {
  const r = generateRandomNumber(255);
  const g = generateRandomNumber(255);
  const b = generateRandomNumber(255);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
