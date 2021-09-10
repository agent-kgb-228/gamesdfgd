function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

let w = canvas.width;
let h = canvas.height;
let size = 20;
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
let sber = {
    x: '',
    y: '',
    color: 'red'
}
/*Начало координат блоков*/
let block1 = {
    x: 4,
    y: 4,
    color: "#ff34d575",
}
let block2 = {
    x: 5,
    y: 4,
}
let block3 = {
    x: 6,
    y: 4,
}
let block4 = {
    x: 7,
    y: 4,
}
let block5 = {
    x: 8,
    y: 4,
}
let block6 = {
    x: 9,
    y: 4,
}
let block7 = {
    x: 10,
    y: 4,
}
let block8 = {
    x: 11,
    y: 4,
}
/*Конец координат блоков */
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
img2.src = 'android.png'
let img3 = new Image()
img3.src = 'yandex.png'
let img4 = new Image()
img4.src = 'rudroid.png'
let img5 = new Image()
img5.src = '/russia/gos-simvolika/flag-of-Russia.png'
let img6 = new Image()
img6.src = 'o.png'
let img7 = new Image()
img7.src = 'm.jpg'
let img8 = new Image()
img8.src = 'n.png'
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
    //блоки
    ctx.fillStyle = block1.color;
    ctx.fillRect(block1.x * size, block1.y * size, size, size);
    ctx.drawImage(img5, block1.x * size, block1.y * size, size, size)
    ctx.fillRect(block2.x * size, block2.y * size, size, size);
    ctx.drawImage(img5, block2.x * size, block2.y * size, size, size)
    ctx.fillRect(block3.x * size, block3.y * size, size, size);
    ctx.drawImage(img6, block3.x * size, block3.y * size, size, size)
    ctx.fillRect(block4.x * size, block4.y * size, size, size);
    ctx.drawImage(img7, block4.x * size, block4.y * size, size, size)
    ctx.fillRect(block5.x * size, block5.y * size, size, size);
    ctx.drawImage(img6, block5.x * size, block5.y * size, size, size)
    ctx.fillRect(block6.x * size, block6.y * size, size, size);
    ctx.drawImage(img8, block6.x * size, block6.y * size, size, size)
    ctx.fillRect(block7.x * size, block7.y * size, size, size);
    ctx.drawImage(img5, block7.x * size, block7.y * size, size, size)
    ctx.fillRect(block8.x * size, block8.y * size, size, size);
    ctx.drawImage(img5, block8.x * size, block8.y * size, size, size)
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






    //поедание
    if (snake.x[0] === food.x && snake.y[0] === food.y) {
        snake.x.push(snake.x[0]);
        snake.y.push(snake.y[0]);
        changeFoodPositon();
ochki++
        ochk.textContent = ochki
  
    }
    //смерть


    if (   snake.x[0] === block1.x && snake.y[0] === block1.y 
        || snake.x[0] === block2.x && snake.y[0] === block2.y 
        || snake.x[0] === block3.x && snake.y[0] === block3.y
        || snake.x[0] === block4.x && snake.y[0] === block4.y
        || snake.x[0] === block5.x && snake.y[0] === block5.y
        || snake.x[0] === block6.x && snake.y[0] === block6.y
        || snake.x[0] === block7.x && snake.y[0] === block7.y
        || snake.x[0] === block8.x && snake.y[0] === block8.y) {
       
        location.reload();
  

}

//Смена робота если координаты совпадают с блоками
if(    food.x === block1.x && food.y === block1.y 
    || food.x === block2.x && food.y === block2.y 
    || food.x === block3.x && food.y === block3.y
    || food.x === block4.x && food.y === block4.y
    || food.x === block5.x && food.y === block5.y
    || food.x === block6.x && food.y === block6.y
    || food.x === block7.x && food.y === block7.y
    || food.x === block8.x && food.y === block8.y){
changeFoodPositon()
    }




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
    if( chislo >= -1)   ochki = chislo
  else location.reload();
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
    if(snake.move != "down") snake.move = "up";
}
function vniz(){
    if(snake.move != "up") snake.move = "down";
}
function vlevo(){
    if(snake.move != "right") snake.move = "left";
}
function vpravo(){
if(snake.move != "left")snake.move = "right"
    
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
});