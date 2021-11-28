let title = "Калькулятор цены работы",
    screens = "Простые, Сложные, Интерактивные",
    screenPrice = 4,
    rollback = 80,
    fullPrice = 500,
    adaptive = true;


console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log('Стоимость разработки сайта '+ fullPrice + ' рублей');

screens = screens.toLowerCase().replaceAll(' ','').split(',');
console.log(screens);

console.log(fullPrice * (rollback / 100));


