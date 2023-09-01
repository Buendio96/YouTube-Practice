console.log('');
console.log('');
console.log('FUNCTIONS =========== >');

console.log('Function declaration');
function greet(name) {
	return console.log('Hello - ', name)
};
greet('Barby');
console.log('');
//=========================
console.log('Function Expression');
const greetI = function (name) {
	console.log('Hello - ', name)
};
greetI('Ken');
console.log('');
//=========================
console.log('TimeOut Functions');
setTimeout(function () {
	console.log(`Take pause!!!`);
}, 500);
//let counter = 4;
//const interval = setInterval(function () {
//	if (counter === 1) {
//		clearInterval(interval)
///} else {
//		console.log(--counter)
//	}
//}, 500);
console.log('');
//=========================
console.log('Arrow Functions');
const arrow = (name, age) => {
	console.log(`${name} ${age}y.o.`)
};
arrow('Sasha', 27);
console.log('');
console.log('Difference between FuncDec and FuncExpr');
function powI(num, exp) {
	return Math.pow(num, exp)
};
const powII = (num, exp) => Math.pow(num, exp);
console.log(`FuncDec - ${powI(4, 6)}, FuncExpr - ${powII(3, 10)}`)
console.log('');
//===========================
console.log('Default Parameters');
const summ = (a = 40, b = a / 1.5) => a + b
console.log(summ(40, 2));
console.log(summ());

function sumAll(...nums) {
	console.log(nums);
	/* 	let res = 0;
		for (let num of nums) {
			res += num
		} */
	return nums.reduce((acc, cur) => (acc += cur), 0);
};
console.log(sumAll(1, 2, 3, 4, 5, 25, 10));
console.log('');
//=========================
console.log('Closures');

function createNum(x) {
	let sum = x * 3.15
	return function (x) {
		return sum * x
	};
};
const showX = createNum(55);
console.log(showX(4));
