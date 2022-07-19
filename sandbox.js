// Object
let student = {
	name: "Fika",
	major: "Law",
	gpa: 4,
	hobbies: ["draw", "sing", "movies"],
	address: {
		street: "Cilandak",
		city: "Jakarta",
	},
	"5cent": "five",
	1: "one",
};

// const whatKeyToGet = "marriage";

// // console.log(student['hobbies']);
// console.log(student[whatKeyToGet]);

// console.log(student.hobbies[2][0]);
// student.faculty = "Social";
// student.address.rt = 1;
// student.hobbies.push("work");
// console.log(student["5cent"]);

// delete student.address.city;
// console.log(student);

// Destructuring object
// yang didalam { } adalah variable harus sama namanya variable dan key dalam object
// const { name, address } = student;
const { namanya } = student.name;

// Destruct object dalam object
const {
	name,
	address,
	hobbies: [hobby1, hobby2],
} = student;
// Kalau mau destruct object dalam object, lebih baik di destruct berkali kali, contoh, pertama destruct address dulu, terus addressnya di destruct lagi
const { street, city } = address;

// Kalau mau destruct array dalam object pakai [ ], harus di destruct satu satu, tapi bisa dipanggil salah satu dan bisa dinamain variablenya
const [hobbysatu, hobbydua, hobbyketiga] = student.hobbies;

// console.log(name);
// console.log(namanya);
// console.log(hobbyketiga);

// console.log(address);
// console.log(city);

// Function
// cara 1
// function sum(num1, num2) {
// 	// hanya menjalankan set of operations
// 	const result = num1 + num2;

// 	return result;
// }

// cara 2
// Best practicenya function dibikin pakai const, biar nggak bisa diubah
// const sum = function (num1, num2) {
// 	const result = num1 + num2;

// 	return result;
// };

// cara 3
// const sum = (num1, num2) => {
// 	const result = num1 + num2;

// 	return result;
// };

// const sum = (num1, num2) => num1 + num2;

// // Nameless function / handler
// const ngegas = (str) => {
// 	str += "!!!!";
// 	str = str.toUpperCase();
// 	setTimeout(() => {
// 		console.log("nanti");
// 	}, 2000);

// 	return str;
// };

// const calculationResult = sum(5, 10);
// const moreCalculation = sum(calculationResult, 20);
// console.log(`the result is: ${moreCalculation}`);
// console.log(ngegas("haha"));

// const getProfile = () => {
// 	// proses get API
// 	return {
// 		name: "Fika",
// 		username: "fikafathiah",
// 		password: "password123",
// 		address: "cilandal",
// 	};
// };

// const { username, password } = getProfile();

// console.log(username, password);

// const obj = {
// 	val: 10,
// 	doubleVal: function () {
// 		this.val += 1;
// 	},
// };

// console.log(obj.val);
// obj.doubleVal();
// console.log(obj.val);

// Higher order function

const tambah = (a, b) => a + b;
const pangkat = (a, b) => a * b;

const formula = (num1, num2, tambahFn, pangkatFn, iteration) => {
	const hasilTambah = tambahFn(num1, num2);
	let result = hasilTambah;

	for (let i = 1; i < iteration; i++) {
		result = pangkatFn(result, hasilTambah);
	}

	return result;
};

console.log(formula(1, 2, tambah, pangkat, 4));
