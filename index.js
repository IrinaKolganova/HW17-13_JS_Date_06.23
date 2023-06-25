const bday = document.getElementById('birthDay'); // ВОТ ТУТ НЕ ПОНИМАЮ, КАК ИМЕННО ВЫБРАТЬ ДАТУ ДНЯ РОЖДЕНИЯ? чЕРЕЗ TEXTCONTENT НА ВЫХОДИТ, НАПРИМЕР...
const today = new Date();
const diff = bday(Date.now()) - today(Date.now());

function getDiff() {
  if (diff > 0) { console.log(Math.floor((Date.parse(bday) - Date.parse(today)) / 1000 / 60 / 60 / 24)) }
}
  else { console.log('Ваш день рождения закончился'); }

addEventListener('click', getDiff);




//ВОПРОСЫ:
//ПОЧЕМУ НЕ ХОЧЕТ СЧИТАТЬСЯ ФОРМУЛА НА СТР.6?
//вЫВОД ДАННЫХ НА СТРАНИЧКУ, Я ТАК ПОНИМАЮ, ПРОИЗВОДИТСЯ ЧЕРЕЗ СОЗДАНИЕ <P>?






















// ДЗ, предыдущая версия.

// let options={day:'numeric',
// month:'numeric',
// year:'numeric',
// timezone:'UTC',
// hour:'numeric',
// minute:'numeric'};
// let nameInput = document.getElementById('name');
// let check = document.getElementById('checkbox');
// let photo = document.getElementById('photo');
// let chat = document.getElementById('chat');
// let button = document.getElementById('button');

// let userName = document.getElementById('userName');
// let userPhoto = document.getElementById('userPhoto');
// let userChat = document.getElementById('userChat');
// let date = document.getElementById('date');

// let photoRandom = Math.round(Math.random()*10-4);

// function getCheck(){
//     if (check.checked|| document.getElementById('name').value === '') {userName.textContent = 'username';}
//     else{let newName = nameInput.value[0].toUpperCase() + nameInput.value.slice(1).toLowerCase();
//         return(userName.textContent=newName);
//          document.getElementById('userName').textContent = document.getElementById('name').value;}}

// function getDate(){
//    let nowDate=new Date();
//     date.textContent=nowDate.toLocaleString("ru", options);
// }

// function addPhoto(){
//     if (document.getElementById('photo').value !==''){ userPhoto.src = photo.value;}
//     else {
//         switch (photoRandom) {
//             case 1:
//                 userPhoto.src = './img/img1.jpg';
//               break;
//             case 2:
//                 userPhoto.src = './img/img2.jpg';
//               break;
//             case 3:
//                 userPhoto.src = './img/img3.jpg';
//               break;
//             case 4:
//                 userPhoto.src = './img/img4.jpg';
//               break;
//             case 5:
//                 userPhoto.src = './img/img5.jpg';
//               break;
//             case 6:
//                 userPhoto.src = './img/img6.jpg';
//               break;
//             default:
//                 userPhoto.src = './img/img6.jpg';
//           }
// }}

// function checkSpam(){let antiSpam=chat.value.replace(/viagra|виагра|ххх|XXX/gi, '***');
// userChat.textContent = antiSpam;}
// function getComment(){
//     getCheck();
//     getDate()
//     checkSpam();
//     addPhoto();
//    }
// button.addEventListener('click',getComment);