function setup(){}

function windowLoad(){
    console.log("Window is loaded");
}
window.onload = windowLoad;

function preload(){
    console.log("Window is loaded");
}
function click(evt){
    console.log(evt.pageX, evt.pageY);
}
window.onclick = click;

function mousePressed(){
    console.log(mouseX, mouseY);
}

function keydown(evt){
    console.log("You printed" + evt.key);
}
window.onkeydown = keydown;

function keyPressed(){
    console.log(key);
}

