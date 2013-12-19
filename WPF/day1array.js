/**
 * Created by sethhealy on 11/1/13.
 */

//var arrayplayerone = [];
//arrayplayerone[0]=[];
//arrayplayerone[1]=[];
//arrayplayerone[2]=[];

//arrayplayerone[0][0]='dog';
//arrayplayerone[1][1]='cat';
//arrayplayerone[2][2]='bird';

//arrayplayerone[1][0]=1;
//arrayplayerone[1][1]=10;
//arrayplayerone[1][2]=90993;

//arrayplayerone[2][0]=['dog','monkey'];
//arrayplayerone[2][1]=['cat','dolphin'];
//arrayplayerone[2][2]=['bird','whale'];

//console.log(arrayplayerone[0][0]);
//console.log(arrayplayerone[2][0]);
//console.log(arrayplayerone[2][0][0]);

//;
//var pro=parseInt(prompt('give me an integer'));
//var x=parseInt(prompt('give me a number'));
//var arraymulti =[];
//
//arraymulti[0]=[];
//arraymulti[1]=[];
//arraymulti[2]=[];
//arraymulti[3]=[];
//
//arraymulti[0][0]=x;
//arraymulti[0][1]=2;
//arraymulti[0][2]=3;
//arraymulti[0][3]=4;
//
//arraymulti[1][0]=2;
//arraymulti[2][0]=3;
//arraymulti[3][0]=4;
//
//
//arraymulti[1][1]=arraymulti[0][1]*arraymulti[1][0]*pro;
//arraymulti[1][2]=arraymulti[0][2]*arraymulti[1][0]*pro;
//arraymulti[1][3]=arraymulti[0][3]*arraymulti[1][0]*pro;
//
//arraymulti[2][1]=arraymulti[0][1]*arraymulti[2][0]*pro;
//arraymulti[2][2]=arraymulti[0][2]*arraymulti[2][0]*pro;
//arraymulti[2][3]=arraymulti[0][3]*arraymulti[2][0]*pro;
//
//arraymulti[3][1]=arraymulti[0][1]*arraymulti[3][0]*pro;
//arraymulti[3][2]=arraymulti[0][2]*arraymulti[3][0]*pro;
//arraymulti[3][3]=arraymulti[0][3]*arraymulti[3][0]*pro;
//
//arraymulti[0][0]= arraymulti[0][0]*pro;
//arraymulti[0][1]= arraymulti[0][1]*pro;
//arraymulti[0][2]= arraymulti[0][2]*pro;
//arraymulti[0][3]= arraymulti[0][3]*pro;
//arraymulti[1][0]= arraymulti[1][0]*pro;
//arraymulti[2][0]= arraymulti[2][0]*pro;
//arraymulti[3][0]= arraymulti[3][0]*pro;
//
//
//console.log(arraymulti[0]);
//console.log(arraymulti[1]);
//console.log(arraymulti[2]);
//console.log(arraymulti[3]);

//for(i=0;i<=2;i=i+1){
//    console.log(i);
//for(j=0;j<=2;j++){
//    console.log(i'['++']['+j+']');
//}
//
//
//
//}

//var pro=parseInt(prompt('pick a number'));
//
//for(b=0;b<=pro;b=b+1){
//
//    console.log(b*2);
//
//
//
//}

//var pro=parseInt(prompt('choose a number'));
//var sqr= pro*pro;
//
//for(i=pro;i<=sqr;i=i+pro){
//
//    console.log(i);
//}
//var pro=parseInt(prompt('choose a number'));
//var add=pro*pro;
//
//for(i=pro;i<=45;i=i++add*2){
//
//    console.log(i);
//}
////alert("Hello, World!");
//
//
//var a= 100;
//
//do {
//
//    console.log(a);
//    a++
//} while ( a <10 );


//var arraymulti=[];
//arraymulti[0]=[];
//arraymulti[1]=[];
//arraymulti[2]=[];
//arraymulti[3]=[];
//
//arraymulti[0][0]=1;
//arraymulti[0][1]=2;
//arraymulti[0][2]=3;
//arraymulti[0][3]=4;
//
//arraymulti[1][0]=2;
//arraymulti[2][0]=3;
//arraymulti[3][0]=4;
//
//for(i=1;i<=3;i++){
//    console.log(arraymulti[i]);
//    for(j=1;j<=3;j++){
//       console.log(i+':'+j);
//       arraymulti[i][j]=arraymulti[0][i]*arraymulti[j][0];
//
//   }
//console.log(arraymulti[i]);
//}

