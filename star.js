let options = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric'
};
let nameInput = document.getElementById('name');
let check = document.getElementById('checkbox');
let photo = document.getElementById('photo');
let chat = document.getElementById('chat');
let button = document.getElementById('button');

let userName = document.getElementById('userName');
let userPhoto = document.getElementById('userPhoto');
let userChat = document.getElementById('userChat');
let date = document.getElementById('date');

let photoRandom = Math.round(Math.random() * 10 - 4);

function getCheck() {
    if (check.checked || document.getElementById('name').value === '') { userName.textContent = 'username'; }
    else {
        let newName = nameInput.value[0].toUpperCase() + nameInput.value.slice(1).toLowerCase();
        return (userName.textContent = newName);
        document.getElementById('userName').textContent = document.getElementById('name').value;
    }
}

function getDate() {
    let nowDate = new Date();
    date.textContent = nowDate.toLocaleString("ru", options);
}

function addPhoto() {
    if (document.getElementById('photo').value !== '') { userPhoto.src = photo.value; }
    else {
        switch (photoRandom) {
            case 1:
                userPhoto.src = './img/img1.jpg';
                break;
            case 2:
                userPhoto.src = './img/img2.jpg';
                break;
            case 3:
                userPhoto.src = './img/img3.jpg';
                break;
            case 4:
                userPhoto.src = './img/img4.jpg';
                break;
            case 5:
                userPhoto.src = './img/img5.jpg';
                break;
            case 6:
                userPhoto.src = './img/img6.jpg';
                break;
            default:
                userPhoto.src = './img/img6.jpg';
        }
    }
}

function checkSpam() {
    let antiSpam = chat.value.replace(/viagra|виагра|ххх|XXX/gi, '***');
    userChat.textContent = antiSpam;
}
function getComment() {
    getCheck();
    getDate()
    checkSpam();
    addPhoto();
}
button.addEventListener('click', getComment);


//НЕ МОГУ РАЗОБРАТЬСЯ В ЧЁМ ОШИБКА...






















// ДЗ, предыдущая версия.
// // Напишите функцию `formatDate(date)`, форматирующую `date` по следующему принципу:

// // - если спустя `date` прошло менее 1 секунды, вывести `"прямо сейчас"` ;
// // - в противном случае, если с `date` прошло меньше 1 минуты, вывести `"n сек. назад"`;
// // - в противном случае, если меньше часа, вывести `"m мин. назад"`;
// // - в противном случае, полная дата в формате `"DD.MM.YY HH:mm"`. А именно: `"день.месяц.год часы:минуты"`,
// // всё в виде двух цифр, т.е. `31.12.16 10:00`.

// let date=new Date("2023-3-11 1:35");

// function formatDate(date){
// let diff=Math.round((Date.now()-date)/1000);
// let options={day:'numeric',
// month:'numeric',
// year:'numeric',
// timezone:'UTC',
// hour:'numeric',
// minute:'numeric'};
//     if (diff<1) return 'прямо сейчас';
//     else if (diff>1 && diff<60) return `${diff}+сек.назад`;
//     else if (diff>60 && diff<3600) return `${diff/60}+мин.назад`;
//     else console.log(new Date().toLocaleString("ru", options));
// }
// console.log(formatDate(date));