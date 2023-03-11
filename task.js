"use strict";

function solveEquation(a, b, c) {
	const d = (b ** 2) - (4 * a * c);
	if (d < 0) {
		return [];
	} else if (d == 0) {
		return [-b / (2 * a)];
	} else if (d > 0) {
		return [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
	}
}

function solveEquationTest() {
	console.log('\nsolveEquation');
	console.log(`Ввод: 1, 1, 1. Вывод: ${solveEquation(1, 1, 1)}`);
	console.log(`Ввод: 1, 1, 0. Вывод: ${solveEquation(1, 1, 0)}`);
	console.log(`Ввод: 1, 4, 4. Вывод: ${solveEquation(1, 4, 4)}`);
}

solveEquationTest();

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (isNaN(percent)) return `Передано некорректное значение процента`
	else if (isNaN(contribution)) return `Передано некорректное значение первоначального взноса`;
	else if (isNaN(amount)) return `Передано некорректное значение суммы кредита`;
	else if (isNaN(countMonths)) return `Передано некорректное значение срока кредита`;

	const mounthPercent = percent / 100 / 12;
	const result = countMonths * ((amount - contribution) * (mounthPercent + (mounthPercent / (((1 + mounthPercent) ** countMonths) - 1))));
	return +result.toFixed(2);
}

function calculateTotalMortgageTest() {
	console.log(`\ncalculateTotalMortgage`)
	console.log(`Ввод: q, 0, 50000, 12. Вывод: ${calculateTotalMortgage('q', 0, 50000, 12)}`);
	console.log(`Ввод: 10, q, 50000, 12. Вывод: ${calculateTotalMortgage(10, 'q', 50000, 12)}`);
	console.log(`Ввод: 10, 0, q, 12. Вывод: ${calculateTotalMortgage(10, 0, 'q', 12)}`);
	console.log(`Ввод: 10, 0, 50000, q. Вывод: ${calculateTotalMortgage(10, 0, 50000, 'q')}`);

	console.log(`\nВвод: 10, 0, 50000, 12. Вывод: ${calculateTotalMortgage(10, 0, 50000, 12)}`);
	console.log(`Ввод: 10, 1000, 50000, 12. Вывод: ${calculateTotalMortgage(10, 1000, 50000, 12)}`);
	console.log(`Ввод: 10, 0, 20000, 24. Вывод: ${calculateTotalMortgage(10, 0, 20000, 24)}`);
	console.log(`Ввод: 10, 1000, 20000, 24. Вывод: ${calculateTotalMortgage(10, 1000, 20000, 24)}`);
	console.log(`Ввод: 10, 20000, 20000, 24. Вывод: ${calculateTotalMortgage(10, 20000, 20000, 24)}`);
	console.log(`Ввод: 10, 0, 10000, 36. Вывод: ${calculateTotalMortgage(10, 0, 10000, 36)}`);
	console.log(`Ввод: 15, 0, 10000, 36. Вывод: ${calculateTotalMortgage(15, 0, 10000, 36)}`);
}

calculateTotalMortgageTest();