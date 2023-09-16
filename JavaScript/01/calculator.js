const firstInput = document.getElementById('firstValue');
const secondInput = document.getElementById('secondValue');
const plusEl = document.getElementById('plus');
const minusEl = document.getElementById('minus');
const multiplyEl = document.getElementById('multiply');
const divideEl = document.getElementById('divide');
const showResult = document.getElementById('showResult');
const result = document.getElementById('result');

let action;

plusEl.onclick = () => {
	action = '+'
};
minusEl.onclick = () => {
	action = '-'
};
multiplyEl.onclick = () => {
	action = '*'
};
divideEl.onclick = () => {
	action = '/'
};

function printResult(arg) {
	if (arg > 0) result.style.color = 'green'
	else result.style.color = 'red';
	result.textContent = arg;
};

function computeNembersWithAction(first, second, actionEL) {
	const firstValue = Number(first.value);
	const secondValue = Number(second.value);
	if (actionEL == '+') return firstValue + secondValue;
	if (actionEL == '-') return firstValue - secondValue;
	if (actionEL == '*') return firstValue * secondValue;
	if (actionEL == '/') return firstValue / secondValue;
}

showResult.onclick = () => {
	const result = computeNembersWithAction(firstInput, secondInput, action);
	printResult(result)
};