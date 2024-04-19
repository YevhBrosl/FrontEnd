// Задание 1
// У вас есть массив объектов:

// const starWarsHeroes = [
//     { name: "Anakin Skywalker", age: 30, isJedi: true },
//     { name: "Luke Skywalker", age: 25, isJedi: true },
//     { name: "Han Solo", age: 35, isJedi: false },
//     { name: "Princess Leia", age: 30, isJedi: false },
//     { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
// ];
// Используйте методы массивов

// Создайте на основе старого массива новый массив объектов по образу: [{ name: "Luke Skywalker", isJedi: true }, {name: "Han Solo", isJedi: false}...]

const starWarsHeroes = [
    { name: "Anakin Skywalker", age: 30, isJedi: true },
    { name: "Luke Skywalker", age: 25, isJedi: true },
    { name: "Han Solo", age: 35, isJedi: false },
    { name: "Princess Leia", age: 30, isJedi: false },
    { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];

const namesAndIsJediObject = starWarsHeroes.map(hero => ({
    name: hero.name,
    isJedi: hero.isJedi
}))

console.log(namesAndIsJediObject)

// Задание 1.2
// Создайте новый массив с джедаями младше 40 лет

const youngJedi = []

starWarsHeroes.map(hero => {
    if (hero.age < 40 && hero.isJedi === true) {
        youngJedi.push(hero)
    }
})

console.log(youngJedi)

console.log(starWarsHeroes.filter(hero => hero.age < 40 && hero.isJedi === true))

// Задание 1.3
// Посчитайте возраст всех джедаев

const totalJediAge = starWarsHeroes
    .filter(hero => hero.isJedi === true)
    .reduce((acc, hero) => acc + hero.age, 0)

console.log(totalJediAge)

// Задание 1.4
// Повысьте возраст героев на 10 лет

starWarsHeroes.forEach(hero => (hero.age += 10))
console.log(starWarsHeroes)

// Задание 1.5
// Создайте новый массив, где "Anakin Skywalker" заменен на { name: "Darth Vader", isJedi: false, age: 50 }

const newStarWarsHeroes = []

starWarsHeroes.forEach(hero => (hero.name === "Anakin Skywalker") ? newStarWarsHeroes.push({ name: "Darth Vader", age: 50, isJedi: false }) : newStarWarsHeroes.push(hero))

console.log(newStarWarsHeroes)

// Задание 1.6
// Создайте массив с именами героев, у которых возраст больше 30 лет, преобразуйте каждое имя в верхний регистр и отфильтруйте имена, которые начинаются с буквы "A".
// используйте .startsWith()

starWarsHeroes
    .filter(hero => hero.age > 30)
    .forEach(hero => (hero.name = hero.name.toUpperCase()))

const heroNamesWithA = starWarsHeroes
    .filter(hero => hero.name.startsWith("A")) 
    .map(hero => hero.name)

console.log(heroNamesWithA)

// Задание 1.7
// Выведите на экран сообщение для каждого героя, указывающее на его статус джедая, и добавьте к каждому сообщению его возраст.

// Используйте тернарный оператор

// Образец:

// 'Anakin Skywalker is a Jedi. Age: 25' 'Han Solo is not a Jedi. Age: 35'

const message = (starWarsHeroes) => {
    for (let hero of starWarsHeroes) {
        let jedi = hero.isJedi ? 'is a Jedi' : 'is not a Jedi'
        console.log(`${hero.name} ${jedi}. Age: ${hero.age}`)
    }
}

message(starWarsHeroes)

