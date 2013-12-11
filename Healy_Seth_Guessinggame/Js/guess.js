/**
 * Created by sethhealy on 12/10/13.
 */
(function(){

var magicnumber = ~~(Math.random()*10+1); //~~floors it

    console.log(magicnumber);
var dom={button: document.querySelector("button"),
         output: document.querySelector("#output"),
         input: document.querySelector("#input")};
dom.input.value=" ";
var guess =3;
var usernumber= 0;

dom.button.addEventListener("click",onClick);

    function onClick(e){
           validate();
    }
function validate(){
    var valueIn = dom.input.value;
    if(valueIn <1 || valueIn >10){
        dom.output.innerHTML="Come one in the scope";
    }
  else if(isNaN(valueIn)){
        dom.output.innerHTML="That's not a number";
    }
    else if (valueIn == ""){
        dom.output.innerHTML="Dude numbers";
    }
    else{
        playgame(valueIn);
    }
    function playgame(v){
      if(v < magicnumber){
          guess--;
          dom.output.innerHTML="Your number is too low. You have "+guess + " left";
      }
      else if(v>magicnumber){
          guess--;
          dom.output.innerHTML="Your number is too high. You have "+guess + " left";

      }
        else{
          dom.output.innerHTML="Boooya!!!! You win";
      }
    }
    if(guess==0){
        dom.button.removeEventListener("click",onClick);
        dom.output.innerHTML="Game Over."
    }
}


}());













































































