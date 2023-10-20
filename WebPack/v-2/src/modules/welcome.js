const inputEl = document.getElementById('nameInput');

const outputEl = document.getElementById('nameWelcome');

const welcome = userName => `Welcome ${userName}, I hope you feel good and still go to your goal`;

let timerId;
const delay = (f, t) => clearTimeout(timerId) || (timerId = setTimeout(f, t));

const printText = (text, el, i = 0) => {
	el.textContent = text.slice(0, i);
	if (i < text.length) {
		const randomDelay = Math.floor(Math.random() * (300 - 20 + 1) + 20)
		delay(() => printText(text, el, i + 1), randomDelay)
	}
};

inputEl.addEventListener('input', (e) => {
	e.preventDefault();
	delay(() => {
		const value = inputEl.value.trim();
		const formattedValue = value.charAt(0).toUpperCase() + value.slice(1)
		value === '' ? outputEl.textContent = '' : printText(welcome(formattedValue), outputEl);
	}, 1500)
});
