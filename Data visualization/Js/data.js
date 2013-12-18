/**
 * Created by sethhealy on 12/17/13.
 */
(function(){


var canvas1= document.createElement("canvas");
document.body.appendChild(canvas1);
var ctx=canvas1.getContext("2d");
var grades=[80,90,100,100,90,100];
var bar=[50,100,150,200,250,300];
    canvas1.width=600;
    canvas1.height=600;


        ctx.beginPath();
       ctx.strokeStyle="000000";
        ctx.lineWidth=2;
        ctx.rect(20,30,350,450);
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle="black";
        ctx.font="10px Arial";
        ctx.fillText("semesters",150,500);

        ctx.beginPath();
        ctx.fillStyle="black";
        ctx.font="10px Arial";
        ctx.fillText("My Grades",150,10);

        ctx.beginPath();
        ctx.fillStyle="black";
        ctx.strokeRect(bar[0],160,30,grades[0]*4);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle="black";
        ctx.font="10px Arial";
        ctx.fillText("1st",55,490);

        ctx.beginPath();
        ctx.strokeStyle="red";
        ctx.fillStyle="black";
        ctx.strokeRect(bar[1],120,30,grades[1]*4);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle="black";
        ctx.font="10px Arial";
        ctx.fillText("2nd",105,490);


        ctx.beginPath();
        ctx.strokeStyle="green";
        ctx.fillStyle="black";
        ctx.strokeRect(bar[2],80,30,grades[2]*4);
        ctx.fill();
        ctx.stroke();


        ctx.beginPath();
        ctx.fillStyle="black";
        ctx.font="10px Arial";
        ctx.fillText("3rd",155,490);

        ctx.beginPath();
        ctx.strokeStyle="blue";
        ctx.fillStyle="black";
        ctx.strokeRect(bar[3],80,30,grades[3]*4);
        ctx.fill();
        ctx.stroke();


        ctx.beginPath();
        ctx.fillStyle="black";
        ctx.font="10px Arial";
        ctx.fillText("4th",205,490);



        ctx.beginPath();
        ctx.strokeStyle="yellow";
        ctx.fillStyle="black";
        ctx.strokeRect(bar[4],120,30,grades[4]*4);
        ctx.fill();
        ctx.stroke();


        ctx.beginPath();
        ctx.fillStyle="black";
        ctx.font="10px Arial";
        ctx.fillText("5th",255,490);


        ctx.beginPath();
        ctx.strokeStyle="purple";
        ctx.fillStyle="black";
        ctx.strokeRect(bar[5],80,30,grades[5]*4);
        ctx.fill();
        ctx.stroke();


        ctx.beginPath();
        ctx.fillStyle="black";
        ctx.font="10px Arial";
        ctx.fillText("6th",305,490);


        ctx.beginPath();
        ctx.fillStyle="black";
        ctx.font="10px Arial";
        ctx.fillText("0",6,480);

        ctx.beginPath();
        ctx.fillStyle="black";
        ctx.font="10px Arial";
        ctx.fillText("10",6,440);

        ctx.beginPath();
        ctx.fillStyle="black";
        ctx.font="10px Arial";
        ctx.fillText("20",6,400);

        ctx.beginPath();
        ctx.fillStyle="black";
        ctx.font="10px Arial";
        ctx.fillText("30",6,360);


        ctx.beginPath();
        ctx.fillStyle="black";
        ctx.font="10px Arial";
        ctx.fillText("40",6,320);


        ctx.beginPath();
        ctx.fillStyle="black";
        ctx.font="10px Arial";
        ctx.fillText("50",6,280);


        ctx.beginPath();
        ctx.fillStyle="black";
        ctx.font="10px Arial";
        ctx.fillText("60",6,240);


        ctx.beginPath();
        ctx.fillStyle="black";
        ctx.font="10px Arial";
        ctx.fillText("70",6,200);

        ctx.beginPath();
        ctx.fillStyle="black";
        ctx.font="10px Arial";
        ctx.fillText("80",6,160);


        ctx.beginPath();
        ctx.fillStyle="black";
        ctx.font="10px Arial";
        ctx.fillText("90",6,120);

        ctx.beginPath();
        ctx.fillStyle="black";
        ctx.font="10px Arial";
        ctx.fillText("100",2,80);


        ctx.beginPath();
        ctx.fillStyle="black";
        ctx.font="10px Arial";
        ctx.fillText("%",6,30);






}());
