/**
 * Created by sethhealy on 12/18/13.
 */
(function(){
    var dom={name:document.querySelector("#name"),
             address:document.querySelector("#address"),
             grades:document.querySelector("#grades"),
             date:document.querySelector("#date"),
             avg:document.querySelector("#average"),
             button:document.querySelector(".button")};
    var counter=0;
    var students=[];
    var day = new Date();
    var dd = day.getDate();
    var mm = day.getMonth()+1;
    var yyyy = day.getFullYear();
    if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm}day = mm+'/'+dd+'/'+yyyy;
    population();
        dom.button.addEventListener("click",onClick);


    function onClick(e){
        console.log("Clicked");

        counter++;
        population();

        if(counter>students.length){
            counter=0;
            dom.button.removeEventListener("click",onClick);
        }

    }


    function Student(){
        this.name="";
        this.address="";
        this.grades=[];
        this.date=day;
        this.avg=average;

}


    var student= new Student();
    student.name = "Seth Healy";
    student.address= "2116 three trees ct.";
    student.grades=[80,80,80];
    student.date=day;
    student.avg=average;
    students.push(student);
console.log(student);
    console.log(students);

    Student.prototype.average=function(){
        var total=0;
        for(i=0; i<this.grades.length; i++){
            total+=this.grades[i];

            total/this.grades.length;
        }

        return total/this.grades.length;
    };

    function population(){

        for(var p in students[counter]){
            dom.name.innerHTML= "name: "+ student[counter].name;
            dom.address.innerHTML= "address: "+ student[counter].address;
            dom.grades.innerHTML= "grades: "+  student[counter].grades;
            dom.date.innerHTML="date: "+ student[counter].date;
            dom.average.innerHTML="average: "+ student.average;
       }
             //  var output=document.querySelector("#name");
             // output.innerHTML=students[counter].name;

    }

}());
