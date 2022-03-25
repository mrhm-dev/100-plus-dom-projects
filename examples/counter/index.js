// Add Button handler
const plusBtn = document.getElementById("plusBtn");
let count = 0;
plusBtn.addEventListener("click", () => {
  let increment = 1;
  count = count + increment;
  document.getElementById("inputText").innerHTML = count;
});

// Minus Button Handler
const minusBtn = document.getElementById("minusBtn");
minusBtn.addEventListener("click", () => {
  if (count > 0) {
    let decrement = 1;
    count = count - decrement;
    document.getElementById("inputText").innerHTML = count;
  } else {
    alert("❌ You cannot decrease anymore");
  }
});
