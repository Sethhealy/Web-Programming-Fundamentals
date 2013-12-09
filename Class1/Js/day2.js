/**
 * Created by sethhealy on 12/3/13.
 */
//function getArea(l,w){
//
//    //var area=l*w;
//return l*w;
//}
//console.log(getArea(5,6));

//function roll(die){
//    var number= ~~Math.random()*die+1;
//    switch (number){
//        case 1:
//            console.log("You rolled a one");
//            break;
//        case 2:
//            console.log("You rolled a two");
//        default:
//            console.log("You rolled something else");
//    }}
//var test="Hello";
//var firstletter= test.charAt(0);
//var partial=test.substr(1,3);
//console.log(partial);
//
//var date=new Date();
//console.log(date.getMonth());
//function cooldate(){
//    //days=['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];
//    var date = new Date();
//    var month= date.getMonth()+1;
//    var day= date.getDate();
//    var year= date.getFullYear();
//    var fullyear=date.get
//return date + "," + month + "/"+ day+ "/" + year; }
//console.log(cooldate());
//var deck= ["a","2","3","4","5","6","7","8","9","10","jack","queen","king"];
//play();
//function deal(){
//    var cardNumber = ~~(Math.random() *deck.length);
//    var card=deck[cardNumber];
//    deck.splice(cardNumber,1);
//    return card;
//    }
//function play(){
//    for (i=0;i<13;i++){
//        console.log(i,deal(),deck);
//    }
//}





var date = new Date();
var dd = date.getDate();
var mm = date.getMonth()+1; //January is 0!

var yyyy = date.getFullYear();
if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm}date = mm+'/'+dd+'/'+yyyy;

console.log(date);


































