const names = ['Elene', 'Sasha', 'Max', 'Julia', 'Alex']
const targetName = 'Max'
names.push('Marcin');
names.unshift('Ksenia');



//console.log('Names:', names.reverse());
//console.log('Names:', names);
console.log('Names:', names.toReversed());
console.log('Names:', names);
//console.log('Names:', names.sort());
//console.log('Names:', names);
console.log('Names:', names.toSorted());
console.log('Names:', names);
//console.log('Names:', names.splice(2, 1));
//console.log('Names:', names);
console.log('Names:', names.toSpliced(0, 1));
console.log('Names:', names);
const index = names.indexOf(targetName);
//names[index] = 'Mad Max';
//console.log(names[index], index, names);
const newNames = names.with(index, 'Mad Max');
console.log(names);
console.log(newNames);

const capitalNames = names.map(function
	(name, index) {
	if (index === 3) return 'Mad Max';
	return name
}
)
console.log(names, capitalNames)