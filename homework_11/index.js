// Задание 1
// Создайте массив с элементами: "Мария", "Алексей", "Елена", "Дмитрий". Создайте массив с возрастами: 22, 31, 45, 53. Создайте новый массив, заполнив его элементами в формате "имя возраст лет/годов".

const names = ["Мария", "Алексей", "Елена", "Дмитрий"]
const ages = [22, 31, 45, 53]

let people = []

for (let i = 0; i < names.length; i++) {
    people.push(names[i] + " " + ages[i] + " лет / годов")
}

console.log(people)

// Задание 2
// Используя пройденные на занятии методы массива получите из этого массива новый массив, в котором элементы идут в обратной последовательности.

// сделайте два решения - без и с использованием reverse()

let reversePeople = []

for (let i = people.length - 1; i >= 0; i--) {
    reversePeople.push(people[i])
}

console.log(reversePeople)


let reverse = people.reverse()
console.log(reverse)

// Задание 3
// Создайте пустой массив countries. Добавьте в массив следующие страны: "Франция", "Германия", "Италия" Удалите последний элемент из массива и сохраните значение в переменной. Добавьте его в начало массива. Выведите countries в консоль

let countries = []
countries.push("Франция", "Германия", "Италия")
let country = countries.pop()
countries.unshift(country)
console.log(countries)

// Задание 4
// Объявите массив colors с названиями цветов: "красный", "зеленый", "синий". Создайте массив animals с животными: "кошка", "собака", "кролик". Объедините массивы в colorsAndAnimals с помощью оператора spread Используя деструктуризацию, создайте переменные для каждого элемента нового массива с соответствующими именами переменных Выведите в консоль переменную blue и rabbit через запятую.

let colors = ["красный", "зеленый", "синий"]
let animals = ["кошка", "собака", "кролик"]
let colorsAndAnimals = [...colors, ...animals]
let [red, green, blue, cat, dog, rabbit] = colorsAndAnimals
console.log(blue + ", " + rabbit)












