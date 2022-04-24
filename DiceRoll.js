let roll = document.querySelector("#Button1");
roll.addEventListener("click", () => {
  let a = Math.floor((Math.random() * 6)+1);
  let  b = Math.floor((Math.random() * 6)+1);
  document.querySelector("#dice1").setAttribute("src","dice" + a+ ".png");
  document.querySelector("#dice2").setAttribute("src","dice" + b+ ".png");
  if(a>b)
  {
    document.querySelector("h1").innerHTML="Player1 Win";
  }
  else if(a<b)
  {
    document.querySelector("h1").innerHTML="Player2 Win";
  }
  else
  {
    document.querySelector("h1").innerHTML="    Draw    ";
  }
});