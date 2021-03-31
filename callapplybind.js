let name = {
	a: 'sahil',
};

let name2 = {
	a: 'ankur',
};

let fullName = function (city, college) {
	console.log(this.a + ' ' + college + ' ' + city);
};

// call
fullName.call(name, 'Jaipur', 'NIT');

//apply
fullName.apply(name, ['Jaipur', 'NIT']);

//bind

let fullNameValue = fullName.bind(name, 'Jaipur', 'NIT');
fullNameValue();
