// Globals
const budgetInput = document.getElementById('budget-input');
const itemInput = document.getElementById('item-input');
const costInput = document.getElementById('cost-input');

const btnBudget = document.getElementById('btn-budget');
const btnCost = document.getElementById('btn-cost');
const btnReset = document.getElementById('btn-reset');

const details = document.getElementById('details');
const itemsContent = document.getElementById('items-content');
const items = document.querySelectorAll('.item');
const costs = document.querySelectorAll('.cost');

const totalBudget = document.getElementById('total-budget');
const totalCost = document.getElementById('total-cost');
const remaining = document.getElementById('remaining');

// onload function
window.onload = () => {
	main();
};

// main function
function main() {
	budgetInput.focus();
	btnBudget.addEventListener('click', btnBudgetHandler);
	btnCost.addEventListener('click', btnCostHandler);
	btnReset.addEventListener('click', btnResetHandler);
}

// event handlers

function btnBudgetHandler() {
	btnReset.disabled = false;
	if (budgetInput.value !== '') {
		totalBudget.innerHTML = parseFloat(budgetInput.value).toFixed(2);
		budgetInput.value = '';
		budgetInput.disabled = true;
		btnBudget.disabled = true;
	} else {
		alert('Please Enter your budget.');
	}
}

function btnCostHandler() {
	if (totalBudget.innerText === '0.00') {
		alert('Please enter your budget first');
	} else if (itemInput.value === '' || costInput.value === '') {
		alert('Please enter the item name and its cost.');
	} else {
		const itemsContentDiv = document.createElement('div');
		itemsContentDiv.className =
			'items d-flex justify-content-between align-items-center mb-2';
		const itemDiv = document.createElement('div');
		const costDiv = document.createElement('div');
		const deleteBtn = document.createElement('button');
		itemDiv.className = 'item text-primary fw-bold';
		costDiv.className = 'cost text-primary fw-bold';
		deleteBtn.className = 'btn btn-danger btn-sm';

		let sum = +totalCost.innerText;

		sum += parseFloat(costInput.value);

		if (sum <= +totalBudget.innerHTML) {
			itemDiv.innerHTML = itemInput.value;
			costDiv.innerHTML = parseFloat(costInput.value).toFixed(2);
			deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
			itemsContentDiv.append(deleteBtn, itemDiv, costDiv);
			details.append(itemsContentDiv);
			itemInput.value = '';
			costInput.value = '';
			totalCost.innerHTML = parseFloat(sum).toFixed(2);

			remaining.innerHTML = parseFloat(
				+totalBudget.innerText - +totalCost.innerText
			).toFixed(2);

			if (+remaining.innerHTML === 0) {
				itemInput.disabled = true;
				costInput.disabled = true;
				btnCost.disabled = true;
			}

			deleteBtn.addEventListener('click', () => {
				itemsContentDiv.remove();
				itemInput.disabled = false;
				costInput.disabled = false;
				btnCost.disabled = false;
				totalCost.innerHTML = parseFloat(
					+totalCost.innerHTML - +costDiv.innerHTML
				).toFixed(2);
				remaining.innerHTML = parseFloat(
					+totalBudget.innerText - +totalCost.innerText
				).toFixed(2);
			});
		} else {
			alert('You crossed your budget');
		}
	}
}

function btnResetHandler() {
	budgetInput.disabled = false;
	btnBudget.disabled = false;
	itemInput.disabled = false;
	costInput.disabled = false;
	btnCost.disabled = false;
	details.innerHTML = '';
	totalBudget.innerText = '0.00';
	totalCost.innerText = '0.00';
	remaining.innerText = '0.00';
	btnReset.disabled = true;
	budgetInput.focus();
}
