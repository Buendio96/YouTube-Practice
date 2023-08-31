const names = ['Elene', 'Sasha', 'Max', 'Julia', 'Alex']
const targetName = 'Max'
names.push('Marcin');
names.unshift('Ksenia');



//console.log('Names:', names.reverse());
//console.log('Names:', names);
console.log('Old reversed names:', names.toReversed());
console.log('New reversed names:', names);
console.log('');
//console.log('Names:', names.sort());
//console.log('Names:', names);
console.log('Old sorted names:', names.toSorted());
console.log('New sorted names:', names);
console.log('');
//console.log('Names:', names.splice(2, 1));
//console.log('Names:', names);
console.log('Old spliced names:', names.toSpliced(0, 1));
console.log('New spliced names:', names);
console.log('');

const index = names.indexOf(targetName);
names[index] = 'Mad Max (Original just Max)';
console.log(names[index] + ' ' + index, names);
console.log('');

const newNames = names.with(index, 'MAD MAX');
console.log(names);
console.log(newNames);
console.log('');

const capitalNames = names.map(function
	(name, index) {
	if (index === 3) return 'Max';
	return name
});

console.log(capitalNames);
console.log(names);

const people = [
	{ name: 'Vlad', budget: 1600 },
	{ name: 'Ola', budget: 4100 },
	{ name: 'Justin', budget: 3510 },
	{ name: 'Enrica', budget: 2900 },
	{ name: 'Jack', budget: 8200 },
];
console.log('');

let findedPerson;
//Bad way
for (let person of people) {
	if (person.budget === 2900) findedPerson = person;
}
//Good way
const findedPersonI = people.find(function (person) {
	return person.budget > 1000
});
const findedPersonII = people.find((p) => p.name === 'Justin');
const indexPersonI = people.findIndex(function (person) {
	return person.budget > 1000
});

console.log(findedPerson.name);
console.log(findedPersonI.name, indexPersonI);
console.log(findedPersonII);
console.log('');

const richPeople = people.filter((p) => p.budget > 3000)
let sum = 0;
richPeople.forEach(p => {
	sum += p.budget;
});
const sumI = people
	.filter((p) => p.budget > 3000)
	.map(p => p.budget)
	.reduce((acc, p) => acc + p, 0)

console.log(richPeople, sum)
console.log(sumI)
console.log('')

const string = 'Hi, i`m Sasha';
const reversedI = string
	.toUpperCase()
	.split('')
	.toReversed()
	.join('!')
	.split('')
	.filter(c => c !== '!')
	.join('')
	.toLowerCase()
	;

console.log(reversedI);
console.log('');
