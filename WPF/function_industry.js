/**
 * Created by sethhealy on 11/18/13.
 */
// Im making a pythagorean calculator


var a=parseInt(prompt('What is the value for a?')); ///adding prompts for the pythagorean.
var b=parseInt(prompt('What is the value for b?'));

function pythagorean(a,b){   //making the function so i can recall it

    var c = (a*a)+(b*b);
    var final = Math.sqrt(c);
    return final;
}

var final = pythagorean(a,b);  // pulling the function so i can console.log it.

console.log('c= '+final);
