//! ================= Асинхронна обробка даних. Promise ===================

//Todo ==== Асинхронне виконання коду.  Promise

//* Promise - інструумент для організації асинхронного коду(тобто коду який не блокує виконання
//* інших фрагментів коду)

//* Promise - це об'єкт, який дозволяє асінхронно (без очікування/виконання) виконувати деякий фрагмент коду.
//* Тобто ми не очікуємо на його завершення. Натомість додаємо можливість аналізу результату цього фрагменту коду,
//* коли він завершається. Тобто додаємо функції, які будуть виконуватись після його виконання.

//* Promise - може знаходитись у одному з станів
//* - pending - очікування(основний код виконується)
//* - fulfilled -  основний код виконано з статусом 'успішно' (ми вирішуємо шо це озночає)
//* - rejected - основний код виконано з статусом 'відхилено' (ми самі вирішуємо зміст цього статусу)

//Todo === Приклад: Генеруємо через 5 секунд число. Якщо число від 1 до 12 , то генерування успішне.

//* створення проміса
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    //* основний код:
    let month = 1 + Math.floor(Math.random() * 30)
    //* результат успіху:
    if (month <= 12) resolve(month)
      //* результат невдачі:
    else reject(new Error('Month is not correct'))
  }, 5000);
})

//* додаємо опис обробки успішного завершення проміса(це якщо викликано resolve)
promise.then((generetedMonth) => { console.log(`Month = ${generetedMonth}`) })

//* додаємо опис обробки відхиленого завершенняя проміса (це якщо викликано reject) 
promise.catch((err) => { console.log(err.message); })

//* додаємо завершальний метод, який буде виконувати обов'язково після закінчиня проміса
promise.finally(() => { console.log('completed'); }) //?  але це не обов'язково



//Todo === Приклад використання деяків then з використанням ланцюжка промісів:

new Promise((resolve, reject) => {
  setTimeout(() => {
    let month = 1 + Math.floor(Math.random() * 30)
    if (month <= 12) resolve(month)
    else reject(new Error('Month is not correct'))
  }, 5000);
})
  .then((generetedMonth) => generetedMonth + 1) //? не радять писати promise.then
  .then((generetedMonth) => {
  console.log(`Month = ${generetedMonth}`) ;
  })
  .catch((err) => {                             //? так само і тут не треба писати promise.catch
  console.log(err.message);
  })
  .finally(() => { console.log('compleited'); })       //? так само і тут не треба писати promise.finally

  //Todo === Ланцюжок промісів.Передача даних між функціями колбеками(результат що ретурнится у функціі
//Todo  колбеку then є вхідним параметром у наступній функції колбеку then)
  
//Todo === Приклад: Генеруємо через 3 секунди число. Якщо число від 1 до 12 то генерування успішне
//Todo потім визначаємо пору року, потім визначити тип одягу.

new Promise((resolve, reject) => {
  setTimeout(() => {
    let month = 1 + Math.floor(Math.random() * 30)
    if (month <= 12) resolve(month)
    else reject(new Error('Month is not correct'))
  }, 6000);
})
  .then((generetedMonth) => {
    let result
  switch (generetedMonth) {
    case 1: case 2: case 12: result = 'Зима' 
      break;
    case 3: case 4: case 5: result = 'Весна' 
      break;
    case 6: case 7: case 8: result = 'Літо' 
      break;
    case 9: case 10: case 11: result = 'Осінь' 
      break;
    }
    return result
  })
  .then((season) => {
    let result2
  switch (season) {
    case 'Зима': result2 = 'Треба вдягнути курточку' 
      break;
    case 'Весна': result2 = 'Треба вдягнути світер' 
      break;
    case 'Літо': result2 = 'Треба вдягнути шорти' 
      break;
    case 'Осінь': result2 = 'Треба вдягнути вітрівку' 
      break;
    }
    return result2
  })
  .then((dress) => {
  console.log(dress);
  })
  .catch((err) => { console.log(err.message); })
  .finally(() => { console.log('compleited'); })


//Todo === Паралельне виконання промісів. Promise.all
  
//* Promise.all
//* - дозволяє виконуватись паралельно декільком промісам
//* - очікує поки всі вони виконується(результатом є масив резільтатів кожного із промісів)
//* - якщо якийсь з ппромісів завершується невдачно, то весь проміс припиняє роботу

//Todo ===  Приклад:

Promise.all([
  new Promise(resolve => setTimeout(()=> resolve(1), 7000)),
  new Promise(resolve => setTimeout(()=> resolve(2), 5000)),
  new Promise(resolve => setTimeout(()=> resolve(3), 3000)),
])
  .then((ee) => { console.log(ee); })
  .catch((err) => { console.log(err); })


//Todo === Конкурентне виконання промісів Promis.race

//* - дозволяє виконуватись паралельно декільком промісам
//* - чикає лише на перший виконаний проміс(результати інших ігнорується)
//* - результатом є результат першого виконаного промісу або помилку

Promise.race([
  new Promise(resolve => setTimeout(()=> resolve(1), 7000)),
  new Promise(resolve => setTimeout(()=> resolve(2), 5000)),
  new Promise(resolve => setTimeout(()=> resolve(3), 3000)),
])
  .then((ee) => { console.log(ee); })
  .catch((err) => { console.log(err); })

  
//! === Спеціалізований синтаксис для роботи з промісами. async/await

//* опис функції що повертає Promise(або явно створюємо проміс, або він автоматично створюється):

async function f() {
  return 1 //? тут автоматично створюється проміс
}
//f().then(alert)

//* ---- аналог ----
async function f2() {
  return Promise.resolve(777)
}
//f2().then(alert)

//Todo === В середені асинхронної функціі можна використовувати await що приводить до :

//* - очікування виконання позначеної таким чином асинхроної операції.
//* - обробка помилок здійснюється з використанням звичайного try... catch... finally

// асинхронні функції 
async function f3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1)
    }, 2000);
  })
}
async function f4() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10)
    }, 2000);
  })
}
// виклик асенхронної функції з await
async function resFunction() {
  try {
    const res1 = await f3()
    const res2 = await f4()
    console.log(res1 + res2);
  }
  catch (err) {
    console.log(err);
  }
}
resFunction()