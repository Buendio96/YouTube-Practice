console.log('');
console.log('');
console.log('');
console.log('NUMBERS ================= >');
console.log(Math.pow(3, 4));
console.log(Number.isFinite(1 / 0));
console.log(23 / undefined);//false
console.log('');
const weird = 888 / undefined;
console.log(Number.isNaN(weird))//true

const strInt = '42'
const strFloat = '42.43'
console.log('');
console.log(Number(strInt));
console.log(Number(strFloat));
console.log('');
console.log(parseInt(strInt));
console.log(parseFloat(strFloat));
console.log(+strInt, +strFloat);
console.log('');
console.log(+(0.1 + 0.2).toFixed(1));
console.log('');
//BigInt
console.log(BigInt(Number.MAX_SAFE_INTEGER)
	+ 168746598n);
console.log(parseInt(10n) - 10);
console.log(parseInt(10n - BigInt(8)));
//Math
const num = 31.1

console.log(Math.E);
console.log(Math.PI);
console.log(Math.sqrt(25));
console.log(Math.abs(-65));
console.log(Math.max(1312, 131213123, 1231, 231231234, 31321));
console.log(Math.min(1312, 131213123, 1231, 231231234, 31321));
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.trunc(num));
console.log(2 * Math.random());

getRandomId = (min, max) => {
	return Math.floor(
		Math.random() *
		(max - min + 1) + min
	);
};
console.log(getRandomId(100, 1000));