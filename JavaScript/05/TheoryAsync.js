console.log('');
console.log('');
console.log('ASYNC (Event loop) ========= >');

setTimeout(() => {
	console.log('After 1s.');
}, 1000);
setTimeout(() => {
	console.log('After 2s.');
}, 2000);
//let count = 0
//setInterval(() => {
//	console.log('tick', ++count)
//}, 1000);

async function delay(callback, time = 3000) {
	setTimeout(callback, time)
};
/* 
delay(() => {
	console.log('Timeout')
});
 */
console.log('');
console.log('');
console.log('PROMISES ====== >');

const newArray = [1, 3, 5, 7, 9];

/* const newDelay = (time = 4000, array) => {
	const promise = new Promise((resolve, rejecte) => {
		setTimeout(() => {
			//resolve(array)
			rejecte('Error 404')
		}, time)
	});
	return promise;
};
 */
/* 
newDelay(3000, newArray)
	.then((x) => {
		console.log('Async', x);
		return x.map((x) => x ** 4)
	})
	.then((data) => {
		console.log(data)
	}).catch((e) => {
		console.log(e)
	}) 
	*/


const getData = () => new Promise((resolve) =>
	resolve([2, 4, 6, 8, 10]))

async function asyncExample() {
	try {
		await delay(5000)
		const data = await getData()
		console.log(data)
	} catch (e) {
		console.log(e)
	} finally {
		console.log('Finally')
	}
};


asyncExample()
