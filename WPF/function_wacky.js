/**
 * Created by sethhealy on 11/20/13.
 */

function random(type){

    colors= Math.random(); // i made colors to randomize


    type=colors <=.2 ? 'Blue' : type = colors <=.4 ? 'Green' : type = colors <=.6 ? 'Orange' : type = colors <=.8 ? 'Purple' : 'Yellow';
// I put values to the colors
    return type;

}
var type= random(type);  // i pulled the var out.

console.log('Random color is '+type); // commented to have it tell you that its randomized.