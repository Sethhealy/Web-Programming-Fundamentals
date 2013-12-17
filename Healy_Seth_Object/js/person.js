/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */
(function(){


    var names=["Scott","Manton","Joe","Richie","Seth"];
    var job=["teacher","farmer","student","pilot"];
    var action=["sleeping","eating","working"];
    function Person(n,r){
        this.name=n;
        this.row=r;
        this.actions=action[~~(Math.random()*action.length)];
        this.jobs=job[~~(Math.random()*job.length)];
     }

    Person.prototype.update=function(){
        this.actions=action[~~(Math.random()*action.length)];
    };


    window.Person=Person;
}());
















