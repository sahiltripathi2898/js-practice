let name = {
	a: 'sahil',
};

let fullName = function () {
	console.log(this);
};

let name2 = {
	a: 'ankur',
};

//fullName();

let x = { ...name, class: 'classplus' };
console.log(x);
