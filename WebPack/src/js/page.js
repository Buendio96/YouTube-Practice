export default class Page {
	constructor(title, img) {
		this.title = title;
		this.img = img;
		this.date = new Date();
		this.container = document.getElementById('container');
	};
	getTime() {
		setInterval(() => {
			const isTime = new Date().toLocaleTimeString();
			const timeElement = document.querySelector('.time');
			if (timeElement) {
				timeElement.textContent = isTime;
			}
		}, 1000);
	}
	createContent() {
		const title = this.title;
		const isDate = this.date.toLocaleDateString();
		const isDay = this.date.toLocaleDateString(undefined, { weekday: 'long' });
		const content = `
			<div class="content">
				<h2>${title}</h2>
				<div class="box">
					<span class="date">${isDate}</span>
					<span class="dey">${isDay}</span>
					<span class="time">${this.getTime()}</span>
				</div>
			</div>
		`
		return content
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
		document.addEventListener('DOMContentLoaded', function () {
			this.render();
		}.bind(this));
	}
};

