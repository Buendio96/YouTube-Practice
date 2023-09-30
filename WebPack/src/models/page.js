
export default class Page {
	constructor(title, img) {
		this.title = title;
		this.img = img;
		this.date = new Date();
		this.container = document.getElementById('container');
	};

	createContent() {
		const title = this.title;
		const isDate = this.date.toLocaleDateString();
		const isDay = this.date.toLocaleDateString('en-US', { weekday: 'long' });
		const content = `
			<div class="content">
				<h2 class="title">${title}</h2>
				<div class="box">
				<span class="dey">${isDay}</span>
				<span class="date">${isDate}</span>
					<span class="time">${this.getTime()}</span>
				</div>
			</div>
			`
		return content
	};
	getTime() {
		setInterval(() => {
			const isTime = new Date().toLocaleTimeString();
			const timeElement = document.querySelector('.time');
			if (timeElement) {
				timeElement.textContent = isTime;
			}
		}, 1000);
	};
	render() {
		const image = this.img;
		const content = this.createContent();
		const imageEl = document.createElement('img');

		imageEl.classList.add('image')
		imageEl.src = image;
		imageEl.alt = 'Some image';

		this.container.appendChild(imageEl);
		this.container.insertAdjacentHTML('beforeend', content);

	};

	init() {
		document.addEventListener('DOMContentLoaded', () => {
			this.render();
		});
	}
};

