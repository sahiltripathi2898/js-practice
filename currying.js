////// Function currying is basically using or extending that function for other purposes also

// Ex 1 using Bind

let multiply = function (x, y) {
	console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2); // x=3
multiplyByTwo(3); //y=3 , will output 6

// Ex 2 using Closure

let addition = function (x) {
	return function (y) {
		console.log(x + y);
	};
};

let additionByTwo = addition(2); // x=2
additionByTwo(3); //y=3 , output is 5
