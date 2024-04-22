// Задание 1
// Создайте новый массив, содержащий только электрические машины (свойство isElectric равно true) и включающий только их модели и цвета. Объедините модели и цвета каждой машины в одну строку, разделенную запятой и пробелом.

const cars = [
    { brand: 'Tesla', model: 'Model S', year: 2022, color: 'red', isElectric: true },
    { brand: 'Toyota', model: 'Camry', year: 2018, color: 'blue', isElectric: false },
    { brand: 'BMW', model: 'X5', year: 2020, color: 'black', isElectric: false },
    { brand: 'Nissan', model: 'Leaf', year: 2021, color: 'green', isElectric: true },
    { brand: 'Ford', model: 'Mustang', year: 2019, color: 'yellow', isElectric: false }
];

const carsString = cars
    .filter(car => car.isElectric)
    .map(car => (car.model + ' ' + car.color))
    .join(', ');

console.log(carsString);

// Задание 2
// Создайте новый массива, содержащий машины, отсортированные по году выпуска в порядке убывания. Объедините модели и бренды каждой машины в одну строку, разделенную дефисом. Переставьте машины в строке в обратном порядке.

const sorted = cars
    .sort((car1, car2) => car2.year - car1.year)
    .map(car => (car.brand + ' ' + car.model))
    .reverse()
    .join(' - ')

console.log(sorted)

// Задание 3
// Напишите функцию, которая будет принимать массив строк, приводить каждую строку к нижнему регистру, сортировать, затем переворачивать каждое слово в строке задом наперед, и наконец делать первую букву заглавной.

// для того, чтобы сделать первую букву заглавной используйте charAt()

const fruits = ['Apple', 'Orange', 'Cherry', 'Peach', 'Banana']

const transformedArray = array => array
    .map(el => el.toLowerCase())
    .sort()
    .map(el => el.split('').reverse().join(''))
    .map(el => el.charAt(0).toUpperCase() + el.slice(1))
    .join(', ');

console.log(transformedArray(fruits))

// Задание 4
// Напиши функцию, которая удаляет все нечетные числа и выдает массив отсортированных чисел задом наперед, а также число - их сумму в шаблонной строке.

const numbers = [3, 56, 7, 4, 28, 45, 12, 9];

const sortNumbers = array => {
    const filteredNumbers = array
        .filter(el => el % 2 === 0)
        .sort((el1, el2) => el2 - el1)
    return `Общее значение: ${filteredNumbers.reduce(
        (acc, num) => acc + num, 0
    )}, отсортированный массив: ${filteredNumbers.join(', ')}`
}

console.log(sortNumbers(numbers))