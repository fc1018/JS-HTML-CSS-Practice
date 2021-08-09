let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = Pete;
delete user.name;

function isEmpty(obj) {
	for (let key in obj) {
		return false;
	}
	return true;
}

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
};

function totalOf(obj) {
	let sum = 0;
	for (let prop in obj) {
		sum += obj[prop];
	}
	return sum;
}

totalOf(salaries);

let menu = {
	width: 200,
	height: 300,
	title: 'My menu',
};

function multiplyNumeric(obj) {
	for (prop in obj) {
		if (typeof obj[prop] == 'number') {
			obj[prop] *= 2;
		}
	}
}
