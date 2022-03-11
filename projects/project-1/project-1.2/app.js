/**
 * Project Requirements:
 * - Change the background color as you wish by searching or by generating random rbg color by clicking a button
 */

// -- on load function
window.onload = () => {
  searchColor();
  randomColorGenerator();
};

// grab body
let body = document.querySelector("body").style;

// 2. -- search color
function searchColor() {
  const colorPicker = document.getElementById("color-picker"),
    search = document.querySelector(".search");

  // -- pick color using search field
  colorPicker.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      let getValueFromSearchField = event.target.value;
      body.background = getValueFromSearchField;

      // clear field after getting value
      event.target.value = "";
    }
  });

  // -- pick color clicking search icon
  search.addEventListener("click", function (event) {
    body.background = event.target.nextElementSibling.value;
  });
}

// 3. -- genarate random color
function randomColorGenerator() {
  (function getColor() {
    const btn = document.querySelector("#change-btn");
    btn.addEventListener("click", function () {
      body.background = genarateRGBColor();
    });
  })();

  function genarateRGBColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
  }
}
