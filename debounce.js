/////////Debounce in js
// After a specified time only the apiCall should be made ,
//if another apiCall is made before the time then that apiCall should overide the earlier one

function deBounce(time) {
	let timer;
	timer = setTimeout(() => {
		apiCall();
	}, time);
}
function apiCall(str) {
	console.log(str + ' ' + 'debounce ');
}

let bounced = deBounce(2000);

bounced('A');
bounced('B');

setTimeout(() => {
	bounced('C');
}, 1000);

////

function debounce(func, timeout = 300) {
	let timer;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, args);
		}, timeout);
	};
}
function saveInput() {
	console.log('Saving data');
}
const processChange = debounce(() => saveInput());
