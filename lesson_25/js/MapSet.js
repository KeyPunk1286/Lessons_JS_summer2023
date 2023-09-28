// TODO ======================== Колекціі MAP =====================

//  TODO: створення об'єктів Map:
let newMap = new Map([
  ['1', 'string'], //зверни увагу шо ключ'1' може бути як стрінга так і нумер  або буліан значенняtrue 
  [1, 'num'],
  [true, 'bool']
]
)
// console.log(newMap);
//? Якщо логнути у консоль, то буде так: Map(3){'1'=>'string', 1=>'num', true=>'bool'}


// TODO Створення об'єкта з використанням Object.entries()
let object = {
  name: 'roman',
  age: 37
} // це звичайний об'єкт
let newMap2 = new Map(Object.entries(object)) 
//console.log(newMap2.get('name')); //? буде roman


// TODO ======================== Методи Map =========================

//* додавання нової пари ключ: значння 
newMap2.set('year', '2023')
newMap2.set(1, '2025')
//=====================================//

//* отримання значення
console.log(newMap2.get('age')) //37
//==================================//

//* повеертання true або false 
console.log(newMap.has(1)) // true
//============================//

//* повертає поточну кількість елементів так як length
console.log(newMap.size); //3

//* Вдаляє елемент по ключу
newMap2.delete(1)
//==========================//

//* Видалити усі елементи
newMap2.clear()

// TODO Задача: підрахувати кількість входжень кожного із значень
let someArr = [12, 'dd', '12', true, '12', 3, 'true', 'false']
      let map = new Map()
      for (const el of someArr) {
        let elCount = map.get(el) ?? 0
        map.set(el, elCount+1)
      }
map.forEach((val, key) => {
  console.log(`${val} - ${key}`)
  
})     

// TODO Задача : Дано список з віком учнів. Підрахувати скільки разів кожне значення зустрічається і максимальне
let someArrAge = [12, 15, 12, 11, 16, 11, 13, 14, 16] 
let mapAge = new Map()
for (const age of someArrAge) {
  mapAge.set(age, (mapAge.get(age)??0)+1) //  це теж саме шо і у попередньому прикладі але в одну строку!
}
console.log(mapAge);






// TODO ======================== Множини Set ==========================

//* Створювання:
let newSet = new Set()
//========================//

//* Створювання з ітероаного об'єкта:
let newSet2 = (['mouse', 'keyboard', 'spicers'])
for (const value of newSet2) {
  console.log(value);
}


// TODO ========================= Методи Set ===========================

//* додавання нового значення:
let newSet3 = new Set()
let roman = { name: 'Roman' }
let liza = { name: 'Liza' }
let natalia = {name: 'Natalia'}
newSet3.add(liza) // додаємо
newSet3.add(roman) // додаємо
//================================//

//* булевве значння true або false
console.log(newSet3.has(roman))
//=================================//

//* поточне кількість елементів типу length
console.log(newSet3.size);
//==========================================//

//* Видаляє елемент 
newSet3.delete(natalia)
//======================//

//* Видаляє всі елементи
newSet3.clear()
console.log(newSet3.size);


// TODO ======================== Перегляд Set ===========================

//* можна як і Map предивлятись
let someArrSetValue = new Set( ['Love', 'No', 'red'])
for (const value of someArrSetValue) {
  console.log(value);
}
//======================================================//

//* ще от так :
someArrSetValue.forEach((value,) => {
  console.log(value);
})


// TODO ======================== Властивості Set =========================
let newSet4 = new Set(['dd', 'rr', 'ff'])
let newSet5 = new Set(['ee', 'r2r', '11ff'])
//* someArrSetValue.values() someArrSetValue.keys()  повертає об'єкт-ітератор для значень
for (const value of newSet4.values()) {
  console.log(value);
}  
for (const key of newSet5.keys()) {
  console.log(key);
}  
//=============================================================================================//

//*  newSet5.entries() повертає об'єкт-ітератор зі значенням видц [знаяення,значення]
for (const entry of newSet5.entries()) {
  console.log(entry);
}

// TODO Задача: дано список з віком учнів. Підрахувати скільки є різних значень
let arrAgeScoolboy = [12, 14, 12, 16, 15, 13, 13, 15, 14, 16]
console.log(new Set(arrAgeScoolboy).size); //5
//===========================================//

