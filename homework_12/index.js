// Задание 1
// Создайте стрелочную функцию, которая бы принимала массив и цифру, возвращала бы элемент массива под этим индексом. Если такого индекса нет в массиве - выведите в консоль "No such index in array"

const arrayStringNumber = (array, index) => {
    if (index >= 0 && index <= array.length) {
        console.log(array[index])
    } else {
        console.log("No such index in array")
    }
}

arrayStringNumber(['Hello', 'world', 'JS', 'Java'], 12)

// ### Задание 2 *
// Создайте функцию, которая бы принимала бы следующие параметры:
// - код погоды
// - функция decode, которая дает расшифровку погоды по коду.

// Функция должна возвращать строку, описывающую погоду.
// ### Таблица соответствия код-описание:
//  - SQ – шквал
//  - PO – пыльный вихрь
//  - FC - торнадо
//  - BR – дымка (видимость от 1 до 9 км)
//  - HZ – мгла (видимость менее 10 км)
//  - FU – дым (видимость менее 10 км)
//  - DS - пыльная буря (видимость менее 10 км)
//  - SS - песчаная буря (видимость менее 10 км)

// Подсказка: удобно использовать в одном из методов switch-case:
// ```
// switch (expression) {
//     case value1:
//         <код>
//     case value2:
//         <код>
// // …
//     case valueN:
//         <код>
//     default:
//         <код>
// }
// ```

const weatherReport = (weatherCode, decode) => decode(weatherCode)   

const decode = (code) => {
    
    switch (code) {
        case 'SQ':
            return 'Шквал';
        case 'PO':
            return 'Пыльный вихрь';
        case 'FC':
            return 'Торнадо';
        case 'BR':
            return 'Дымка (видимость от 1 до 9 км)';
        case 'HZ':
            return 'Мгла (видимость менее 10 км)';
        case 'FU':
            return 'Дым (видимость менее 10 км)';
        case 'DS':
            return 'Пыльная буря (видимость менее 10 км)';
        case 'SS':
            return 'Песчаная буря (видимость менее 10 км)';
        default:
            return 'Неизвестная погода';
    }
}

console.log(weatherReport('DS', decode));

// Задание 3
// Напишите функцию sumNumbers, которая принимает на вход массив чисел и возвращает строку, в которой перечислены все числа из массива и их сумма. Используйте синтаксис function expression, цикл while, шаблонные строки.

const sumNumbers = (arrayNumbers) => {  
    let i = 0 
    let sum = 0
     
    while (i < arrayNumbers.length) {
        sum += arrayNumbers[i] 
        i++
    }

    return `array: ${arrayNumbers}, sum: ${sum}`
}

console.log(sumNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))