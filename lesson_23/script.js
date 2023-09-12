//=================== zd_1 =======================//
let arrayString1 = ['Ok compucter', 'Hello world 4 time', 'window system', 'Adam A5X', 'Bitwig studio',   'your id: 883945']
function arrayStringWithNumber(array) {
  // let searcElement = /\d/
  for (const string of array) {
    if(/\d/.test(string)){
      let paragraph = document.createElement('p')
      paragraph.innerText = ` - ${string}`
      document.querySelector('.array1').append(paragraph) 
    }
  }
}
let searchNumberString = arrayStringWithNumber(arrayString1)

//=================== zd_2 =======================//
function arrayStringWithoutNumber(array) {
  // let searcElement = /^\D/g 
  for (const string of array) {
    if(/^\D*$/g.test(string)){
      let paragraph = document.createElement('p')
      paragraph.innerText = ` - ${string}`
      document.querySelector('.array2').append(paragraph) 
    }
  }
}
let searchString = arrayStringWithoutNumber(arrayString1)

//=================== zd_3 =======================//
let arrayString2 = ['Black pumas', 'DC-DC', 'R&R', 'Korn', 'Karnivool', ]
function searchVowelsLetters(array) {
  // let searcElement = /[aeiouy]/
  // не був впеевнений з використанням тут i , але у моєму випадку теж спрацювало.
  for (const string of array) {
    if(/[aeiouy]/.test(string)){
      let paragraph = document.createElement('p')
      paragraph.innerText = ` - ${string}`
      document.querySelector('.array3').append(paragraph) 
    }
  }
}
let searchVowels = searchVowelsLetters(arrayString2)

//==================== zd_4 ====================//
function searchWithoutVowelsLetters(array) {
  let searchElement = array.filter((el)=> /^[^aeiouy]+$/i.test(el))
  document.querySelector('.childArr4').innerText = searchElement
}
let searchWithoutVowels = searchWithoutVowelsLetters(arrayString2)

//==================== zd_5 ==================//
let arrayString3 = ['id:1856','Roman', 'you are number 1', 'Adam A3X',]
function searchNumber(array) {
  let newArrStringWithNumber = array.filter((el)=> /1|3/.test(el))
  document.querySelector('.childArr5').innerText = newArrStringWithNumber
}
let searchNumberOneOrthree = searchNumber(arrayString3)

//==================== zd_6 ==================//
let stringWithNumber = 'Вчора розгрузили 15 тон кавунів. Якщо бажаєш щоб я \
допоміг, то візьми мій номер 095-345-2028.'
function numberInTheString(string) {
  let onlyNumbers = string.match(/\d{2,4}/g)
  document.querySelector('.childArr6').innerText = onlyNumbers
}
let filterNumberInString = numberInTheString(stringWithNumber)

//==================== zd_7 ==================//
let stringWithSomeText = 'Перед вами учебник по JavaScript, начиная с основ,\
включающий в себя много тонкостей и фишек JavaScript/DOM.'
function searchPunctuationMarks(string) {
  let newPunctuationMarksArr = string.match(/[.,:;""\/!?()]/g)
  document.querySelector('.childArr7').innerText = newPunctuationMarksArr
}
let punctuationMarks = searchPunctuationMarks(stringWithSomeText)
//==================== zd_8 ==================//
let someSimpleString = 'Кацап - це падлюка! Як побачиш його у приціл, підсмажуй з кулемета!'

function searchSpaceMarks(string) {
  let newArrWithSpaceMarks = string.split(/[.,!-]/)
  document.querySelector('.childArr8').innerText = newArrWithSpaceMarks
  console.log(newArrWithSpaceMarks);
}
let spaceMarks = searchSpaceMarks(someSimpleString)

//==================== zd_9 ==================//
let stringWithDate = 'Рандомна дата: 11.09.2023'
function searchDate(string) {
  if (string.match(/\d{2}\.\d{2}\.\d{4}/))
    document.querySelector('.childArr9').innerText = 'Так у форматі dd.mm.yy дата присутня'
}
let date = searchDate(stringWithDate)

//==================== zd_10 ==================//
let stringWithNumber2 = '234 34 876 3 65 0 12'
function searchDoubleDigitNumbers(string) {
  let countDubleNumbers = 0
  let test = string.match(/\b\d{2}\b/g)
  if (test)
  countDubleNumbers = test.length
  document.querySelector('.childArr10').innerText = countDubleNumbers
}
let dubleNmbers = searchDoubleDigitNumbers(stringWithNumber2)

//==================== zd_11 ==================//
let someBankNumber = '4142-3433-2323-3434, 343478-34, 898, 1, 23, 5904-5894-0958-3787, 990, 4596, 4903,'
function verificationCardNumber(string) {
  let foundNumber = string.match(/\b\d{4}-\d{4}-\d{4}-\d{4}\b/g)
  if (foundNumber)
    document.querySelector('.childArr11').innerText = `Так приклад такого номера присутні, усі знайтені номери: ${foundNumber}`
}
let numberVerification = verificationCardNumber(someBankNumber)

//==================== zd_12 ==================//
let someWebsiteAddressString = 'https://www.kmu.gov.ua/'
function defineAddress(string) {
  if (string.match(/\.gov/))
    document.querySelector('.childArr12').innerText = 'Так! Сайт є урядовим, містить домен "gov"'
}
let defineAddressWebsite = defineAddress(someWebsiteAddressString)

//==================== zd_13 ==================//
let stringWithRandomYear = '1998 2003 2021 2015 2023 2014 2025'
function chooseYears(string) {
  document.querySelector('.childArr13').innerText = string.match(/202[1-9]/g)
}
let yearsChoose = chooseYears(stringWithRandomYear)

//==================== zd_14 ==================//
let someNumberTell = '+380953452028'
function checkNumberTell(string) {
  let message
  if (string.startsWith('+38'))
    message = 'Так цей номер є Українським'
  else message = 'Ні цей номер не Український'
  document.querySelector('.childArr14').innerText = message
}
let numberTell = checkNumberTell(someNumberTell)

//==================== zd_15 ==================//
function replaceNameMarks() {
  let inputName = document.querySelector('.inputName').value
  document.querySelector('.childArr15').innerText = inputName.replace(' ', '-')
}
document.querySelector('.submit').onclick = replaceNameMarks

//==================== zd_16 ==================//
function replaceDateMarks() {
  let inputDate = document.querySelector('.inputDate').value
  document.querySelector('.childArr16').innerText = inputDate.replaceAll('.','/')
}
document.querySelector('.submitDate').onclick = replaceDateMarks

//==================== zd_17 ==================//
function determineDayOfWeek() {
  let inputDateValue = document.querySelector('.dateOfWeek').value
  let desiredValues = /0|6|sun|sat/i
  let message
  if (desiredValues.test(inputDateValue))
    message = 'Так це вихідний'
  else message = 'Ні , це робочій день'
  document.querySelector('.childArr17').innerText = message
}
document.querySelector('.submitDate2').onclick = determineDayOfWeek