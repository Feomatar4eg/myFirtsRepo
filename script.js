'use strict';

let week = ['sun','mon','tue','wed','thu','fri','sat'];

let now = new Date()

for(let key in week){
    if (key == now.getDay()) {
        console.log(week[key].bold());
    }else if (key == 0 || key == 6){
       console.log(week[key].italics());
    }else console.log(week[key]);
}