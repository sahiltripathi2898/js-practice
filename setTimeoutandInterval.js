//setTimeout
function call(first, second) {
	console.log(first, second);
}
//Function name , time , parameters
setTimeout(call, 1000);
//setTimeout(call()) --- Wrong don't call the function just pass the function

//With arrow function we cannot pass arguements
setTimeout(() => {
	console.log('Arrow Function');
}, 1000);
