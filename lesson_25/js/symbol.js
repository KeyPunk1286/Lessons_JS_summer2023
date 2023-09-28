//Todo ====================  Symbol() =========================

//* Тип данних символ може бути використан для:

//* - створення унікальних індетифікаторів
//* - опису властивостей об'єкту
//* - створення 'прихованих' властивостей, оскільки не відображається у циклі forIn та Object.keys
//* - створення глобальних індетифікаторів
//* - налаштування властивостей об'єктів(задання правил отримання примитивних значень, створення ітераторів)

//TODO приклад:
let sym1 = Symbol() //? в дужках можна не вказувати дескріптор
let sym2 = Symbol('foo')
let sym3 = Symbol('foo')
console.log(sym2 === sym3) //? то якщо порівняти, бцде false ми створили унікальний індитифікатор;


//* - опису властивостей об'єкту
//* може бути використаний у випадку, коли хочемо уникнути конфліктів додавання властивостей у різних частин коду
//*(можливофункціях зовнішніх бібліотек)
//* при додаванні до існуючого об'єкта:
let user = {
  name: 'Roman'
}
let id = Symbol('id')
user[id] = 1
console.log(`при додаванні до існуючого ${user[id]}`);


//* при описі літерала треба вказувати у квадратних дужках:

let id2 = Symbol('id')
let user2 = {
  name: 'Roman',
  [id2]: 123
}
console.log(user2);



//* - створення 'прихованих' властивостей, оскільки не відображається у циклі forIn та Object.keys
//! але краще уникати такого

let id3 = Symbol('id')
let user3 = {
  name: 'Roman',
  age: 37,
  [id2]: 123
}
for (const key in user3) {
  console.log(key); //? у такому випадку він не буде відображати символи. Якщо хочеш шось щоб не потрапляло
  //? у цикл перебору то можна за допомогою символів це зробити
  //? але прямий доступ є модливим такий:
  console.log(`прямий доступ: + ${user3[id2]}`);
}
//* також не відображаються у Object.keys
//* але копіюються з використанням Object.assign

let clone = Object.assign({}, user3)
console.log(clone[id2]);

//* отримання список усіх ключів-символів:
let test = Object.getOwnPropertySymbols(user3)
console.log(test);

//* отримати список ключів усіх (символьних і не символьних)
let test2 = Reflect.ownKeys(user3)
console.log(test2);



//* - створення глобальних індетифікаторів
//* створюємо з використанням Symbol.for(якщо символа з ключем key немає, то він буде створений
//* Symbol(key) і буде збережен у глобальному реєстрі з ключем key) 
let id4 = Symbol.for('id') // Якщо немає то буде створений
//? в інщій частині коду можемо прочитати і зберегти у новій змінній
let id4Again = Symbol.for('id')
console.log(`порівнюємо символи ${id4 === id4Again}`);

//* Отримання ключа глобального символу з глобального реестру
//Symbol.keyFor(тут вказуємо змінну)


//Todo ====================== властивості Symbol ==============================

//* Symbol.toPrimitive символ для перетворення об'єкта у примітивне значення
//* Symbol.iterator вказує ітераційну поведінку об'єкта
//* Symbol.haslnstance як конструктор об'єкта розпізнає об'єкт в якості його  примірника
//* Symbol.match визначає відповідність регулярного виразу до рядка
//* Symbol.description опис символу
//* Symbol.replace символ який вказує на метод  який змінює значення
//* Symbol.search символ який вказує на метод який повертає індекс в рядку
//* Symbol. species яку функцію конструктора використовувати для створення похідних  об'єктів
//* Symbol.toStringTag опис об'єкта
//* Symbol.unscopables символ для виключення з with
//* Symbol.split символ який вказує  на метод  який розбиває  рядок  на індекси

//Todo ===== перетворення об'єктів у примитив :

//* - спочатку перевіряєтьсяяя наявність метода toPrimitive, і використовуємо лише його. Параметр hint
//* дозволяє до якого типу треба треба  привести об'єкт ('string', 'number', 'default')

//* - якщо методу немає Symbol.toPrimitive і перетворення до String (або valueOf, якщо метода toString немає)

//* - якщо метьода Symbol.toPrimitive немає і перетоврення до Number, то викликаємо valueOf (або  toString)

//Todo опис метода toPrimitive:
let user4 = {
  name: 'Ivan',
  money: 1200,
}
user4[Symbol.toPrimitive]= function (hint) {
  let result
  switch (hint) {
    case 'number': result = this.money
      break;
    default:
      result = this.name
      break
  }
  return result
}
let resultUseer4 =  + user4
console.log(resultUseer4);
let resultUseer4String = 'hello' + user4
console.log(resultUseer4String);

