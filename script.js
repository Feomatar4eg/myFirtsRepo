'use strict';

let appPriceCalc = {
    rollback :80,
    title : '',
    screens : '',
    screenPrice : 0,
    adaptive : true,
    service1 : '',
    servicePrice1 : 0,
    service2 : '',
    servicePrice2 : 0,
    fullPrice : 0, 
    servicePercentPrice : 0,
    allServicePrice : 0,

    start : function(){
        appPriceCalc.asking();
        appPriceCalc.title = appPriceCalc.getTitle(appPriceCalc.title);
        appPriceCalc.screens = appPriceCalc.screens.toLowerCase().replaceAll(' ','').split(',');
        appPriceCalc.allServicePrice = appPriceCalc.getAllServicePrices();
        appPriceCalc.fullPrice =  appPriceCalc.getFullPrice(appPriceCalc.screenPrice, appPriceCalc.allServicePrice);
        appPriceCalc.servicePercentPrice = appPriceCalc.getServicePercentPrices(appPriceCalc.fullPrice, appPriceCalc.rollback);
        appPriceCalc.logger();
    },

    asking : function(){
        appPriceCalc.title = prompt('Как называется ваш проект?', "Калькулятор верстки");
        appPriceCalc.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Разные");
        
        do {
            appPriceCalc.screenPrice = +prompt('Сколько будет стоить данная работа?', "15000");
        }while (!appPriceCalc.isNumber(appPriceCalc.screenPrice))
        appPriceCalc.adaptive = confirm('Нужен ли адаптив на сайте?');
    
    },

    logger : function(){
    console.log(appPriceCalc.showTypeOf(appPriceCalc.title));
    console.log(appPriceCalc.showTypeOf(appPriceCalc.fullPrice));
    console.log(appPriceCalc.showTypeOf(appPriceCalc.adaptive));
    console.log(appPriceCalc.screens);
    console.log(appPriceCalc.getRollbackMessage(appPriceCalc.fullPrice));
    console.log(appPriceCalc.servicePercentPrice);
    },
    
    isNumber : function(num){
    return( !isNaN(parseFloat(num)) && isFinite(num));
    },
    getAllServicePrices : function(){
        let i = 0;
        let sum = 0;
        do {            
            if (i === 0) {
                appPriceCalc.service1 = prompt('Какой дополнительный тип услуги нужен?','111');
                appPriceCalc.servicePrice1 = prompt('Сколько это будет стоить?');
                if (appPriceCalc.isNumber(appPriceCalc.servicePrice1)){
                    sum += +appPriceCalc.servicePrice1;
                    i++;
                }
            }
            if (i === 1) {
                appPriceCalc.service2 = prompt('Какой дополнительный тип услуги нужен?','222');
                appPriceCalc.servicePrice2 = prompt('Сколько это будет стоить?');
                if (appPriceCalc.isNumber(appPriceCalc.servicePrice2)){
                    sum += +appPriceCalc.servicePrice2;
                    i++;
                }
                
            }
    
        } while (i < 2);
    
        return sum;
    },
    getFullPrice : function(price, servicePrices){
        return price + servicePrices;
    },
    getTitle : function(str){
        str = str.toLowerCase();
        for (let i = 0; i < str.length; i++){
            if (str[i] != ' ') {
                str = str.replace(str[i],str[i].toUpperCase());
                break;
            }
        }
        return str;
    },
    getServicePercentPrices : function(fullPrice, rollbackPrice){
        return Math.round(fullPrice*(rollbackPrice/100));
    },
    getRollbackMessage : function(price){
        if (price >= 30000) {return 'Даем скидку в 10%';}
            else if (price >= 15000 && price < 30000) {return 'Даем скидку в 5%';}
            else if (price < 15000 && price >= 0) {return 'Скидка не предусмотрена';}
            else {return 'Что то пошло не так';}
    },
    showTypeOf : function(vari){
        return vari + ' ' + typeof vari;
    },   
}


appPriceCalc.start()

