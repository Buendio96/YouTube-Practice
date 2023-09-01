console.log('');
console.log('');
console.log('DATE =========== >');
const now = new Date();
const start = new Date(1000 * 60 * 60 * 24 * 365);
const date = new Date(1996, 4, 18, 16, 20, 32);
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(start);
console.log(date);
console.log('');
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());

const outputDate = document.getElementById('output');
const fullBtn = document.getElementById('full');
const dateBtn = document.getElementById('date');
const timeBtn = document.getElementById('time');

let mode = 'time'
function format(formatMode) {
	const nowDate = new Date();
	switch (formatMode) {
		case 'time': return nowDate.toLocaleTimeString() +
			'.' + nowDate.getMilliseconds() + 'ms'
		case 'date': return nowDate.toLocaleDateString()
		case 'full': return nowDate.toLocaleTimeString() +
			' ' + nowDate.toLocaleDateString()
	}
};
function upDate() {
	outputDate.textContent = format(mode)
};
setInterval(upDate, 1000);

function bindMode(name) {
	return function () {
		mode = name
		upDate();
	};
}
upDate();

fullBtn.onclick = bindMode('full');
dateBtn.onclick = bindMode('date');
timeBtn.onclick = bindMode('time');
