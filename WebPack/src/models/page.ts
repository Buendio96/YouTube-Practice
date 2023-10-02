
export default class Page {
	private title: string;
	private img: string;
	private date: Date;
	private container: HTMLElement | null;
	constructor(title: string, img: string) {
		this.title = title;
		this.img = img;
		this.date = new Date();
		this.container = document.getElementById('container');
	};
	getTime() {
		return this.date.toLocaleTimeString();
	};

	createContent() {
		const isDate = this.date.toLocaleDateString();
		const isDay = this.date.toLocaleDateString('en-US', { weekday: 'long' });
		const content = `
				<img src=${this.img} class="image" alt="Some picture">
				<div class="content">
					<h2 class="title">${this.title}</h2>
					<div class="box">
						<span class="dey">${isDay}</span>
						<span class="date">${isDate}</span>
						<span id="time" class="time"></span>
					</div>
				</div>
			
			`
		return content
	};
	initClock() {
		const timeEl = document.getElementById('time');
		if (timeEl) {
			timeEl.textContent = new Date().toLocaleTimeString()
		}
	}
	render() {
		const content = this.createContent();
		if (this.container) { this.container.insertAdjacentHTML('beforeend', content) };
		this.initClock()
		setInterval(() => this.initClock(), 1000)
	};

	init() {
		document.addEventListener('DOMContentLoaded', () => {
			this.render();
		});
	}
};

