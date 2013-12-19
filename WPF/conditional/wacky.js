/**
 * Created by sethhealy on 11/18/13.
 */
    //// I made a if statement to show if you have time to be watching netflix for as long as you do.
var tv= prompt('How many hours have you been watching Netflix');
var work= prompt('How long is homework assignment going to take?');
var sleep= prompt('How long do you need to sleep for?');
var left= 24-sleep-work-tv; //I wanted to show how much time in the day you have left after watching tv and doing homework.
console.log('You have '+left+' hours left');

//if(left<2){
//    console.log('Not much time left'); //i showed that you don't have that much time to be watching tv.
//}
//else
//{
//    console.log('get to relax some'); // i put this to show you that you have some more time to do what you want.
//}

left<2? console.log('Not much time'):console.log('get to relax');