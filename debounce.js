/////////Debounce in js
// After a specified time only the apiCall should be made ,
//if another apiCall is made before the time then that apiCall should overide the earlier one

///<input type="text" onkeyup="betterFunction()">

let c = 0;
function apiCall() {
	console.log('API calls', c++);
}

const deBounce = (func, delay) => {
	let timer;
	return function () {
		clearTimeout(timer);
		timer = setTimeout(() => {
			apiCall();
		}, delay);
	};
};

const betterFunction = deBounce(apiCall, 600);