////////////////////////conditional statements
//var i;
//for(i=0;i<10;i++){
//if(i<=5){
//    console.log(i);
//} else if(i<=7) {
//    console.log(10-i);
//}else {console.log('>7')}
//}
//
//var pro=prompt('Pick a color');
//
//
//if(pro=='grey'){
//
//console.log('grey');
//
//}
//
//else if (pro=='blue'){
//
//
//        console.log('blue');
//}
//
//var boat=Math.random();
//
//if (boat<=.5){
//    console.log('boat');
//}
//else {
//
//    console.log('car');
//}


//
//
//(condition to be met) ? first set of stuff : else stuff;

//var tern = Math.random();
//(Math.round(tern)==0)
//?
//console.log('heads')
//    :
//console.log('tails');

//var add =prompt('give a number');
//var minus = prompt('f or c');
//
// if (minus=="c")
//{
//    console.log(add*9/5+32);
//}
//else{
//
//    console.log((add-32)*5/9);
//}
//var grid = [];
//var terrain;
//var type;
//
//
//for(i=0;i<=9;i++) {
//
//    grid[i]=[];
//
//    for (j=0;j<=9;j++){
//
//        terrain = Math.random();
//
//        type = terrain <= .2 ? 'plain' : type = terrain <= .4 ? 'desert' : type = terrain <= .6 ? 'swamp' : type = terrain <= .8 ? 'grassland' : 'water';
//
//      grid[i][j] = type;
//console.log(grid[i][j]);
//    }
//}

//var zyx = 'How i spent my summer vacation';
//var num = 5;
//var exp = 10;
//
//var resultstring = zyx + num;
//var resultnumber = exp + num;

//console.log(resultnumber + resultstring);
//console.log(zyx.length);

//var height= prompt('what is the height');
//var base= prompt('what is the base 1');
//var bases= prompt('what is the base 2');
//
//console.log(height/2*(base+bases));


//var a=1;
//var l=2;
//var e=3;
//
//
//var ecal = a-l;
//console.log(ecal+':'+e);
//var acal=e+l;
//var lcal=-1*(e-a);
//
//var shoppinglist =['bread','butter','cheese','milk'];
//var list = prompt('Pick a number between 0-3');
//console.log(shoppinglist[list]);
//console.log(shoppinglist.length);
//shoppinglist.push('grapes');
//console.log(shoppinglist.length);
//
//for(i=0;i<shoppinglist.length;i++){
//console.log(shoppinglist[i]);
//}
//


//var storedpromptvalue = prompt('E(100%),G(75%),F(30%),P(0%)');
//var percentagefromprompt=0;
//var percentagepoints=10;
//
//
//
//if(storedpromptvalue.toUpperCase()=='E')
//{percentagefromprompt=1;}
//else if(storedpromptvalue.toUpperCase()=='G')
//{percentagefromprompt=.75;}
//else if(storedpromptvalue.toUpperCase()=='F')
//{percentagefromprompt=.3;}
//else{percentagefromprompt=0;}
//
//
//percentagepoints*=percentagefromprompt;
//
//console.log(percentagepoints);

//inputs 2 of 3 values
//output is to calculate the third value
//
//var global_a =3;
//var global_b =4;
//function pythagorean(a,b,c){
//    if (!(a == null && b == null && c == null)
//        (a == null && b == null && c != null)
//        (a == null && b == null && c == null)
//        (a !== null && b == null && c == null)) {
//        {
//        return console.log("you havent entered enough data");
//            { else if(a,b,c==null)
//        return Math.sqrt(a * a + b * b);
//            }
//
//
//console.log(pythagorean(null,null,null));
//console.log(pythagorean(1,null,null));
//console.log(pythagorean(null,null,null));
//console.log(pythagorean(null,null,null));}

