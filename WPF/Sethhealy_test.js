/**
 * Created by sethhealy on 11/13/13.
 */
//Creating variables
// variables are were you manipulate code. using var to manipulate the code so we can have set code in there.

var x=7;
console.log(x);

//expressions are statements where in you can further manipulate the code into more distinct code. In this case we
// are subtracting the current year from the year we were born to get my age.

var yearborn=1988;
var currentyear=2013;

console.log(currentyear-yearborn);

// using addition and subtraction

var a=8;
var b=10;
var c=2;
var math = a+b-c;

console.log(math);


//multiplication/division and modulus. we can use multiplication and division for varies of reasons.
// Modulus will show us the the remainder in this case im multiplying p and d to make 21 then dividing by e to get 5.25
// and g will get the remaining by 2.
//// modulus gave me a little problem i had it switched in the =%
var p=3;
var d=7;
var e=4;
var f=(d*p)/e;
var g=f%2;


console.log(g);


// for loop uses () and {} to cause code to continue in a circle until it meets the condition set my the program. we prompt
// the user to type a number and in this case we start at 0 and go up by 2 until we reach the set limit that we had set from the user
// but we multiplied the number by 2 so it will be their number times 2. we also use ++ to show that we are going up.

var h=parseInt(prompt('choose a number?'));

for(i=0;i<=h;i++){

    console.log(i*2);
}

// if statements are conditionals that use if and else if to do checks. We run ifs so that when your doing a code that
//can make multiple ways of being used you say "if it does this" then do that or you say "or else do this". we use prompt
// in this case to have them choose between plane and bike and depending on what they picked the one they chose would be
// prompted to the screen.

var j=prompt('plane or bike?');

if(j=='plane'){

    console.log('plane')
}

else if(j=='bike'){

    console.log('bike');
}

