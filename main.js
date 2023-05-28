
var canvas;
var ctx;
var color;
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color = "blue";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4
ctx.arc(50, 200,40,0,2*Math.PI);
ctx.stroke();

color = "black";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4
ctx.arc(150, 200,40,0,2*Math.PI);
ctx.stroke();

color = "red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4
ctx.arc(250, 200,40,0,2*Math.PI);
ctx.stroke();

color = "yellow";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4
ctx.arc(100, 250,40,0,2*Math.PI);
ctx.stroke();

color = "limegreen";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4
ctx.arc(200, 250,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", myMousedown);

function myMousedown(e)
{
color = document.getElementById("color").value;
console.log(color);

mouseX = e.clientX - canvas.offsetLeft;
mouseY = e.clientY - canvas.offsetTop;

console.log("X = " + mouseX + ",Y ="+ mouseY);
circle(mouseX , mouseY)
}

canvas.addEventListener("mousedown", myMousedown);

function myMousedown(e)
{
color = document.getElementById("color").value;
console.log(color);

mouseX = e.clientX - canvas.offsetLeft;
mouseY = e.clientY - canvas.offsetTop;

console.log("X = " + mouseX + ",Y ="+ mouseY);
circle(mouseX , mouseY)
}

canvas.addEventListener("mousedown", myMousedown);

function myMousedown(e)
{
color = document.getElementById("color").value;
console.log(color);

mouseX = e.clientX - canvas.offsetLeft;
mouseY = e.clientY - canvas.offsetTop;

console.log("X = " + mouseX + ",Y ="+ mouseY);
circle(mouseX , mouseY)
}

canvas.addEventListener("mousedown", myMousedown);

function myMousedown(e)
{
color = document.getElementById("color").value;
console.log(color);

mouseX = e.clientX - canvas.offsetLeft;
mouseY = e.clientY - canvas.offsetTop;

console.log("X = " + mouseX + ",Y ="+ mouseY);
circle(mouseX , mouseY)
}

canvas.addEventListener("mousedown", myMousedown);

function myMousedown(e)
{
color = document.getElementById("color").value;
console.log(color);

mouseX = e.clientX - canvas.offsetLeft;
mouseY = e.clientY - canvas.offsetTop;

console.log("X = " + mouseX + ",Y ="+ mouseY);
circle(mouseX , mouseY)
}

