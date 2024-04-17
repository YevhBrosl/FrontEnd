// Задание 1
// Ваша задача - написать программу, которая принимает массив объектов-людей и вычисляет общий возраст.

// Создайте функцию calculateTotalAge, которая принимает массив объектов. Каждый объект в массиве представляет одного человека и имеет ключи: name и age В теле цикла, используйте деструктуризацию объекта для получения значения age и name. Верните общий возраст.

// const people = [
//   { name: 'Alice', age: 30 },
//   { name: 'Bob', age: 25 },
//   { name: 'Charlie', age: 35 }
// ];

// console.log(calculateTotalAge(people)); // 90

const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];

const calculateTotalAge = (people) => {

    let totalAge = 0

    for (let person of people) {
        const { name, age } = person
        totalAge += person.age
    }

    return totalAge
}

console.log(calculateTotalAge(people))

// Задание 2
// Создайте функцию compareObjects, которая принимает два объекта в качестве аргументов и проверяет их на равенство (все ключи и значения должны быть одинаковыми). Верните true, если объекты равны, и false в противном случае.

const user = {
    name: 'John',
    age: 25
}

const user1 = {
    name: 'John',
    age: 25
}

const compareObjects = (object, object1) => object === object1
console.log(compareObjects(user, user1))

const compareObjectsByKeys = (object, object1) => object.keys === object1.keys
console.log(compareObjectsByKeys(user, user1))

const compareObjectsByValues = (object, object1) => object.values === object1.values
console.log(compareObjectsByValues(user, user1))


// Задание 3
// Напишите функцию findKeyByValue, которая принимает объект и значение в качестве аргументов и возвращает первый ключ, соответствующий переданному значению. Если значение не найдено, верните null.

const cat = {
    name: 'Vaska',
    age: 5,
    color: 'ginger',
    weight: 3
}

// const findKeyByValue = (object, value) => {
//     const keys = Object.keys(object);
//     const values = Object.values(object)

//     const index = values.indexOf(value)
//     if (index !== -1) {
//         return keys[index]
//     }
//     return null
// }

const findKeyByValue = (object, value) => {
    for (let key in object) {
        if (object[key] === value) {
            return key;
        }
    }
    return null;
}

console.log(findKeyByValue(cat, 5))

// Задание 4
// У вас есть объект productInfo с информацией о продукте, включая его наименование, цену и наличие на складе. Напишите функцию printProductDetails, которая принимает этот объект в качестве аргумента и выводит в консоль сообщение вида: "<товар> - <цена>, товар на складе: <да/нет>", где "да" или "нет" зависит от наличия товара на складе.

const productInfo = {
    name: 'camera',
    price: 1000,
    isInStock: true
}

const printProductDetails = (productInfo) => {
    const data = Object.values(productInfo)
    let availability
    if (productInfo.isInStock === true) {
        availability = 'да'
    } else {
        availability = 'нет'
    }
    let info = `<${data[0]}> - <${data[1]}>, товар на складе: <${availability}>`
    console.log(info)
}

printProductDetails(productInfo)
