let title = "Калькулятор цены работы",
    screens = "Простые, Сложные, Интерактивные",
    screenPrice = 4,
    rollback = 80,
    fullPrice = 500,
    adaptive = true;


console.log(typeof(title), typeof(fullPrice), typeof(adaptive));
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log(screens.toLowerCase());
console.log(fullPrice * (rollback / 100));


