var CANVAS_WIDTH = 300, CANVAS_HEIGHT = 400;
var mycanvas, context;

window.onload = function () {
    createCanvas();
    // drawRect();
    // drawImage();
    // drawPath();
    // drawCircle();
    drawBezierCurce();
}

function createCanvas() {
    document.body.innerHTML = "<canvas id='myCanvas' width=" + CANVAS_WIDTH + " height=" + CANVAS_HEIGHT + "></canvas>";
    mycanvas = document.getElementById("myCanvas");
    context = mycanvas.getContext("2d");
}

// 绘制正方形
function drawRect() {
    context.fillStyle = "#FF0000";
    // context.rotate(45);
    // context.translate(200,200);
    context.scale(2, 0.5);
    context.fillRect(0, 0, 200, 200);
}

// 绘制图片
function drawImage(){
    var img = new Image();
    img.onload = function(){
        context.drawImage(img,0,0);
    }
    img.src = 'img/1.png';
}

// 绘制路径
function drawPath() {
    // 绘制背景
    context.fillStyle = "#ADFFAD";
    context.fillRect(0,0,300,400);
    // 设置起点与基数
    var dx = 150;
    var dy = 150;
    var s = 100;
    // 绘制路径
    context.beginPath();// 开启路径绘制
    context.fillStyle = "#FFB2EE";
    context.strokeStyle = "#6574FF";// 边框颜色
    var x = Math.sin(0);
    var y = Math.cos(0);
    var dig = Math.PI / 15*11;
    for(var i = 0;i < 30;i++){
        var x = Math.sin(i*dig);
        var y = Math.cos(i*dig);
        context.lineTo(dx+x*s,dy+y*s);
    }
    context.closePath();
    context.fill();
    context.stroke();
}

// 绘制圆形
function drawCircle(){
    // 绘制背景
    context.fillStyle = "#ADFFAD";
    context.fillRect(0,0,600,700);
    for(var i = 0;i<=10;i++){
        context.beginPath();
        context.arc(i*25,i*25,i*10,0,Math.PI*2,true);
        context.closePath();
        context.fillStyle = "rgba(255,0,0,0.25)";
        context.fill();
    }
}

// 绘制贝塞尔曲线
function drawBezierCurce(){
// bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y)
// 参数：控制点1的x,控制点1的y,控制点2的x,控制点2的y,结束点x,结束点y

    // 绘制背景
    context.fillStyle = "#ADFFAD";
    context.fillRect(0,0,600,700);
    // 设置起点与基数
    var dx = 150;
    var dy = 150;
    var s = 100;
    // 绘制路径
    context.beginPath();// 开启路径绘制
    context.fillStyle = "#FFB2EE";
    context.strokeStyle = "#6574FF";// 边框颜色
    var x = Math.sin(0);
    var y = Math.cos(0);
    var dig = Math.PI / 15*11;
    for(var i = 0;i < 30;i++){
        var x = Math.sin(i*dig);
        var y = Math.cos(i*dig);
        context.bezierCurveTo(dx+x*s,dy+y*s-100,dx+x*s+100,dy+y*s,dx+x*s,dy+y*s);
    }
    context.closePath();
    context.fill();
    context.stroke();
}