// Напишите функцию `formatDate(date)`, форматирующую `date` по следующему принципу: 

// - если спустя `date` прошло менее 1 секунды, вывести `"прямо сейчас"` ;
// - в противном случае, если с `date` прошло меньше 1 минуты, вывести `"n сек. назад"`;
// - в противном случае, если меньше часа, вывести `"m мин. назад"`;
// - в противном случае, полная дата в формате `"DD.MM.YY HH:mm"`. А именно: `"день.месяц.год часы:минуты"`, 
// всё в виде двух цифр, т.е. `31.12.16 10:00`.

let date=new Date("2023-3-11 1:35");

function formatDate(date){ 
let diff=Math.round((Date.now()-date)/1000);
let options={day:'numeric',
month:'numeric',
year:'numeric',
timezone:'UTC',
hour:'numeric',
minute:'numeric'};
    if (diff<1) return 'прямо сейчас';
    else if (diff>1 && diff<60) return `${diff}+сек.назад`;
    else if (diff>60 && diff<3600) return `${diff/60}+мин.назад`;
    else console.log(new Date().toLocaleString("ru", options));
}
console.log(formatDate(date));