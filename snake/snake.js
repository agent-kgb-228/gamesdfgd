function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

let w = canvas.width;
let h = canvas.height;
let size = 25;
let ochk = document.querySelector('#kom');
let info = document.querySelector('#tablo');
let colohik = "#000000"
let ochki = 0;
let pobeda = 100;
let sovladelech = 50;
let okolo = 75;
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function changeFoodPositon() {
    food.x = random(0, w / size - 1);
    food.y = random(0, h / size - 1);
 
}



let snake = {
    x: [],
    y: [],
    colorHead: "rgb(202, 250, 204)",
    colorBody: "yellow",
    move: 'right',
}
snake.x[0] = 0;
snake.y[0] = 0;

let food = {
    x: '',
    y: '',
    color: 'red'
}

let pause = false;
function stope() {
    if (pause == false) {
        pause = true
    }
    else {
        pause = false
        step()
    }
}
changeFoodPositon()
let img2 = new Image()
img2.src = 'android/android.png'
let img3 = new Image()
img3.src = 'android/yandex.png'
let img4 = new Image()
img4.src = 'android/rudroid.png'
function step() {
    ctx.fillStyle = colohik
    ctx.clearRect(0, 0, w, h)
    //рисуем поле
    for (let i = 0; i <= w / size; i++) {
        ctx.fillRect(i * size, 0, 1, w);
        for (let j = 0; j <= h / size; j++) {
            ctx.fillRect(0, j * size, h, 1);

        }
    }

    //рисуем голову
    ctx.fillStyle = snake.colorHead;
    ctx.drawImage(img3,snake.x[0] * size, snake.y[0] * size, size, size)

    //рисуем хвост
    ctx.fillStyle = snake.colorBody;
    for (let i = 1; i < snake.x.length; i++) {
     ctx.drawImage(img4, snake.x[i] * size, snake.y[i] * size, size, size)
      /*  ctx.drawImage(img2, food.x * size, food.y * size, size, size)*/
    }

    //еда
    ctx.fillStyle = food.color;
    ctx.drawImage(img2, food.x * size, food.y * size, size, size)
    for (let i = snake.x.length - 1; i >= 1; i--) {
        snake.x[i] = snake.x[i - 1];
        snake.y[i] = snake.y[i - 1];
    }
    //перемещаем голову
    if (snake.move === 'right') snake.x[0]++;
    if (snake.move === 'left') snake.x[0]--;
    if (snake.move === 'up') snake.y[0]--;
    if (snake.move === 'down') snake.y[0]++;
//победа
if(ochki == pobeda){
    info.textContent = 'Яндекс выкупил Android у Google'
    setInterval(function() {
        location.reload();
       }, 10000);
}


if(ochki >= sovladelech && ochki <= okolo) info.textContent = 'Яндекс стал совладельцем Android';
if(ochki > okolo && ochki < pobeda) info.textContent = 'Яндекс почти выкупил Android у Google'



    //поедание
    if (snake.x[0] === food.x && snake.y[0] === food.y) {
        snake.x.push(snake.x[0]);
        snake.y.push(snake.y[0]);
        changeFoodPositon();
ochki++
        ochk.textContent = ochki
  
    }
    //смерть



    if (snake.x[0] >= (w / size) + 1) {
        snake.x[0] = -1;
    } else if (snake.x[0] < 0) {
        snake.x[0] = (w / size) + 1;
    } else if (snake.y[0] >= (w / size) + 1) {
        snake.y[0] = -1;
    } else if (snake.y[0] < 0) {
        snake.y[0] = (w / size) + 1;
    }

    setTimeout(() => {
        requestAnimationFrame(step);
    }, 100)
}

step()
function haha(){
    let hahsw = prompt('ВВедите текст')
    info.textContent = hahsw

}
function gog(){
    let chislo = document.querySelector('#chislo').value
    ochki = chislo
    console.log(ochki)
}
function goText(){
    let goText = document.querySelector('#goText').value
    info.textContent = goText
  
}
function obnylit(){
    ochki = -1;
}
function goCvet(){
    let lold = document.querySelector('#cvet').value
    console.log(colohik)
    colohik = lold
}

function vverh(){
    snake.move = "up";
}
function vniz(){
    snake.move = "down";
}
function vlevo(){
    snake.move = "left";
}
function vpravo(){
    snake.move = "right"
}
document.addEventListener("keydown", function (e) {



    if (e.code === "KeyD" && snake.move != "left") {
        snake.move = "right"
    } else if (e.code === "KeyA" && snake.move != "right") {
        snake.move = "left";
    } else if (e.code === "KeyW" && snake.move != "down") {
        snake.move = "up";
    } else if (e.code === "KeyS" && snake.move != "up") {
        snake.move = "down";
    }
    else if (e.code === "Quote") haha()
    else if(e.code === "KeyO") ochki = -1
    else if(e.code === "keyE") changeFoodPositon()
});