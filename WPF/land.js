/**
 * Created by sethhealy on 11/6/13.
 */


var land = [];
var terrain;

for(i=0;i<=9;i++) {

    land[i]=[];

    for (j=0;j<9;j++){

        terrain = Math.ceil(5*Math.random());
if (terrain==1){land[i][j]='swamp';}
        else if (terrain==2){land[i][j]='water';}
else if (terrain==3){land[i][j]='plain';}
else if (terrain==4){land[i][j]='desert';}
else if (terrain==5){land[i][j]='grassland';}


console.log(land[i][j]);
    }
}