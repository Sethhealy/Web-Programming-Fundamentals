/*
 * Created by sethhealy on 12/8/13.
 */
(function(){

    var btn=document.querySelector(".buttonred");
    var name=document.querySelector("#name");
    var address=document.querySelector("#address");
    var date=document.querySelector("#date");
    var gpa=document.querySelector("#gpa");
    var average=document.querySelector("#gpaavg");
    //var student=[];
    var counter=0;
    var day = new Date();
    var dd = day.getDate();
    var mm = day.getMonth()+1;
    var yyyy = day.getFullYear();
    if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm}day = mm+'/'+dd+'/'+yyyy;
    var students= [{name:"Jbond",address:"3300 University Winter park Florida",gpa:[4,4,4],date:day},
        {name:'Mmouse',address:"123 test Dr Winter park Florida",gpa:[3,4,3],date:day}
    ];
    displayinfo();

    //students.push(student);
    addstudent("Sman","fortress of solitude Somewhere in the north or south pole.",[3,4,3],day);
    displayinfo();
    population();
    btn.addEventListener("click",onClick);

    function averagegpa(ave){// my average function
        var average=0;
        for(var i=0; i<ave.length; i++){
            average+=ave[i];

        }
        return (average/ave.length).toFixed(2);
    }
    function onClick(e){

        population();


    }

    function addstudent(n,adr,g,day,ave){
        var obj={name:n,address:adr,gpa:g,date:day,average:ave};

        students.push(obj);

    }

    function population(){

        for(var p in students[counter]){
            name.innerHTML= "name: "+ students[counter].name;
            address.innerHTML= "address: "+ students[counter].address;
            gpa.innerHTML= "gpa: "+  students[counter].gpa;
            date.innerHTML="date: "+ students[counter].date;
            average.innerHTML="avg gpa: "+ averagegpa(students[counter].grades);



        }


        if(counter==students.length){
            counter=0;
            btn.removeEventListener("click",onClick);
        }

        counter++;
    }
    function displayinfo(){
        for(i=0; i<students.length;i++)
        {
            for(var p in students[i]){
                console.log(p+":"+students[i][p]);
            }

            console.log('---------------------');

        }}
}());