// TODO Задача: підрахувати кількість різних імен.
let arrSomeName = ['Alina', 'Albina', 'Liza', 'Alna', 'Roman', 'Liza', 'Roman']
let diffNameNumber = new Set(arrSomeName).size
console.log(diffNameNumber);//5

// TODO Задача: Дано масив книг(назва, автор, ід). Підрахувати кіькість різних авторів.
let books = [
  {id:1, title: 'Title1', author: 'Author1'},
  {id:2, title: 'Title2', author: 'Author2'},
  {id:3, title: 'Title3', author: 'Author1'},
  {id:4, title: 'Title4', author: 'Author3'},
  {id:5, title: 'Title5', author: 'Author3'},
  {id:6, title: 'Title6', author: 'Author1'},
]
let authorNum = new Set(books.map(book => book.author)).size
console.log(authorNum);
//==========================================================//



// TODO ============================== WeakMap ===================================

//* це така штука котра зберігає інфу як map, тільки якщо видалити адресу, то значення
//* автоматично видаляються. має лише методи WeakMap.get(key), WeakMap.set(key, value),
//* WeakMap.delete(key) WeakMap.has(key)
//* та відсутні методи: clear, size, keys, values
//* не є ітерованим

//* створюємо об'єкт
let john = { name: 'Ivan' }

//* Створюємо об'єкт WeakMap
let weakMap = new WeakMap()

//* додаємо елемент з ключем-об'єктом john
weakMap.set(john, 'some data')

//* перезаписуємо посилання 
john = null
console.log(weakMap); //? в результаті john буде видалено з weakMap і видалено з пам'яті



//! ================== Зберігяння даних у браузері (на стороні клієнта) ========================

//* основи збереження даних у веб. Web storage API

// TODO ================== sessionStorage =======================

//* забезбечує збереження даних для кожного домену на протязі сесії (поки відкритийбраузер,
//* навіть якщо перехавантажити сторінку)

// TODO ================== localStorage =========================

//*  забеспечує збереження даних навіть при перевідкритті браузера

//* Збереження простих скалярних даних:
//localStorage.setItem('key', 'value') //* значення value має бути значенням типу string
//=======================================================================================//

//* зчитування ростих даних
//localStorage.getItem('key')
//==========================//

//* визначення ключа у заданій позиції 
//localStorage.key(index)
//====================================//

//* видалення даних 
//localStorage.removeItem('key')
//==============================//

//* очищення 
//localStorage.clear()

// TODO Приклад. Задача: Зберігати ім'я користувача при заході на сайт, та кількість відвідувань.
window.onload = function () {
  let userName = localStorage.getItem('userName')
  if (!userName)
    userName = prompt('Як вас звати')
  localStorage.setItem('userName', userName)
  
  // кількість відвідувань
  let visitUser = parseInt(localStorage.getItem('visitUser') ?? 0) + 1
  localStorage.setItem('visitUser', visitUser)
}


// TODO =================== Збереження об'єктів ============================

//* Для збереження об'єктів тре перетворювати їх у формат JSON
//* перетворення об'єкта у рядок  з JSON і збереження у  localStorage JSON.stringify(об'єкт)
let user = {
  name: 'Ivan',
  age: 27,
}
localStorage.setItem('user', JSON.stringify(user))
//==================================================//

//* Зчитування з localStorage і перетворення з JSON у об'єкт JSON.parse(рядок JSON об'єкта)
let userRed = JSON.parse(localStorage.getItem('user'))
//=======================================================//

//* перегляд ключів localStorage

//* з використанням властивості-кількість значень localStorage.length
//* та можливості отримання назви властивості за індексом localStorage.key(index)
/* 
for(let i=0; i<localStorage.length; i++){
  let key = localStorage.key(i)
  alert(`${key}: ${localStorage.getItem(key)}`)
}
*/

//* З використанням циклу forin пербираємо усі властивості for(let key in localStorage) {...}
//* та пропускаємо його властивості localStrorage.key(index)
/*
for(let key in localstorage){
  if(!localStorage.hasOwnProperty(key)){
  continue // пропускати ('setItem', 'getItem', ...)
  }
  alert(`${key}: ${localStorage.getItem(key)}`)
}
*/

//* отримуємо срисок ключів Object.keys у цьому списку будуть тільки ключі, що додатні об'єкту,
//* а не ключи з прототипу
/*
let keys = Object.keys(localStorage) //Отримуємо ключі
for(let key of keys){
  alert(`${key}: ${localStorage.getItem(key)}`)
}
*/

