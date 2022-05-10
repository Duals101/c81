canvas=document.getElementById("Just_lose_it");
ctx=canvas.getContext("2d")
color="darkblue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", mousedown);
function mousedown(e){
    color=document.getElementById("color").value;
    mouseX=e.clientX-canvas.offsetLeft;
    mouseY=e.clientY-canvas.offsetTop;
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouseX,mouseY,40,0,2*Math.PI);
ctx.stroke();
}
function cleararea(){
ctx.clearRect(0, 0, canvas.width, canvas.height); 
}