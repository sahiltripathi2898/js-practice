//window.addEventListener('resize', expensive);
//To make API calls after a fixed specific time
//Debounce makes api calls after a delay in action , eg keyup

const expensive = () => {
	console.log('Expensive resize');
};

const throttle = function (func, delay) {
	let flag = true;
	return function () {
		if (flag) {
			func();
			flag = false;
			setTimeout(() => {
				flag = true;
			}, delay);
		}
	};
};

const betterExpensive = throttle(expensive, 300);

//Calling the betterExpensive function

// Every 100 milisecond
let timer = setInterval(() => {
	betterExpensive();
}, 100);

setTimeout(() => {
	clearInterval(timer);
}, 1000);