//var mylist='';
//for(i=0;i<=100;i++){
//if(i%3==0){
//   mylist= mylist+i+', ';
//}
//}
//console.log(mylist);

//
//
//var mynumbers=[];
//var list=0;
//
//for(i=0;i<20;i++){
//
//    mynumbers[i]=Math.ceil(Math.random()*3);
//}
//
//for(j=0;j<20;j++){
//
//    if(mynumbers[j]>mynumbers[j+1]){
//
//        list=list+1;
//    }
//
//}
//console.log(mynumbers);
//console.log(list);
function createworld(){
var grid = [];
var terrain;
var type;


for(i=0;i<=9;i++) {

    grid[i]=[];

    for (j=0;j<=9;j++){

        terrain = Math.random();

        type = terrain <= .2 ? ' plain ' : type = terrain <= .4 ? ' desert ' : type = terrain <= .6 ? ' swamp ' : type = terrain <= .8 ? ' grassland ' : ' water ';

      grid[i][j] = type;

    }
}
    return grid;
}
var grid1= createworld();
var grid=createworld();
console.log('ugly version');
for(i=0;i<grid1.length;i++){
console.log(grid1[i])
}


function griddisplay(worldarray,xyz,yyy,username){
    console.clear();
    var formattedresults='';

            for(i=0;i<worldarray.length;i++){
            for(j=0;j<worldarray[i].length;j++){
            if(i==yyy &&j ==xyz)
            {formattedresults+= username }
            else{
            formattedresults+=worldarray[i][j] +' ';
            if(worldarray[i][j].length==0){formattedresults+='         '}
            if(worldarray[i][j].length==0){formattedresults+='        '}
            if(worldarray[i][j].length==1){formattedresults+='       '}
            if(worldarray[i][j].length==2){formattedresults+='      '}
            if(worldarray[i][j].length==3){formattedresults+='     '}
            if(worldarray[i][j].length==4){formattedresults+='    '}
            if(worldarray[i][j].length==5){formattedresults+='   '}
            if(worldarray[i][j].length==6){formattedresults+='  '}
            if(worldarray[i][j].length==7){formattedresults+=' '}


        }   }
formattedresults+='\n';
    }
return formattedresults;
}
var grid1= createworld();
var grid2=createworld();

console.log(griddisplay(grid1));

console.log(grid1[1][1]);
var quittest= true;
var x=1;
var y=1;
var username=prompt('What is your name?');
username= username.substring(0,6);
console.log(username);

do

  {


var userinput=prompt('Which direction would you like to move? (N,S,E,W,Q');

if(userinput==null){quittest=false; break;}
      if (userinput.toUpperCase()=='Q'){quittest=false;}
else{
          if (userinput.toUpperCase()=='N'){ y--;}
          if (userinput.toUpperCase()=='S'){y++;}
if (userinput.toUpperCase()=='W'){x--;}
if (userinput.toUpperCase()=='E'){x++;}
    if(x<0){x=9;}
if(x>9){x=0;}
if(y<0){y=9;}
if(y>9){y=0;}
console.log(griddisplay(grid1,x,y));
console.log(grid1[y][x]);
      }
} while(quittest);


// create a function to create a list of monsters per location

// function monstergen(landtype){
// select monsters appropriate for the land type
// conditions to check land
//randomly assign monsters to the type
//var randomevent=Math.random();
//var monsterarray=[];
// if(landtype=='forest'){
// bugbears(50),dragons(10) and kobolds(40)
// if(randomevent<.25){
// if(randomevent<.125){
// monsterarray[0]='bugbears'
//} else if(randomevent<.225){
//monsterarray[0]='kobolds'
//}
//else(monsterarray[0]='dragons'


//square area cubed area cone volume sphere volume
//function circle(r){
//
//    return r*r*Math.PI;
//}
//
//function cylinder(areaCircle,h){
//    return areaCircle*h;
//}
//
//
//console.log(cylinder(circle(10),15));
//

//function square(l,w){
//    return l*w;
//}
//
//function cube(square,h){
//return square*h;
//
//}
//console.log(cube(square(10),6));

//
//function cone(r,h){
//    return 1/3* circle(r)*h;
//}
//
//console.log(cone(10,15));
//























