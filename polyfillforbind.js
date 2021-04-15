///// Polyfill for Bind function
// Making own bind function , because bind may not be available in some browsers

let obj1 = {
	firstName: 'Sahil',
	lastName: 'Tripathi',
};

let printName = function () {
	console.log(this.firstName + ' ' + this.lastName);
};

let normalBind = printName.bind(obj1);
normalBind();
