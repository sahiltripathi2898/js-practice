///// Polyfill for Bind function
// Making own bind function , because bind may not be available in some browsers

let name = {
	firstName: 'Sahil',
	lastName: 'Tripathi',
};

let printName = function () {
	console.log(this.firstName + ' ' + this.lastName);
};

// Normal bind function
let normalBind = printName.bind(name);
normalBind();

// Self made bind function
// What we want -> let selfBind = printName.myBind(name);

// myBind should be available to all functions , so add it in functions prototypre
Function.prototype.myBind = function (...args) {
	// here 'this' will point to the printName method which is called upon
	let currMethod = this;

	// Will return a function , since bind functions return a function
	return function () {
		currMethod.call(args[0]);
	};
};

let selfBind = printName.myBind(name);
selfBind();
