console.log('');
console.log('');
console.log('STRINGS =========== >');
const firstName = 'Sergiiko';
const age = 13;

someFuncA = (x) => {
	return x > 18 ? 'I can drive' : 'I can\'t drive'
}
//old wey
const output = 'Hi, i`am ' + firstName + ' and i have ' + age + 'y.o.'
//new wey
const newOutput = `Hi, i'am ${firstName} i have ${age}y.o. and ${someFuncA(age)}`
console.log(output);
console.log(newOutput);
console.log('');
console.log(firstName.length);
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());
console.log(firstName.charAt(3));
console.log(firstName.indexOf('e'));
console.log(firstName.toLowerCase().startsWith('s'));
console.log(firstName.toLowerCase().endsWith('k'));
console.log(firstName.repeat(5));

const password = '   more tabs     '

console.log(password.trim())