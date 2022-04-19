/**
 * Author: Tanzil Islam
 * created-Date: 08-03-2022
 * Description: Color Picker Application
 */

// Globals
let toastMessageContainer = null;
const defaultColor = {
  red: 221,
  green: 222,
  blue: 238,
};
const defaultPresetColors = [
  "#ffcdd2",
  "#f8bbd0",
  "#e1bee7",
  "#ff8a80",
  "#ff80ab",
  "#ea80fc",
  "#b39ddb",
  "#9fa8da",
  "#90caf9",
  "#b388ff",
  "#8c9eff",
  "#82b1ff",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#80d8ff",
  "#84ffff",
  "#a7ffeb",
  "#c8e6c9",
  "#dcedc8",
  "#f0f4c3",
  "#b9f6ca",
  "#ccff90",
  "#ffcc80",
];
let customColors = new Array(24);
const copySound = new Audio("./copy-sound.wav");
// onload handler
window.onload = () => {
  main();
  updateColorCodeToDom(defaultColor);
  // display color presets
  displayColorBoxes(
    document.getElementById("preset-colors"),
    defaultPresetColors
  );
  // display previous saved preset colors
  const customColorsString = localStorage.getItem("custom-colors");

  if (customColorsString) {
    customColors = JSON.parse(customColorsString);
    displayColorBoxes(document.getElementById("custom-colors"), customColors);
  }
};

// main or boot function, this function will take care of getting all the DOM references
function main() {
  // Dom References
  const generateRandomColorBtn = document.getElementById(
    "generate-random-color"
  );
  const colorModeHexInp = document.getElementById("input-hex");
  const colorSliderRed = document.getElementById("color-slider-red");
  const colorSliderGreen = document.getElementById("color-slider-green");
  const colorSliderBlue = document.getElementById("color-slider-blue");
  const copyToClipboardButton = document.getElementById("copy-to-clipboard");
  const presetColorsParent = document.getElementById("preset-colors");
  const customColorsParent = document.getElementById("custom-colors");
  const saveToCustomBtn = document.getElementById("save-to-custom");
  const bgPreview = document.getElementById("background-preview");
  const bgFileInput = document.getElementById("bg-file-input");
  const bgFileInputBtn = document.getElementById("bg-file-input-btn");
  const bgFileDeleteBtn = document.getElementById("bg-file-delete-btn");
  bgFileDeleteBtn.style.display = "none";
  const bgController = document.getElementById("bg-controller");
  bgController.style.display = "none";
  // event listeners
  generateRandomColorBtn.addEventListener(
    "click",
    handleGenerateRandomColorBtn
  );
  colorSliderRed.addEventListener(
    "change",
    handleColorSlider(colorSliderRed, colorSliderGreen, colorSliderBlue)
  );
  colorSliderGreen.addEventListener(
    "change",
    handleColorSlider(colorSliderRed, colorSliderGreen, colorSliderBlue)
  );
  colorSliderBlue.addEventListener(
    "change",
    handleColorSlider(colorSliderRed, colorSliderGreen, colorSliderBlue)
  );
  copyToClipboardButton.addEventListener("click", handleCopyToClipboard);
  presetColorsParent.addEventListener("click", handlePresetColorsParent);
  customColorsParent.addEventListener("click", handlePresetColorsParent);
  // changing color via hex color input field
  colorModeHexInp.addEventListener("keyup", handleColorModeHexInput);
  saveToCustomBtn.addEventListener(
    "click",
    handleSaveToCustomBtn(customColorsParent, colorModeHexInp)
  );
  bgFileInputBtn.addEventListener("click", function () {
    bgFileInput.click();
  });
  bgFileInput.addEventListener(
    "change",
    handleBgFileInput(bgPreview, bgFileDeleteBtn, bgController)
  );

  bgFileDeleteBtn.addEventListener(
    "click",
    handleBgFileDeleteBtn(bgPreview, bgFileDeleteBtn, bgController, bgFileInput)
  );
  document
    .getElementById("bg-size")
    .addEventListener("change", changeBackgroundPreferences);
  document
    .getElementById("bg-repeat")
    .addEventListener("change", changeBackgroundPreferences);
  document
    .getElementById("bg-position")
    .addEventListener("change", changeBackgroundPreferences);
  document
    .getElementById("bg-attachment")
    .addEventListener("change", changeBackgroundPreferences);
}