//Todo === Додавання до літералу/класу
let user5 = {
  name: 'ivan',
  maney: 1000,
  
  [Symbol.toPrimitive](hint){
    let result
    switch (hint) {
      case 'number':
        result = this.maney
        break;
      case 'string':
        result = this.name
        break;
    }
    return result
  }
}
let testResultUser5 =  + user5
console.log(testResultUser5);

//Todo Задача: Дано клас Student (піб, масив оцінок). При приведення до рядка повертати «піб».
//Todo При приведенні до числа повертати мінімальну оцінку

let studentObject = {
  name: 'Ivan',
  scores: [9, 6, 5, 8, 9, 10, 12],
  
  [Symbol.toPrimitive](hint) {
    let res
    switch (hint) {
      case 'string': 
      res = this.name
        break;
    
      default:
        res = Math.min(...this.scores)
        break;
    }
    return res
  }
}
document.querySelector('.wrapper').innerText = studentObject * 1

//Todo === ітератори

//* - дозволяють здійснювати перегляд даних об'єкта по одному за раз
//* - дозволяютьздійснювати перегляд даних з використанням циклу forof
//* - вбудовані колекції даних тих як масиви, рядки, Set,Map та інщі.
//* - є узагальненням масивів і дозволяють здійснювати поступовий перегляд даних, які формуються згідно з заданими правилами
//* - реалізують метод Symbol.iterator

//* Для реалізаціі ітераторау об'єкті повинна бути функція  з назвою Symbol.iterator, яка повинна повертати об'єкт з функцією next()
//* яка у свою чергу повинна повертати при кожному виклику об'єкт {dine: Boolean, value: any}
//Todo === приклад:  ==========================================

let someObject = {
  from: 1,
  to: 5,

  //* функція визначення ітератора:
  [Symbol.iterator]() {
    this.currentNumber = this.from
    return {
      next: () => {
        if (this.currentNumber <= this.to)
          return { done: false, value: this.currentNumber++ }
        else return{done: true}
      },
    }
  },
}
for (const el of someObject) {
  console.log(el);
}

//Todo === варіант кращій так:    ============================

let someObject1 = {
  from: 1,
  to: 5,
  
  //* при використанні forof викликається метод Symbol.iterator
  [Symbol.iterator]() {
    this.curent = this.from
    return this
  },
  next() {
    if (this.curent <= this.to) {
      return {done: false, value: this.curent++}
    }
    else return {done: true}
  }
}
for (const el of someObject1) {
  console.log(el);
}

//Todo === приклад з class =================================

class Range{
  constructor(from, to) {
    this.from = from
    this.to = to
  }
  [Symbol.iterator]() {
    this.current = this.from
    return this
  }
  next() {
    if (this.current <= this.to) {
      return {done: false, value: this.current++}
    }
    else return {done: true}
  }
}
let range = new Range(1, 10)
for (const el of range) {
  console.log(el);
}

//Todo === Дано клас student (піб, масив оцінок). Реалізувати ітератор для перебору оцінок

class Student{
  constructor(name,score) {
    this.name = name
    this.score = score
  }
  [Symbol.iterator]() {
    this.courent = 0
    return this
  }
  next() {
    if (this.courent < this.score.length)
      return { done: false, value: this.score[this.courent++] }
    else return {done: true}
  }
}
let StudentScore = new Student('Roman', [12, 10, 11, 9, 8, 7, 12, 11])
for (const score of StudentScore) {
  console.log(score);
}



//Todo ====================== Генератори ====================================

//* - Особливий тип функції, що призначиний  для генерування значень згідно правил
//* - при описі фуункції додатково ставиться зірочка function*
//* - кожне наступне значення повертається не з використанням return, а з використанням yield
//* - об'єкт генератор має функцію next яка повертає {value:значення, done:false} якщо значення ще не закінчилось
//*   {value: undefined, done: true} якщо значення закінчилось

function* sessionNumbers() {
  yield 1 
  yield 6 
  yield 12 
  yield 24
}
for (const num of sessionNumbers()) {
  console.log(num);
}


//Todo ==== Приклад композиціі генераторів

//* базовий генератор
function* generatorSequence(start,end) {
  for (let i = start; i < end; i++) yield i
}

//* комплексний генератор
function* generatePasswordCode() {
  yield* generatorSequence(15, 20)
  yield* generatorSequence(30, 35)
  yield* generatorSequence(40, 50)
}
let someArr = [...generatePasswordCode()]
console.log(someArr);

//* Але роблять так:

let someRange = {
  start: 20,
  finish: 25,

  *[Symbol.iterator]() {
    for (let i = this.start; i <= this.finish; i++) {
      yield i
      
    }
  }
}
console.log([...someRange]);