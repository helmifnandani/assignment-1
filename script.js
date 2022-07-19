// operation
const inputElement = document.getElementById("numberInput");
const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const multiplyButton = document.getElementById("multiplyButton");
const divideButton = document.getElementById("divideButton");
const equalButton = document.getElementById("equalButton");
const clearButton = document.getElementById("clearButton");

// Number
const numberButton_0 = document.getElementById("numberButton_0");
const numberButton_1 = document.getElementById("numberButton_1");
const numberButton_2 = document.getElementById("numberButton_2");
const numberButton_3 = document.getElementById("numberButton_3");
const numberButton_4 = document.getElementById("numberButton_4");
const numberButton_5 = document.getElementById("numberButton_5");
const numberButton_6 = document.getElementById("numberButton_6");
const numberButton_7 = document.getElementById("numberButton_7");
const numberButton_8 = document.getElementById("numberButton_8");
const numberButton_9 = document.getElementById("numberButton_9");

plusButton.addEventListener("click", () => {
	if (inputElement.value[inputElement.value.length - 1] === "+") return;
	inputElement.value += "+";
});

minusButton.addEventListener("click", () => {
	if (inputElement.value[inputElement.value.length - 1] === "-") return;
	inputElement.value += "-";
});

multiplyButton.addEventListener("click", () => {
	if (inputElement.value[inputElement.value.length - 1] === "*") return;
	inputElement.value += "*";
});

divideButton.addEventListener("click", () => {
	if (inputElement.value[inputElement.value.length - 1] === "/") return;
	inputElement.value += "/";
});

clearButton.addEventListener("click", () => {
	inputElement.value = "";
});

equalButton.addEventListener("click", () => {
	let equals = eval(inputElement.value);
	inputElement.value = equals;
});

numberButton_0.addEventListener("click", () => {
	inputElement.value += 0;
});

numberButton_1.addEventListener("click", () => {
	inputElement.value += 1;
});

numberButton_2.addEventListener("click", () => {
	inputElement.value += 2;
});

numberButton_3.addEventListener("click", () => {
	inputElement.value += 3;
});

numberButton_4.addEventListener("click", () => {
	inputElement.value += 4;
});

numberButton_5.addEventListener("click", () => {
	inputElement.value += 5;
});

numberButton_6.addEventListener("click", () => {
	inputElement.value += 6;
});

numberButton_7.addEventListener("click", () => {
	inputElement.value += 7;
});

numberButton_8.addEventListener("click", () => {
	inputElement.value += 8;
});

numberButton_9.addEventListener("click", () => {
	inputElement.value += 9;
});
