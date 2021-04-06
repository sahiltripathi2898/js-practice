// For each
let a = [1, 2, 3, 4, 5];
let sum = 0;
a.forEach((value, index) => {
	sum += value;
});
console.log(sum);

// Map
let b = [1, 2, 3, 4, 5];
let array = b.map((value) => {
	return value * 2;
});
console.log(array);

//Filter
let c = [1, 2, 3, 4, 5];
let filtered = c.filter((value) => {
	return value > 2;
});
console.log(filtered);

//Reduce
let d = [1, 2, 3, 4, 5];
let total = d.reduce((currentTotal, value) => {
	return value + currentTotal;
}, 0);
console.log(total);
