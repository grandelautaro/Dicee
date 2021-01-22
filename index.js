var number1 = Math.floor(Math.random()*6)+1; 
document.querySelector(".img1").setAttribute("src","Images/dice"+number1+".png");
var number2 = Math.floor(Math.random()*6)+1; 
document.querySelector(".img2").setAttribute("src","Images/dice"+number2+".png");

if(number1>number2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}

if (number1<number2){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
if(number1===number2) {
    document.querySelector("h1").innerHTML="Draw";
}