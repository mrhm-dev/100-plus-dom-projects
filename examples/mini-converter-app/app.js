/*
############################################################
Project Name: Mini Length Converter App
Description: This app can convert different types of length SI units.
Date: 21/02/2022
Author: Khaled Md. Saifullah
############################################################
*/

// Input Number
const inputNumber = () => {
  const inputNum = document.getElementById("num-input").value;
  return inputNum;
};

// Millimeter to Centimeter Conversion
document.getElementById("mmToCmBtn").addEventListener("click", () => {
  const centiMeter = calculation(0.1);
  console.log(centiMeter, typeof centiMeter);
  showResult(centiMeter, "Millimeter", "Centimeter");
  clearInput();
});

// Centimeter to Millimeter Conversion
document.getElementById("cmToMmBtn").addEventListener("click", () => {
  const millimeterMeter = calculation(10);
  console.log(millimeterMeter, typeof millimeterMeter);
  showResult(millimeterMeter, "Centimeter", "Millimeter");
  clearInput();
});

// Centimeter to Meter Conversion
document.getElementById("cmToMeterBtn").addEventListener("click", () => {
  const meter = calculation(0.01);
  console.log(meter, typeof meter);
  showResult(meter, "Centimeter", "Meter");
  clearInput();
});

// Meter to Centimeter Conversion
document.getElementById("mToCmBtn").addEventListener("click", () => {
  const centiMeter = calculation(100);
  console.log(centiMeter, typeof centiMeter);
  showResult(centiMeter, "Meter", "Centimeter");
  clearInput();
});

// Millimeter to Meter Conversion
document.getElementById("mmToMeterBtn").addEventListener("click", () => {
  const meter = calculation(0.001);
  console.log(meter, typeof meter);
  showResult(meter, "Millimeter", "Meter");
  clearInput();
});

// Meter to Millimeter Conversion
document.getElementById("meterToMmBtn").addEventListener("click", () => {
  const milliMeter = calculation(1000);
  console.log(milliMeter, typeof milliMeter);
  showResult(milliMeter, "Meter", "Millimeter");
  clearInput();
});

// Millimeter to Kilometer Conversion
document.getElementById("mmToKmBtn").addEventListener("click", () => {
  const kilometer = calculation(0.000001);
  console.log(kilometer, typeof kilometer);
  showResult(kilometer, "Millimeter", "Kilometer");
  clearInput();
});

// Kilometer to Millimeter Conversion
document.getElementById("kmToMmBtn").addEventListener("click", () => {
  const millimeter = calculation(1000000);
  console.log(millimeter, typeof millimeter);
  showResult(millimeter, "Kilometer", "Millimeter");
  clearInput();
});

// Centimeter to Kilometer Conversion
document.getElementById("cmToKmBtn").addEventListener("click", () => {
  const kiloMeter = calculation(0.00001);
  console.log(kiloMeter, typeof kiloMeter);
  showResult(kiloMeter, "Centimeter", "Kilometer");
  clearInput();
});

// Kilometer to Centimeter Conversion
document.getElementById("kmToCmBtn").addEventListener("click", () => {
  const kiloMeter = calculation(100000);
  console.log(kiloMeter, typeof kiloMeter);
  showResult(kiloMeter, "Kilometer", "Centimeter");
  clearInput();
});

// Kilometer to Meter Conversion
document.getElementById("kmToMeterBtn").addEventListener("click", () => {
  const meter = calculation(1000);
  console.log(meter, typeof meter);
  showResult(meter, "Kilometer", "Meter");
  clearInput();
});

// Meter to Kilometer Conversion
document.getElementById("meterToKmBtn").addEventListener("click", () => {
  const kiloMeter = calculation(0.001);
  console.log(kiloMeter, typeof kiloMeter);
  showResult(kiloMeter, "Meter", "KiloMeter");
  clearInput();
});

// Show Result
const showResult = (finalOutput, convertFrom, convertTo) => {
  document.getElementById("show-output").style.display = "block";
  const output = document.createElement("p");
  output.classList.add("output-text");
  const input = inputNumber();
  output.innerText = `${input} ${convertFrom} = ${finalOutput} ${convertTo}`;
  document.getElementById("show-output").appendChild(output);
};

// Clear Input Field
const clearInput = () => {
  document.getElementById("num-input").value = "";
};

// All Conversion Calculation Work
const calculation = (unitNumber) => {
  const number = inputNumber();
  if (number > 0) {
    const result = Number((number * unitNumber).toFixed(6));
    return result;
  } else {
    alert("Wrong Input ❌ Please Try again");
  }
};
