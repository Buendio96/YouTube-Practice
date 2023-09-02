console.log('');
console.log('');
console.log('OBJECTS =========== >');

const person = {
	firstName: 'Ola',
	lastName: 'Bukowski',
	age: 59,
	marriad: true,
	lang: [
		'ru', 'en', 'pl'
	],
	address: {
		city: 'London',
		srteet: 'St.Nicolla',
		num: 10,
	},
	info() {
		console.log('Person full name', this.firstName, this.lastName)
	}
};
//delete person.lastName
console.log(person);
person.info()

const { age: newAge = 25, marriad: isMarried, lang: hasLang } = person

console.log(newAge, isMarried, hasLang);

for (let key in person) {
	if (person.hasOwnProperty(key)) {
		console.log(person[key]);
	};
};

const keys = Object.keys(person)
keys.forEach(key => console.log(person[key]))

const logger = {
	keys() {
		console.log('Object keys', Object.keys(this))
	},
	keysAndValues() {
		Object.keys(this).forEach(key => {
			console.log('Key: ', key);
			console.log('Value: ', this[key])
		})
	}
};

logger.keys.bind(person);
logger.keys.call(person);
logger.keys.apply(person);
console.log('');
console.log('');
console.log('CLASSES ============ >');

class Human {
	static isHuman = true;

	humanGreet() {
		console.log('Human from greeet')
	}
}

class Person extends Human {
	constructor(name, age) {
		super();
		this.name = name ?? 'Undefined name';
		this.age = age ?? 'Undefined age';
		this.isHuman = this.isHuman
	}
	sayHi() {
		if (this.isHuman) console.log(`Hi ${this.name}`)
		else console.log('Isn\'t human')
	}

};

const personI = new Person(
	'Sasha'
);
const personII = new Person(
	'Julia'
);
console.log(Person.isHuman);
personI.humanGreet();
personII.sayHi();
