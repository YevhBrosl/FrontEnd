const arr1 = []
const arr2 = new Array()

const numbers = [1, 2, 5, 66]
const fruits = ['apple', 'orange', 'pear', 'melon']
const party = ['human', 42, undefined, ['man', 'woman']]

console.log(party)

// получение элементов из массива по индексам
console.log(fruits[0]) 

console.log(fruits[10]) // undefined - элемента нет

fruits[3] = 'watermelon'
console.log(fruits)

// цикл for

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

let i = 0

while (i <= 10) {
    console.log(i)
    i++
}

let loop = 'infinity loop'
console.log(loop[1])
let newLoop = 'I' + loop.slice(1)
console.log(newLoop)

// создайте массив строк из пяти элементов - марок автомобилей
// выведите значение в консоль при помощи цикла for
// поменяйте первый и последний элементы местами
// и вновь распечатайте массив в консоли

let cars = ['Mercedes', 'BMW', 'Opel', 'Volkswagen', 'Jaguar']
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}

let temp = cars[0]
cars[0] = cars[cars.length - 1]
cars[cars.length - 1] = temp

console.log(cars)

// методы массивов: добавление и удаление элементов

// push() - добавляет элемент в конец массива

const students = ['Marina', 'Alex', 'Ira', 'John']
students.push('Harry Potter')
console.log(students)

// pop() - удаляет элемент из конца массива

students.pop()
console.log(students)

// unshift() - добавляет элемент в начало массива

students.unshift('Luke Skywalker')
console.log(students)

// shift() - удаляет первый элемент массива

students.shift()
console.log(students)

// spread syntax

const berries = ['blueberry', 'watermelon']
const berries2 = ['strawberry', ...berries, 'raspberry']

const berries3 = [...berries, ...berries2]

console.log(berries3)

// деструктуризация массивов

let cities = ['Berlin', 'Hamburg', 'Leipzig', 'Potsdam']

const [berlin, hamburg, leipzig, potsdam] = cities
const [first, , , last] = cities

console.log(first)
console.log(last)

console.log(hamburg)


// ### Задание 1
// Создайте массив из следующих элементов: "Семен", "Иван", "Петр", "Татьяна".
// Создайте еще один массив с возрастами: 18, 27, 74, 34; Создайте и заполните
// при помощи цикла этот новый массив новыми элементами по образу: "Семен 18 лет/годов"

const names = ["Семен", "Иван", "Петр", "Татьяна"]
const ages = [18, 27, 74, 34]

let people = []

for (let i = 0; i < names.length; i++) {
    people.push(names[i] + " " + ages[i] + " лет / годов")
}

console.log(people)

// ### Задание 2
// Используя пройденные на занятии методы массива получите из этого массива новый массив,
// в котором элементы идут в обратной последовательности.

let reversePeople = []

for (let i = people.length - 1; i >= 0; i--) {
    reversePeople.push(people[i])
}

console.log(reversePeople)


let reverse = people.reverse()
console.log(reverse)


// ### Задание 3
// Создайте пустой массив fruits.
// добавьте в массив следующие фрукты: "яблоко", "банан", "апельсин".
// Удалите последний элемент из массива и сохраните значение в переменной.
// Добавьте его в начало массива.
// Выведите fruits в консоль

let fruits1 = []
fruits1.push("яблоко", "банан", "апельсин")
console.log(fruits1)

let fruit = fruits1.pop()
fruits1.unshift(fruit)
console.log(fruits1)


// ### Задание 4
// Объедините fruits с массивом veggies (в него добавьте строки овощи) через spread в массив fruitsAndVeggies
// Используя деструктуризацию заведите переменную под каждый элемент нового массива
// Выведите fruitsAndVeggies в консоль

let veggies = ['potatoes', 'cabbage']
let fruitsAndVeggies = [...fruits1, ...veggies]
let [f1, f2, f3, v1, v2] = fruitsAndVeggies
console.log(fruitsAndVeggies)
console.log(f1, f2, f3, v1, v2)

// reverse() 



