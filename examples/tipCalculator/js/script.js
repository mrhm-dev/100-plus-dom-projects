let total_bill = document.getElementById("total-bill");
let people_number = document.getElementById("people-number");
let tip_per_person = document.getElementById("tip-per-person");
let total_per_person = document.getElementById("total-per-person");
let custom_tip = document.getElementById("custom-tip");
let reset = document.getElementById("reset");

function calculateTips(tipPercent, msg = "btn") {
  if (msg != "custom") {
    if (custom_tip.style.display != "none") {
      custom_tip.style.display = "none";
    }
  }

  if (total_bill.value == "" && people_number.value == "") {
    alert("Please input total bill & people number.");
    return;
  } else if (total_bill.value == "") {
    alert("Please input total bill.");
    return;
  } else if (people_number.value == "") {
    alert("Please input people number.");
    return;
  }

  let totalPeople = Number(people_number.value);
  let totalBill = Number(total_bill.value);
  let totalTip = (totalBill * tipPercent) / 100;

  let result = {
    tip_per_person: totalTip / totalPeople,
    total_per_person: (totalTip + totalBill) / totalPeople,
  };

  tip_per_person.textContent = "$" + result.tip_per_person;
  total_per_person.textContent = "$" + result.total_per_person;
}

function enableCustomTip() {
  custom_tip.style.display = "block";
}

function resetCalculator() {
  total_bill.value = "";
  people_number.value = "";

  tip_per_person.textContent = "$";
  total_per_person.textContent = "$";
}

function onChangeTest(val) {
  console.log(val);
}
