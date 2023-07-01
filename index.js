// 2. Напишем программу, которая будет считать количество дней до дня рождения пользователя и отображать это значение на странице.
//     - Создайте HTML-страницу с заголовком "Дни до дня рождения"
//     - Добавьте на страницу инпут, который позволит пользователю выбрать дату рождения в текущем году, и кнопку, при нажатии на которую, на страницу будет выводиться значение количества дней до дня рождения.
//     - Если пользователь не ввёл дату рождения, под полем ввода будет появляться красное сообщение с просьбой ввести дату. Если пользователь введёт дату или изменит её, сообщение об ошибке будет скрыто.

//     *** Добавьте условия, которые будут правильно определять склонение слова "день" в соответствии с грамматикой русского языка



function getDiff() {
  const bday = document.getElementById('birthDay');
  const bdayValue = new Date(bday.value);
  const today = new Date();
  const diffInMillisec = bdayValue - today;
  const diffDay = Math.ceil(diffInMillisec / (1000 * 60 * 60 * 24));
  if (diffDay > 0 && (diffDay == 1 || diffDay == 21)) {
    // console.log(diffDay)
    const p = document.createElement('p');
    p.textContent = `До вашего дня рождения ${diffDay} день`;
  }
  else if (diffDay > 0 && (diffDay == 2 || diffDay == 3 || diffDay == 4 || diffDay == 22 || diffDay == 23 || diffDay == 24)) {
    // console.log(diffDay)
    const p = document.createElement('p');
    p.textContent = `До вашего дня рождения ${diffDay} дня`;
  }
  else if (diffDay < 0) {
    //console.log('Ваш день рождения закончился'); 
    const p = document.createElement('p');
    p.textContent = `Ваш день рождения уже прошёл`;
  }
  else if (bdayValue = '') {
    //console.log('Введите дату вашего рождения!');
    //   // const p = document.createElement('p');
    //   // p.textContent = 'Введите дату вашего рождения!';
  }
  else {// console.log(diffDay)
    const p = document.createElement('p');
    p.textContent = `До вашего дня рождения ${diffDay} дней`;
  }
}
button.addEventListener('click', getDiff);




//ВОПРОСЫ:
//ПОЧЕМУ НЕ СОЗДАЕТСЯ ПАРАГРАФ, В КОТОРЫЙ ДОЛЖНА ВЫВОДИТЬСЯ ФРАЗА `До вашего дня рождения ${diffDay} дня`? ИЛИ ОСТАЛЬНЫЕ ВАРИАЦИИ В ЗАВИСИМОСТИ ОТ...
//КАК В КОДЕ ОБОЗНАЧИТЬ УСЛОВИЕ НЕВЫБРАННОГО ДНЯ РОЖДЕНИЯ? Т.Е. ЕСЛИ ПОЛЬЗОВАТЕЛЬ НЕ ОБОЗНАЧИЛ ДЕНЬ, НО НАЖАЛ КНОПКУ ДОЛЖНА ПОЯВИТЬСЯ ФРАЗА "ВЫБЕРИТЕ ДЕНЬ РОЖДЕНИЯ". я ПОПЫТАЛАСЬ НА СТР.31, НО ВИДИМО ЭТО НЕ КОРРЕКТНО.






















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