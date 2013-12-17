/**
 * Created by sethhealy on 12/12/13.
 */
(function(){

//var dog={name:"Max",
//         breed:"Doberman",                    //old way
//         bark:function(){
//             console.log("Barking")
//         }};
//    dog.name

    // constructor object
// constructor functions need to be capitalized
//       var dogs=[];
//
//    function Dog(col,age,nam) {
//        //console.log("Dog creator");
//      this.color=col;
//      this.age=age;
//      this.name=nam;
//    }
//
//
//        var ScottsDog=new Dog("Black",3,"Max");
//        ScottsDog.name="Max";
//
//
//        var RyansDog= new Dog();
//        RyansDog.name="Killa";
//
//
////        dogs.push(RyansDog, ScottsDog);
////        for(var i=0; i<dogs.length; i++){
////      }
//        dogs.forEach(function(e){////forEach works with arrays
//            console.log(e.name)
//        });

    var names=["Scott","Bob","Joe","Richie","Seth"];
    var people=[];
    function Person(n,j){
        this.name=n;
        this.job=j;
    }

    Person.prototype.greetings= function(){
        //console.log("Hi, My name is "+ this.name);

    };



   // var Ryan= new Person("Ryan","Web developer");
    for(var i=0;i<1000;i++){
        var num=~~(Math.random()*names.length);
        var person=new Person(names[num],"student");
        people.push(person);
    }
//console.log(people[4].name);

   people.forEach(function(e){
       e.greetings();
    });
//    Array.prototype.push=function(){
//        console.log("F You!!!");//prototype add functionability to an object
    //};
people.push("bob");
//console.log(people[0].greetings());




























}());
