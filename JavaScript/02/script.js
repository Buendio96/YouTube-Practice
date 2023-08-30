const inputEl = document.getElementById('mainInput');
const createEl = document.getElementById('create');
const listEl = document.getElementById('list');

/* const notes = [
	'Do something',
	'Do something else',
	'Make solanka soup',
	`You must make your homework and improve your skills`
];
const render = (array) => {
	for (let note of array) {
		listEl.insertAdjacentHTML('afterbegin', getNoteTemplate(note));
	}
};
const getNoteTemplate = (title) => {
	return `
		<li class="list__item">
		<span class="list__item-name">
		${title}
		</span>
		<div class="list__control">
			<span><img class="icon" src="/src/true.png" alt="Good"></span>
			<span><img class="icon" src="/src/false.png" alt="Bad"></span>
		</div>
	</li>
	`
}


render(notes); */

const newNotes = [
	{
		title: 'Do something',
		completed: true
	},
	{
		title: 'Do something else',
		completed: true
	},
	{
		title: 'Make solanka soup',
		completed: false
	},
	{
		title: 'You must make your homework and improve your skills',
		completed: true
	},
];

const getNewNoteTemplate = (object, i) => {
	return `
		<li class="list__item">
		<span class="list__item-name ${object.completed ? "list__completed" : ""}">
		${object.title}
		</span>
		<div class="list__control">
			<span><img data-index="${i}" data-type="toogle" class="icon" src="/src/true.png" alt="Good"></span>
			<span><img data-index="${i}" data-type="remove" class="icon" src="/src/false.png" alt="Bad"></span>
		</div>
	</li>
	`
}


const newRender = (array) => {
	listEl.innerHTML = '';
	if (array.length === 0) {
		listEl.innerHTML = '<p class="missing">Missing elements</p>'
	}
	for (i = 0; i < array.length; i++) {
		listEl.insertAdjacentHTML('afterbegin', getNewNoteTemplate(array[i], i));
	}
};


newRender(newNotes)

listEl.onclick = (event) => {
	if (event.target.dataset.index) {
		const index = Number(event.target.dataset.index);
		const type = event.target.dataset.type;
		if (type === 'toogle') {
			newNotes[index].completed = !newNotes[index].completed
		} else if (type === 'remove') {
			newNotes.splice(index, 1);
		}
	};
	newRender(newNotes)
};
createEl.onclick = () => {
	if (inputEl.value === '') return;
	const newNote = {
		title: inputEl.value,
		completed: false
	};
	newNotes.push(newNote);
	newRender(newNotes)
	inputEl.value = '';
};