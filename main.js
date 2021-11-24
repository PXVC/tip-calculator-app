// note: Elements from HTML file
let bill = document.getElementById('bill'),
	people = document.getElementById('people'),
	selections = document.querySelectorAll('.tip-selection'),
	tipInput = document.querySelector('.tip-input'),
	tip = document.getElementById('tip-total'),
	total = document.getElementById('total-bill'),
	btn = document.getElementById('controller-btn');

// note: Variables to storage user's bill, tip amount and number of people
let billAmount = 0,
	tipAmount = 0,
	numberOfPeople = 0;

let numberCheck = /[0-9]/;

// Tip amount
selections.forEach((selection, i) => {
	selection.addEventListener('click', () => {
		tipActive(i);
		tipInput = selection;
	});

	tipInput.addEventListener('click', () => {
		selection.classList.remove('active');
	});
});

const tipActive = (i) => {
	selections.forEach((selection) => selection.classList.remove('active'));
	selections[i].classList.add('active');
};

// Buttons
btn.addEventListener('click', () => {
	if (btn.textContent === 'CALCULATING') {
		billAmount = bill.value;
		numberOfPeople = people.value;
		tipAmount = tipInput.value;

		if (billAmount.match(numberCheck) && numberOfPeople.match(numberCheck)) {
			billAmount = parseInt(billAmount);
			numberOfPeople = parseInt(numberOfPeople);
			tipAmount = parseInt(tipAmount);

			let tipCalculationFormula =
				Math.round(((billAmount * (tipAmount / 100)) / numberOfPeople) * 100) / 100;
			let totalCalculationFormula =
				Math.round(((billAmount + tipAmount / 100) / numberOfPeople) * 100) / 100;

			tip.textContent = '$' + tipCalculationFormula.toString();
			total.textContent = '$' + totalCalculationFormula.toString();
			btn.textContent = 'RESET';
		} else {
			bill.value = '';
			people.value = '';
			selections.forEach((selection) => selection.classList.remove('active'));

			billAmount = 0;
			tipAmount = 0;
			numberOfPeople = 0;

			tip.textContent = '$0.00';
			total.textContent = '$0.00';
			btn.textContent = 'CALCULATING';
		}
	}

	btn.addEventListener('click', () => {
		if (btn.textContent === 'RESET') {
			bill.value = '';
			people.value = '';
			selections.forEach((selection) => selection.classList.remove('active'));

			billAmount = 0;
			tipAmount = 0;
			numberOfPeople = 0;

			tip.textContent = '$0.00';
			total.textContent = '$0.00';
			btn.textContent = 'CALCULATING';
		}
	});
});