// event handlers
function handleGenerateRandomColorBtn() {
  const color = generateColorDecimal();
  updateColorCodeToDom(color);
}
function handleColorModeHexInput(e) {
  const hexColor = e.target.value;
  if (hexColor) {
    if (isValidHex(hexColor)) {
      const color = hexToDecimalColor(hexColor);
      updateColorCodeToDom(color);
    }
  }
}
function handleColorSlider(colorSliderRed, colorSliderGreen, colorSliderBlue) {
  return function () {
    const color = {
      red: parseInt(colorSliderRed.value),
      green: parseInt(colorSliderGreen.value),
      blue: parseInt(colorSliderBlue.value),
    };
    updateColorCodeToDom(color);
  };
}
function handleCopyToClipboard() {
  const colorModeRadios = document.getElementsByName("color-mode");

  const mode = getCheckedValueFromRadios(colorModeRadios);
  if (toastMessageContainer !== null) {
    removeToastMessage();
  }
  if (mode == null) {
    throw new Error("Invalid color mode radio input");
  } else if (mode == "hex") {
    const hexValue = document.getElementById("input-hex").value;
    if (hexValue && isValidHex(hexValue)) {
      navigator.clipboard.writeText(`#${hexValue}`);
      generateToastMessage(`#${hexValue} Copied`);
    } else {
      alert("Invalid Hex Code!, Unable to copy");
    }
  } else if (mode == "rgb") {
    const rgbValue = document.getElementById("input-rgb").value;
    if (rgbValue) {
      navigator.clipboard.writeText(`${rgbValue}`);
      generateToastMessage(`${rgbValue} Copied`);
    } else {
      alert("Invalid Hex Code!, Unable to copy");
    }
  }
}
function handlePresetColorsParent(event) {
  const child = event.target;
  if (child.className === "color-box") {
    navigator.clipboard.writeText(child.getAttribute("data-color"));
    generateToastMessage(
      `${child.getAttribute("data-color")} copied to clipboard`
    );
    copySound.volume = 0.3;
    copySound.play();
  }
}
function handleSaveToCustomBtn(customColorsParent, colorModeHexInp) {
  return function () {
    const color = `#${colorModeHexInp.value}`;
    if (customColors.includes(color)) {
      alert("The color has been  already Saved");
      return;
    }
    customColors.unshift(color);
    if (customColors.length > 24) {
      customColors = customColors.slice(0, 24);
    }
    localStorage.setItem("custom-colors", JSON.stringify(customColors));
    removeChildren(customColorsParent);
    displayColorBoxes(customColorsParent, customColors);
  };
}

function handleBgFileInput(bgPreview, bgFileDeleteBtn, bgController) {
  return function (event) {
    const file = event.target.files[0];
    const imgUrl = URL.createObjectURL(file);
    bgPreview.style.background = `url(${imgUrl})`;
    document.body.style.background = `url(${imgUrl})`;
    bgFileDeleteBtn.style.display = "inline";
    bgController.style.display = "block";
  };
}
function handleBgFileDeleteBtn(
  bgPreview,
  bgFileDeleteBtn,
  bgController,
  bgFileInput
) {
  return function (event) {
    bgPreview.style.background = `none`;
    document.body.style.background = `none`;
    bgPreview.style.backgroundColor = `#DDDEEE`;
    document.body.style.backgroundColor = `#DDDEEE`;
    bgFileDeleteBtn.style.display = "none";
    bgFileInput.value = null;
    bgController.style.display = "none";
  };
}
// DOM functions
/**
 * Remove already generated toast message
 */
function removeToastMessage() {
  toastMessageContainer.classList.remove("toast-message-slide-in");
  toastMessageContainer.classList.add("toast-message-slide-out");

  toastMessageContainer.addEventListener("animationend", function () {
    toastMessageContainer.remove();
    toastMessageContainer = null;
  });
}
/**
 * Generate and display a Toast Message
 * @param {string} msg
 */
