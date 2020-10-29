var randomNo1=   Math.floor(Math.random(randomNo1)*6)+1;

var imageSrc1= "dice"+randomNo1+".png";

document.querySelectorAll("img")[0].setAttribute("src",imageSrc1);

 var randomNo2 = Math.floor(Math.random(randomNo2)*6)+1;
 var imageSrc2= "dice"+randomNo2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imageSrc2);


if (randomNo1>randomNo2) {
  document.querySelector("h3").innerHTML="Player 1 Wins";
}
else if (randomNo2>randomNo1) {
  document.querySelector("h3").innerHTML="Player 2 Wins";

}
else {
  document.querySelector("h3").innerHTML="Draw";
}
