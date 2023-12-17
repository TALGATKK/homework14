let button_add = document.getElementById("add");
let button_delete = document.getElementById("delete");
let student = document.getElementById("firstname");
let button_join = document.getElementById("join");

let students = [
  "Абдыраимова Бибигуль",
  "Асубаева Еркежан",
  "Алдабергенов Балабай",
  "Ахметжанов Айдархан",
  "Дакеева Мадина",
  "Курманов Талгат",
  "Матенов Нургазы Асенбаевич",
  "Мурат Нурасыл",
];

let paragraph = document.createElement("p");
paragraph.textContent = `Список студентов: ${students}`;
document.body.append(paragraph);

1; //////////////////////push
button_add.addEventListener("click", addFunction);
function addFunction() {
  students.push(student.value);
  paragraph.textContent = `Список студентов: ${students}`;
}

2; /////////////////////// pop
button_delete.addEventListener("click", deletefunction);
function deletefunction() {
  students.pop(student.value);
  paragraph.textContent = `Список студентов: ${students}`;
}

3; ////////////////////////// concat
let studentsF1 = [
  "Абдыраимова Бибигуль",
  "Асубаева Еркежан",
  "Алдабергенов Балабай",
  "Ахметжанов Айдархан",
  "Дакеева Мадина",
  "Курманов Талгат",
  "Матенов Нургазы Асенбаевич",
  "Мурат Нурасыл",
];
let studentsF2 = [
  "Абилдаева Анель",
  "Суенбаев Аскар",
  "Макишева Мереке",
  "Мустафин Данияр",
  "Шиманский  Николай",
  "Досыбеков Арон",
];
let paragraphF1 = document.createElement("p");
paragraphF1.textContent = `Список студентов F1: ${studentsF1}`;
document.body.append(paragraphF1);
let paragraphF2 = document.createElement("p");
paragraphF2.textContent = `Список студентов F2: ${studentsF2}`;
document.body.append(paragraphF2);
button_join.addEventListener("click", concatfunction);
function concatfunction() {
  let all = studentsF1.concat(studentsF2);
  let paragraphGroups = document.createElement("p");
  paragraphGroups.textContent = `Список студентов F1 и F2: ${all}`;
  document.body.append(paragraphGroups);
}

4; ////////////////////////////// reverse
let button_n = document.getElementById("submittext");
let text_n = document.getElementById("text1");
button_n.addEventListener("click", reversefunction);
function reversefunction() {
  let split = text_n.value.split(" ");
  split.reverse();
  let reverseText = split.join(" ");
  let paragraphN = document.createElement("p");
  paragraphN.textContent = `Перевернутый текст: ${reverseText}`;
  document.body.append(paragraphN);
}

5; //////////////////////////////// map
var cities = [
  "Astana",
  "Moskow",
  "Almaty",
  "London",
  "Dublin",
  "Paris",
  "Washington",
];
let paragraphMapList = document.createElement("p");
paragraphMapList.textContent = `Изначальный список городов ${cities}`;
document.body.append(paragraphMapList);
var citiesnamesLengths = cities.map(function (citiesname) {
  return citiesname.length;
});
let paragraphMap = document.createElement("p");
paragraphMap.textContent = `Преобразование текста в количество символов: ${citiesnamesLengths}`;
document.body.append(paragraphMap);

6; ///////////////////////////////// slice
let paragraphSlice = document.createElement("p");
paragraphSlice.textContent = `Метод slice(копирует с 2 до конца): ${cities.slice(
  2
)}`;
document.body.append(paragraphSlice);

7; ////////////////////////////////// shift
let shifted = cities.shift();
let paragraphShifted = document.createElement("p");
paragraphShifted.textContent = `Метод shift(удаляет первый элемент из массива (элемент с индексом 0): ${cities}`;
document.body.append(paragraphShifted);
let paragraphShiftedDeleted = document.createElement("p");
paragraphShiftedDeleted.textContent = `Удаленный элемент: ${shifted}`;
document.body.append(paragraphShiftedDeleted);
