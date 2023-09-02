const filterEl = document.getElementById('filter');
const listOfUsers = document.getElementById('usersList');

const API = 'https://jsonplaceholder.typicode.com/users';
let USERS = [];
async function getDataFromApi(api) {
	listOfUsers.innerHTML = 'Loading...';
	try {
		const resp = await fetch(api);
		data = await resp.json();
		setTimeout(() => {
			USERS = data
			render(data)
		}, 2000)
	} catch (error) {
		listOfUsers.style.color = '#a40123';
		listOfUsers.style.fontSize = '20px';
		listOfUsers.innerHTML = 'Failed to fetch';
	}
}
getDataFromApi(API);

filterEl.addEventListener('input', (evt) => {
	const value = evt.target.value.toLowerCase();
	const filtredUsers = USERS.filter((user) => user.name.toLowerCase().includes(value));
	render(filtredUsers);
});

function render(users = []) {
	if (users.length === 0) listOfUsers.innerHTML = 'No matched users!'
	else {
		const html = users.map(toHTML).join('');
		listOfUsers.innerHTML = html;
	};
};
function toHTML(user) {
	return `
	<li class="users-list__item">${user.name}</li>
	`;
};