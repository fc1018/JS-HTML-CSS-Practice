let calculator = {
	read() {
		this.val1 = +prompt('Enter first value');
		this.val2 = +prompt('Enter second value');
	},

	sum() {
		return this.val1 + this.val2;
	},

	mul() {
		return this.val1 * this.val2;
	},
};

calculator.read();

alert(calculator.sum());

alert(calculator.mul());

let ladder = {
	step: 0,
	up() {
		this.step++;
		return this;
	},
	down() {
		this.step--;
		return this;
	},
	showStep() {
		alert(this.step);
		return this;
	},
};

ladder.up().up().down().up().down().showStep(); // 1
