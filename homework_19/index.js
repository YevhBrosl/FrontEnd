// Задание 1
// Создайте метод getStudent, который возвращает promise - объекта (студент с именем "Anri" и возрастом 32), c задержкой 4 секунды.
// Вызовите этот метод - сохраните в переменную.
// Раскройте promise при помощи then, выведите имя студента.

function getStudent() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('A student named Anri, aged 32')
        }, 4000)
    })
}

const student = getStudent()
student.then(data => console.log(data))

// Задание 2 (Дополнительно)
// Напишите функцию getDriverLicense, которая принимает в себя два аргумента success и failure.
// Сделайте внутри этой функции проверку: если выпадет какое-то число, которое будет > 0.1, то вызовется success со строкой "успех!". В иных случаях вызови failure со строкой "упс, неудача :("
// Подсказка: используйте Math.random()
// Ниже, под этой функцией, опишите аргументы success и failure, которые, в свою очередь, тоже являются функциями.
// Функция success принимает в себя аргумент, например result, и выводит в консоль текст "Успешно завершено с результатом (и указать, каким результатом)".
// Функция failure принимает в себя аргумент, например error, и выводит в консоль текст "Завершено с ошибкой(и указать, какой ошибкой)".
// Ниже вызвать функцию getDriverLicense, передав в нее аргументами две другие функции.

function getDriverLicense(success, failure) {
    let num = Math.random()
    if (num > 0.1) {
        success('You have succeded!')
    } else {
        failure('Oops! You have failed!')
    }    
}

function success(result) {
    console.log(`Completed successfully with the reasult: ${result}`)
}

function failure(error) {
    console.log(`Completion failed. Error: ${error}`)
}

getDriverLicense(success, failure)


