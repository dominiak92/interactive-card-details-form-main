//IMIE I NAZIWSKO INPUT
const cardName = document.querySelector('.card-holder-input');

//NUMER KARTY INPUT = 
const cardNumber = document.querySelector('.card-number-input');

//MIESIAC WAZNOSCI INPUT
const cardMonth = document.querySelector('.card-month-input');

//ROK WAZNOSCI INPUT
const cardYear = document.querySelector('.card-year-input');

//KOD CVC INPUT
const cvc = document.querySelector('.cvc-input');

//PRZYCISK CONFIRM
const btn = document.querySelector('button');

//NAME ERROR
const nameError = document.querySelector('.name-error');

//FORMAT ERROR
const formatError = document.querySelector('.format-error');

//NUMBER ERROR
const numberError = document.querySelector('.number-error');

//MONTH ERROR
const dateError = document.querySelector('.mm-error');

//YEAR ERROR
const yearError = document.querySelector('.yy-error');

//CVC ERROR

const cvcError = document.querySelector('.cvc-error');

//FORM

const form = document.querySelector('#form')

//----------------- KARTA ---------------

//IMIE I NAZWISKO NA KARCIE
const cardNameExample = document.querySelector('.front-name');

//NUMER KARTY NA KARCIE
const cardNumberExample = document.querySelector('.front-cardnumb');

//MIESIAC WAZNOSCI NA KARCIE
const cardMonthExample = document.querySelector('.card-month');

//ROK WAZNOSCI NA KARCIE
const cardYearExample = document.querySelector('.card-year');

//KOD CVC NA KARCIE
const cvcExample = document.querySelector('.reverse-cvc')


//WYSWIETLANIE IMIENIA I NAZWISKA NA KARCIE
cardName.oninput = () =>{
    cardNameExample.innerText = cardName.value.toUpperCase()

};

//WYSWIETLANIE NUMERU KARTY NA KARCIE
    cardNumber.oninput = () =>{
        cardNumberExample.innerText = cardNumber.value.toString().split('').slice(0, -1).join('');

        //.toString().match(/.{4}/g).join(' ')
    };
//WYSWIETLANIE MIESIACA WAZNOSCI NA KARCIE
    cardMonth.oninput = () =>{
        cardMonthExample.innerText = cardMonth.value;
        
    };
//WYSWIETLANIE ROKU WAZNOSCI NA KARCIE
    cardYear.oninput = () =>{
        cardYearExample.innerText = cardYear.value;
    };
//WYSWIETLANIE KODU CVC NA KARCIE
    cvc.oninput = () =>{
        cvcExample.innerText = cvc.value;
    };
