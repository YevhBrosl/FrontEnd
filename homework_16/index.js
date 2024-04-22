const heroes = [
  { hero: 'Iron Man', name: 'Tony Stark', age: 50, isAvenger: true },
  { hero: 'Captain America', name: 'Steve Rogers', age: 110, isAvenger: true },
  { hero: 'Thor', name: 'Thor Odinson', age: 1500, isAvenger: true }
];

const villains = [
  { hero: 'Thanos', name: 'Thanos', age: 1000, isAvenger: false },
  { hero: 'Loki', name: 'Loki Laufeyson', age: 1052, isAvenger: false }
];

// Задание 1
// Объедините два массива героев в один и отсортируйте по возрасту

const heroesAndVillains = [...heroes, ...villains].sort((hero1, hero2) => hero1.age - hero2.age)
console.log(heroesAndVillains)

const heroesAndVillains1 = heroes.concat(villains).sort((hero1, hero2) => hero1.age - hero2.age)
console.log(heroesAndVillains1)

// Задание 2
// Замените имя героя "Captain America" на "The First Avenger" и увеличьте его возраст на 10 лет

const newHeroesAndVillains = heroesAndVillains.map(hero =>
  hero.hero == 'Captain America'
    ? { hero: 'Captain America', name: 'The First Avenger', age: 120, isAvenger: true }
    : hero
)

console.log(newHeroesAndVillains)

// Задание 3
// Напишите функцию getRandomCharacter, которая возвращает случайного персонажа в строке: Если это герой функция вернет: Congratulations! You got a hero: Iron Man! А если злодей: Attention! Thanos! Call the Avengers!

const getRandomCharacter = (heroesAndVillains) => {
  let randomNumber = Math.floor(Math.random() * (heroesAndVillains.length))
  let character = heroesAndVillains[randomNumber]
  character.isAvenger ? console.log(`Congratulations! You got a hero: ${character.hero}`) : console.log(`Attention! ${character.hero}! Call the Avengers!`)
  return console.log(character)
}

getRandomCharacter(heroesAndVillains)

// Задание 4
// Создайте функцию getHeroAges(heroes), которая принимает массив героев

// Функция должна выполнить следующие действия:

// Отфильтровать героев, чьи имена начинаются с буквы "T". Отсортировать отфильтрованных героев по возрастанию их возраста. Получить массив возрастов отсортированных героев. Вывести полученный массив возрастов в обратном порядке.

const getHeroAges = (heroes) => {
  let ages = heroes
    .filter(hero => hero.name.startsWith('T'))
    .sort((hero1, hero2) => hero1.age - hero2.age)
    .map(hero => hero.age)
    .reverse()
    
    console.log(ages)
}
 getHeroAges(heroes)