function generateToastMessage(msg) {
  toastMessageContainer = document.createElement("div");
  toastMessageContainer.innerText = msg;
  toastMessageContainer.className = "toast-message toast-message-slide-in";

  toastMessageContainer.addEventListener("click", removeToastMessage);
  document.body.appendChild(toastMessageContainer);
  setTimeout(() => {
    removeToastMessage();
  }, 2000);
}
/**
 * find the check elements from a list of radio buttons
 * @param {Array} nodes
 * @returns {String | null}
 */
function getCheckedValueFromRadios(nodes) {
  let checkedValue = null;
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].checked) {
      checkedValue = nodes[i].value;
      break;
    }
  }
  return checkedValue;
}
/**
 *  Update dom elements with calculated color values
 * @param {object} color
 */

function updateColorCodeToDom(color) {
  const hexColor = generateHexColor(color);
  const rgbColor = generateRGBColor(color);

  document.getElementById("color-display").style.backgroundColor = hexColor;
  document.getElementById("input-hex").value = hexColor.slice(1);
  document.getElementById("input-rgb").value = rgbColor;
  document.getElementById("color-slider-red").value = color.red;
  document.getElementById("color-slider-red-label").innerText = color.red;
  document.getElementById("color-slider-green").value = color.green;
  document.getElementById("color-slider-green-label").innerText = color.green;
  document.getElementById("color-slider-blue").value = color.blue;
  document.getElementById("color-slider-blue-label").innerText = color.blue;
}
/**
 * generate div with class name color-box
 * @param {String} color
 * @returns {object}
 */
function generateColorBox(color) {
  const div = document.createElement("div");
  div.className = "color-box";
  div.style.backgroundColor = color;
  div.setAttribute("data-color", color);
  return div;
}
/**
 * Remove all children from a parent node
 * @param {Object} parentNode
 */
function removeChildren(parentNode) {
  let child = parentNode.lastElementChild;

  while (child) {
    parentNode.removeChild(child);
    child = parentNode.lastElementChild;
  }
}

/**
 * this function will create and append new color boxes to it's parent element
 * @param {Object} parent
 * @param {Array} colors
 */
function displayColorBoxes(parent, colors) {
  colors.forEach((color) => {
    if (!color) return;
    if (!isValidHex(color.slice(1))) return;
    const colorBox = generateColorBox(color);
    parent.appendChild(colorBox);
  });
}

function changeBackgroundPreferences() {
  document.body.style.backgroundSize = document.getElementById("bg-size").value;
  document.body.style.backgroundRepeat =
    document.getElementById("bg-repeat").value;
  document.body.style.backgroundPosition =
    document.getElementById("bg-position").value;
  document.body.style.backgroundAttachment =
    document.getElementById("bg-attachment").value;
}
// util functions

/**
 * Generate and return an object of three color decimal values
 * @returns {object}
 */
function generateColorDecimal() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return {
    red,
    green,
    blue,
  };
}

/**
 * take a color object of three values and return hexadecimal color code
 * @param {object} color
 * @returns {string}
 */
function generateHexColor({ red, green, blue }) {
  const getTwoCode = (value) => {
    const hex = value.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };

  return `#${getTwoCode(red)}${getTwoCode(green)}${getTwoCode(
    blue
  )}`.toUpperCase();
}

/**
 * take a color object of three values and return rbg color code
 * @param {object} color
 * @returns {string}
 */
function generateRGBColor({ red, green, blue }) {
  return `rgb(${red}, ${green}, ${blue})`;
}
/**
 * convert Hex to decimal color object
 * @param {string} hex
 * @returns {object}
 */
function hexToDecimalColor(hex) {
  const red = parseInt(hex.slice(0, 2), 16);
  const green = parseInt(hex.slice(2, 4), 16);
  const blue = parseInt(hex.slice(4), 16);
  return {
    red,
    green,
    blue,
  };
}

/**
 * validate hex color code
 * @param {string} color;
 * @returns {boolean}
 */
function isValidHex(color) {
  if (color.length !== 6) return false;
  return /^[0-9A-Fa-f]{6}$/i.test(color);
}
