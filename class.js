class User {
	constructor(name) {
		this.name = name;
	}
	sayHi() {
		console.log(this.name);
	}
}

function User(name) {
	this.name = name;
}

User.prototype.sayHi = function () {
	console.log(this.name);
};
