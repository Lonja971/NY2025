var videoo = document.getElementById("video");
function stopVideoAtEnd() {
   // Зупиняємо відео
   videoo.pause();
   // Встановлюємо час відтворення на останній кадр
   videoo.currentTime = videoo.duration;
}
videoo.addEventListener('ended', stopVideoAtEnd);

var ballance = 2000;
var zwichCase = 0;
var osobCase = 0;
var ridCase = 0;

function startFunc() {
   console.log('');
   if (ballance >= 200) {
      ballance -= 200;
      var randomNumber1 = Math.floor(Math.random() * 100) + 1;
      if (randomNumber1 <= 40) {
         console.log('Звичайний кейс');
         zwichCase++
      } else if (randomNumber1 <= 72) {
         console.log('Особовий кейс');
         osobCase++
      } else if (randomNumber1 <= 90) {
         console.log('Рідкий кейс');
         ridCase++
      } else if (randomNumber1 <= 97) {
         console.log('Міфічний кейс');
      } else {
         console.log('Легендарний кейс');
      };
      var randomNumber2 = Math.floor(Math.random() * 100) + 1;
      if (randomNumber2 <= 20) {
         if (randomNumber2 <= 4) {
            console.log('500 Золота');
            ballance += 500;
         } else if (randomNumber2 >= 12) {
            console.log('300 Золота');
            ballance += 300;
         } else {
            console.log('200 Золота');
            ballance += 200;
         }
      }
      var randomNumber3 = Math.floor(Math.random() * 100) + 1;
      if (randomNumber3 <= 20) {
         if (randomNumber2 <= 14) {
            console.log('1 Червоний токен');
         } else {
            console.log('2 Червоних токена');
         }
      }
      console.log('Ваш баланс: ' + ballance + '. Число: ' + randomNumber1);

   } else {
      console.log('Недостатньо , баланс: ' + ballance);
   }
}



function zwich() {
   console.log('');
   if (zwichCase > 0) {
      zwichCase -= 1;
      var randomNumber1 = Math.floor(Math.random() * 100) + 1;
      if (randomNumber1 <= 20) {
         console.log('100 Золота');
         ballance += 100;
      } else if (randomNumber1 <= 60) {
         if (randomNumber1 <= 40) {
            console.log('3 танка');
         } else {
            console.log('2 танка');
         }
      } else {
         if (randomNumber1 <= 60) {
            console.log('1500 срібла');
         } else {
            console.log('1000 срібла');
         }
      }
      console.log('Ваш баланс: ' + ballance + '. Число: ' + randomNumber1);
   } else {
      console.log('Недостатньо , баланс: ' + zwichCase);
   }
}
function osob() {
   console.log('');
   if (osobCase > 0) {
      osobCase -= 1;
      var randomNumber1 = Math.floor(Math.random() * 100) + 1;
      if (randomNumber1 <= 32) {
         console.log('2000 срібла');
      } else if (randomNumber1 <= 52) {
         console.log('5 танков');
      } else if (randomNumber1 <= 72) {
         console.log('1 премАкк');
      } else {
         if (randomNumber1 <= 70) {
            console.log('300 Золота');
            ballance += 300;
         } else {
            console.log('500 Золота');
            ballance += 500;
         }
      }
      var randomNumber2 = Math.floor(Math.random() * 100) + 1;
      if (randomNumber2 <= 10) {
         console.log('Скін/Обважування');
      }
      console.log('Ваш баланс: ' + ballance + '. Число: ' + randomNumber1);
   } else {
      console.log('Недостатньо , баланс: ' + zwichCase);
   }
}
function rid() {
   console.log('');
   if (ridCase > 0) {
      ridCase -= 1;
      var randomNumber1 = Math.floor(Math.random() * 100) + 1;
      if (randomNumber1 <= 35) {
         console.log('1 день премАкк');
      } else if (randomNumber1 <= 65) {
         if (randomNumber1 <= 42) {
            console.log('5000 срібла');
         } else {
            console.log('3000 срібла');
         }
      } else {
         if (randomNumber1 <= 70) {
            console.log('700 Золота');
            ballance += 700;
         } else {
            console.log('500 Золота');
            ballance += 500;
         }
      }
      var randomNumber2 = Math.floor(Math.random() * 100) + 1;
      if (randomNumber2 <= 10) {
         console.log('1 Креслення');
      }
      var randomNumber3 = Math.floor(Math.random() * 100) + 1;
      if (randomNumber3 <= 50) {
         console.log('1 Червоний токен');
      } else if (randomNumber3 <= 10) {
         console.log('2 Червониї токена');
      }
      console.log('Ваш баланс: ' + ballance + '. Число: ' + randomNumber1);
   } else {
      console.log('Недостатньо , баланс: ' + zwichCase);
   }
}