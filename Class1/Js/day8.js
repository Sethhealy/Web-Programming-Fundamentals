/**
 * Created by sethhealy on 12/17/13.
 */
(function(){


    //canvas library www.createjs.com
    var canvas1= document.createElement("canvas");
        document.body.appendChild(canvas1);
    var ctx=canvas1.getContext("2d");
                canvas1.width=1000;
                canvas1.height=1000;
//        ctx.beginPath();
//        ctx.strokeStyle="#FF0000";
//        ctx.lineWidth=5;
//        ctx.moveTo(0,0);
//        ctx.lineTo(400,400);
//        ctx.stroke();
//        ctx.beginPath();
//        ctx.strokeStyle="#00FF00";
//        ctx.lineWidth=1;
//        ctx.moveTo(400,0);
//        ctx.lineTo(0,400);
//        ctx.stroke();

    for(var i=0;i<10000; i++){
        ctx.beginPath();
        var red=~~(Math.random()*255);
        var green=~~(Math.random()*255);
        var blue=~~(Math.random()*255);
        ctx.strokeStyle="rgb("+ red +","+ green+ ","+ blue+")";
        ctx.moveTo(Math.random()*400,Math.random()*400);
        ctx.lineTo(Math.random()*400,Math.random()*400);
        ctx.stroke();
    }

//        ctx.beginPath();
//        ctx.strokeStyle="000000";
//        ctx.fillStyle="blue";
//        ctx.lineWidth=2;
//        ctx.rect(200,200,50,50);
//        ctx.stroke();
//        ctx.fill();
//
//        ctx.beginPath();
//
//        ctx.fillStyle="red";
//        ctx.strokeStyle="00FF00";
//
//        ctx.lineWidth=2;
//        ctx.arc(225,225,25,0,Math.PI*2);
//        ctx.stroke();
//        ctx.fill();
//
//        ctx.beginPath();
//        ctx.fillStyle="black";
//        ctx.font="10px Ariel";
//        ctx.fillText("Hello World",200,230);











}());
