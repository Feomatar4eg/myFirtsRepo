'use strict';

let rollback = 80;
let title;
let screens;
let screenPrice;
let adaptive;
let service1;
let servicePrice1;
let service2;
let servicePrice2;

let fullPrice;
let servicePercentPrice;
let allServicePrice;



const asking = function(){
    title = prompt('Как называется ваш проект?', "Калькулятор верстки");
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Разные");
    
    while (!isNumber(screenPrice)){
        screenPrice = +prompt('Сколько будет стоить данная работа?', "15000");
    }
    adaptive = confirm('Нужен ли адаптив на сайте?');

};


const isNumber = function(num){

    return( !isNaN(parseFloat(num)) && isFinite(num));
};


const getAllServicePrices = function(){
    let i = 0;
    let sum = 0;
    do {
        
        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?','111');
            servicePrice1 = prompt('Сколько это будет стоить?');
            if (isNumber(servicePrice1)){
                sum += +servicePrice1;
                i++;
            }
        }
        if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?','222');
            servicePrice2 = prompt('Сколько это будет стоить?');
            if (isNumber(servicePrice2)){
                sum += +servicePrice2;
                i++;
            }
            
        }

    } while (i < 2);

    return sum;
};

function getFullPrice(price, servicePrices){
    return price + servicePrices;
}

const getTitle = function(str){
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++){
        if (str[i] != ' ') {
            str = str.replace(str[i],str[i].toUpperCase());
            break;
        }
    }
    return str;
};

const getServicePercentPrices = function(fullPrice, rollbackPrice){
    return Math.round(fullPrice - rollbackPrice);
};

const getRollbackMessage = function(price){
    if (price >= 30000) {return 'Даем скидку в 10%';}
        else if (price >= 15000 && price < 30000) {return 'Даем скидку в 5%';}
        else if (price < 15000 && price >= 0) {return 'Скидка не предусмотрена';}
        else {return 'Что то пошло не так';}
};

const showTypeOf = function(variable){
    return variable + ' ' + typeof variable;
};


asking();
title = getTitle(title);
screens = screens.toLowerCase().replaceAll(' ','').split(',');
allServicePrice = getAllServicePrices();
fullPrice =  getFullPrice(screenPrice, allServicePrice);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);



console.log(showTypeOf(title));
console.log(showTypeOf(fullPrice));
console.log(showTypeOf(adaptive));

console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);



