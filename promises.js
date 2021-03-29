//callback

function loadScript(src, callback) {
	//does something
	let a = src + 'd';
	callback();
}

loadScript('abc', () => {
	console.log('Callback');
	loadScript('uvw', () => {
		console.log('2');
	});
});

// promises
let promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('Done !');
	}, 1000);
})
	.then((res) => console.log(res))
	.catch((err) => console.log(err));

console.log(promise);
