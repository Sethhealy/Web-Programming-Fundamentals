/**
 * Created by sethhealy on 12/19/13.
 */
(function(){
    var counter=0;
    var students=[];
    var day = new Date();
    var dd = day.getDate();
    var mm = day.getMonth()+1;
    var yyyy = day.getFullYear();
    if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm}day = mm+'/'+dd+'/'+yyyy;

    function population(){
var output=document.querySelector("#name");
    output.innerHTML="name: " + students[counter].name;

var output1=document.querySelector("#address");
    output1.innerHTML="address: "+ students[counter].address;

var output2=document.querySelector("#grades");
    output2.innerHTML="grades: "+ students[counter].grades;

var output3=document.querySelector("date");
    output3.innerHTML="date: "+students[counter].day;


    }
button.addEventListener("Click",onClick);


function onClick(e){
    console.log("Clicked");

    counter++;
    population();

    if(counter>students.length){
        counter=0;
        dom.button.removeEventListener("click",onClick);
    }

}

function Student(n,a,g,d,ave){
    this.name=n;
    this.address=a;
    this.grades=g;
    this.date=d;
    this.avg=ave;

}
var student= new Student(name,address,grades,day,average);
student.name = "Seth Healy";
student.address= "2116 three trees ct.";
student.grades=[80,80,80];
student.date=day;
student.avg=average;
students.push(student);




}());



















