//NASLUCHIWANIE NA FORMULARZ
    form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
    validateCardName();
    validateMonth();
    validateCvc();
    validateCardNumber();
    validateYear();
    
    console.log(validateCardName() + ' nazwa karty');
    console.log(validateMonth() + ' miesiac karty');
    console.log(validateYear() + ' rok karty');
    console.log(validateCardNumber() + ' numer karty');
    console.log(validateCvc() + ' kod cvc');
    console.log(cardName.value.includes(' '))

    if (validateCardName(true) &&
    validateMonth(true) &&
    validateCvc(true) &&
    validateCardNumber(true) &&
    validateYear(true)){
        alert('GITARA BYKU')
       }else console.log('Zostajemy');

    });

    const checkInputs = () => {
        const cardNameValue = cardName.value.trim();
        const cardNumberValue = cardNumber.value.trim();
        const cardMonthValue = cardMonth.value.trim();
        const cardYearValue = cardYear.value.trim();
        const cvcValue = cvc.value.trim();

    validateCardNumber = () => {
//CZY NUMER KARTY MA WARTOSC
if(cardNumberValue === ''){
numberError.classList.add('active');
cardNumberExample.innerText = "0000 0000 0000 0000";
cardNumber.style.border = "1px solid hsl(0, 100%, 66%)";
return false;
}else if (cardNumberValue.length < 10) {
    numberError.classList.add('active');
    cardNumberExample.innerText = "0000 0000 0000 0000";
    cardNumber.style.border = "1px solid hsl(0, 100%, 66%)";
    return false;
            }
else {numberError.classList.remove('active');
cardNumber.style.border = "1px solid hsl(270, 3%, 87%)"}
return true;}

    validateCardName = () => {
        //CZY CARDHOLDER NAME MA WARTOSC
if(cardNameValue === ''){
nameError.classList.add("active");
cardNameExample.innerText = "JANE APPLESEED";
cardName.style.border = "1px solid hsl(0, 100%, 66%)";
return false;
} else if (
cardNameValue.length < 6 || !cardName.value.includes(' ')) {
    nameError.classList.add("active");
    cardNameExample.innerText = "JANE APPLESEED";
    cardName.style.border = "1px solid hsl(0, 100%, 66%)";
    return false;}
// } else if (cardName.value.includes(' ')){
//     nameError.classList.remove("active");
// cardName.style.border = "1px solid hsl(270, 3%, 87%)"
//     return true;
// }
else {nameError.classList.remove("active");
cardName.style.border = "1px solid hsl(270, 3%, 87%)";
return true};}

    validateMonth = () => {
        //CZY MONTH MA WARTOSC
if(cardMonthValue === '' || cardMonthValue === '0'){
dateError.classList.add("active");
cardMonthExample.innerText = "00";
cardYearExample.innerText = "00";
cardMonth.style.border = "1px solid hsl(0, 100%, 66%)";
return false;
} else {dateError.classList.remove("active");
cardMonth.style.border = "1px solid hsl(270, 3%, 87%)";
return true;}}

    validateYear = () => {
        //CZY YEAR MA WARTOSC
if(cardYearValue === ''){
cardYear.style.border = "1px solid hsl(0, 100%, 66%)";
yearError.classList.add("active");
cardYearExample.innerText = "00";
return false;
} else {
yearError.classList.remove("active");
cardYear.style.border = "1px solid hsl(270, 3%, 87%)";
return true}}

    validateCvc = () => {
        //CZY CVC MA WARTOSC
if(cvcValue === ''){
cvcError.classList.add('active');
cvcExample.innerText = "000";
cvc.style.border = "1px solid hsl(0, 100%, 66%)";
return false;
}
else {cvcError.classList.remove('active');
cvc.style.border = "1px solid hsl(270, 3%, 87%)";
return true;};}
    };

    // redirect = () => {
    //    if (validateCardName(true) && validateMonth(true) && validateCvc(true) && validateCardNumber(true)){
    //     console.log('Przekierowanie')
    //    }else console.log('Zostajemy');
    // }
new Cleave('.card-number-input', {
    creditCard: true,
    delimiter: ' ',
    onCreditCardTypeChanged: function (type) {
const defaultIco = document.querySelector('.ico-wrapper');
const visa  = document.querySelector('.fa-cc-visa');
const mastercard  = document.querySelector('.fa-cc-mastercard');
const amex  = document.querySelector('.fa-cc-amex');
const jcb  = document.querySelector('.fa-cc-jcb');
const discover  = document.querySelector('.fa-cc-discover');

if(type === "visa"){
visa.classList.add('active')
} else {visa.classList.remove('active')};

if(type === "jcb"){
jcb.classList.add('active')
} else {jcb.classList.remove('active')};

if(type === "discover"){
discover.classList.add('active')
} else {discover.classList.remove('active')};

if(type === "amex"){
amex.classList.add('active')
} else {amex.classList.remove('active')};

if(type === "mastercard" || type === "maestro"){
mastercard.classList.add('active');
} else {mastercard.classList.remove('active')};

if(type === "unknown" || type === "uatp"){
defaultIco.style.opacity = "1"
} else {defaultIco.style.opacity = "0"}
    }
});

let cleaveMonth = new Cleave('.card-month-input', {
    date: true,
    datePattern: ['m']
});

let cleaveYear = new Cleave('.card-year-input', {
    date: true,
    datePattern: ['y']
});
