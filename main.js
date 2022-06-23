var mouseEvent = "empty";
var lastpos_of_X,lastpos_of_Y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color= "red";
linewidsh = 2;
canvas.addEventListener("mousedown",my_micedown);
function my_micedown(e){
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup",my_miceup);
function my_miceup(e){
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave",my_miceleave);
function my_miceleave(e){
    mouseEvent="mouseLeave";
}
canvas.addEventListener("mousemove",my_micemove);
function my_micemove(e){
copmousex=e.clientX-canvas.ofsetLeft;
copmousey=e.clientY-canvas.ofsetTop;
if(mouseEvent="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.linewidth=linewidsh;
    ctx.moveTo(lastpos_of_X,lastpos_of_Y);
    ctx.lineTo(copmousex,copmousey);
    ctx.stroke();
}
lastpos_of_X = copmousex;
lastpos_of_Y = copmousey;
}