/**
 * Created by sethhealy on 11/20/13.
 */

/// My function im making is grade calculator. It will tell a user with there three classes what there average grade is.

var a=parseInt(prompt('What percent you get in math class?')); /// I wanted a average calculator to get thge average of the 3 main classes
var b=parseInt(prompt('What percent get in science class?'));
var c=parseInt(prompt('What percent get in english?'));


function grades(a,b,c) //my function will take the 3 types of classes and use them as a function.
{

    var over=(a+b+c)/3;  // im averaging the 3 classes

    return over;

}
var over= grades(a,b,c); //pulling them out and displaying them

console.log(over);


if(over >= 70){

    console.log('You passed!!!!'); //if they get 70 and above they are passing the class
}

else{
    console.log('You have failed :('); // If they get anything less then 70 its saying you failed.
}
