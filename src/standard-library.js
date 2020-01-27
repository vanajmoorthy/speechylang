const all = fn => (...list) => list.reduce(fn);

const add = all((a, b) => a + b);
const subtract = all((a, b) => a - b);
const multiply = all((a, b) => a * b);
const divide = all((a, b) => a / b);
const modulo = all((a, b) => a % b);
const max = (...args) => {
	return Math.max(...args);
};
const min = (...args) => {
	return Math.min(...args);
};
const log = console.log;

const environment = {
	add,
	subtract,
	multiply,
	divide,
	modulo,
	log,
	pi: Math.PI,
	max,
	min
};

module.exports = { environment };
