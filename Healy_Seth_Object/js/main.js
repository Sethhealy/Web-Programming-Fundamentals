/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */
(function(){

    setInterval(runUpdate,1000/30);

    var names=["Scott","Manton","Joe","Richie","Seth"];
    var people=[];

    for(var i=0;i<3;i++){
        var num=~~(Math.random()*names.length);
        var person=new Person(names[num],"row"+(i+1));

        names.splice(num, 1);
        people.push(person);
        console.log(num);
    }
console.log(people);

    function populateHTML(){
        var firstpersonname=document.querySelector("#r1c1");
        firstpersonname.innerHTML=people[0].name;
        var firstpersonjob=document.querySelector("#r1c2");
        firstpersonjob.innerHTML=people[0].jobs;
        var firstpersonaction=document.querySelector("#r1c3");
        firstpersonaction.innerHTML=people[0].actions;



        var secondpersonname=document.querySelector("#r2c1");
        secondpersonname.innerHTML=people[1].name;
        var secondpersonjob=document.querySelector("#r2c2");
        secondpersonjob.innerHTML=people[1].jobs;
        var secondpersonaction=document.querySelector("#r2c3");
        secondpersonaction.innerHTML=people[1].actions;



        var thirdpersonname=document.querySelector("#r3c1");
        thirdpersonname.innerHTML=people[2].name;
        var thirdpersonjob=document.querySelector("#r3c2");
        thirdpersonjob.innerHTML=people[2].jobs;
        var thirdpersonaction=document.querySelector("#r3c3");
        thirdpersonaction.innerHTML=people[2].actions;
    }
    populateHTML();

    function runUpdate(){
        people.forEach(function(element){
            element.update();
        });
        populateHTML();
    }



}());