// Задание 1
// Создайте переменную myNumber и присвойте ей результат выражения: деление числа 100 на остаток от деления 25 на 3. Выведите значение myNumber в консоль.

// Создайте переменную myString и присвойте ей значение, которое является результатом конкатенации следующих строк: "Hello, ", "world", "!", и числа 2024. Выведите значение myString в консоль.

// Создайте переменную isHuman и присвойте ей результат сравнения числа 42 со строкой 42. Результатом должно стать true. Подумайте какой оператор сравнения вы будете использовать.

// Создайте переменную myNumber и присвойте ей результат преобразования строки "123smth" в число. Выведите значение myNumber в консоль.

let myNumber = 100 / (25 % 3)
console.log(myNumber)

let myString = "Hello, " + "world" + "! " + 2024
console.log(myString)

let isHuman = 42 == "42"
console.log(isHuman)
isHuman = 42 !== "42"
console.log(isHuman)

myNumber = +"123smth" // NaN
console.log(myNumber)
myNumber = parseInt("123smth") // Number
console.log(myNumber)
myNumber = Number("123smth") // NaN
console.log(myNumber)


