'use strict';

let title = prompt('Как называется ваш проект?');
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = parseInt(prompt('Сколько будет стоить данная работа?'));
let rollback = 80;
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = parseInt(prompt('Сколько это будет стоить?'));
let service2 = prompt('Какой дополнительный тип услуги еще нужен?');
let servicePrice2 = parseInt(prompt('Сколько это будет стоить?'));

let fullPrice;
let servicePercentPrice;
let allServicePrice;

let getAllServicePrices = function(price1, price2){
    return price1 + price2;
};

function getFullPrice(price, servicePrices){
    return price + servicePrices;
}

let getTitle = function(str){
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++){
        if (str[i] != ' ') {
            str = str.replace(str[i],str[i].toUpperCase());
            break;
        }
    }
    return str;
};

let getServicePercentPrices = function(fullPrice, rollbackPrice){
    return Math.round(fullPrice - rollbackPrice);
};

let getRollbackMessage = function(price){
    if (price >= 30000) {return 'Даем скидку в 10%';}
        else if (price >= 15000 && price < 30000) {return 'Даем скидку в 5%';}
        else if (price < 15000 && price >= 0) {return 'Скидка не предусмотрена';}
        else {return 'Что то пошло не так';}
};

let showTypeOf = function(variable){
    return variable + ' ' + typeof variable;
};

title = getTitle(title);
screens = screens.toLowerCase().replaceAll(' ','').split(',');
allServicePrice = getAllServicePrices(servicePrice1,servicePrice2);
fullPrice =  getFullPrice(screenPrice, allServicePrice);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);



console.log(showTypeOf(title));
console.log(showTypeOf(fullPrice));
console.log(showTypeOf(adaptive));

console.log(screens);

console.log(getRollbackMessage(fullPrice));

console.log(servicePercentPrice);



