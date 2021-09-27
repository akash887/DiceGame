var random1 = Math.floor(Math.random() * 6) + 1;
var randomeimage1 = "images/dice" + random1 + ".png";
//var image =
//alert(randomeimage1);
document.querySelectorAll("img")[0].setAttribute("src", randomeimage1);
// image.setAttribute("src", randomeimage1 );
var random2 = Math.floor(Math.random() * 6) + 1;
var randomeimage2 = "images/dice" + random2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomeimage2);



if (random1 > random2)

{
  var result = document.querySelectorAll(".name")[0].innerHTML = "Player 1 wins";
}
else
{
  var result = document.querySelectorAll(".name")[1].innerHTML = "Player 2 wins";
}
