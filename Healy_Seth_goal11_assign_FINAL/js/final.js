(function(){
    var counter=0;
    var students=[];
    var day = new Date();
    var dd = day.getDate();
    var mm = day.getMonth()+1;
    var yyyy = day.getFullYear();
    if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm}day = mm+'/'+dd+'/'+yyyy;//My get date equation

    var button=document.querySelector(".buttonred");
    button.addEventListener("click",onClick);


    function population(){///populating the html with name,address,grades,date,and average

        var output=document.querySelector("#name");
        output.innerHTML="name: " + students[counter].name;

        var output1=document.querySelector("#address");
        output1.innerHTML="address: " + students[counter].address;

        var output2=document.querySelector("#grades");
        output2.innerHTML="grades: "+ students[counter].grades;

        var output3=document.querySelector("#date");
        output3.innerHTML="date: "+students[counter].date;

        var output4=document.querySelector("#average");
        output4.innerHTML="average: "+averagegpa(students[counter].grades);

        if(counter==students.length){
            button.removeEventListener("click",onClick);
        }

        counter++;
    }


    function onClick(e){

displayinfo();

        population();



    }
    function averagegpa(ave){// my average function
        var average=0;
        for(var i=0; i<ave.length; i++){
            average+=ave[i];

        }
        return (average/ave.length).toFixed(2);//fixed to the 2 decimal places
    }
    function Student(n,a,g,d){//settng my student function so i can add a student freely
        this.name=n;
        this.address=a;
        this.grades=g;
        this.date=d;

    }
    function addstudents(name,address,grades,day){//adding a new student
    var student= new Student(name,address,grades,day);
    students.push(student);
    }

    addstudents("Seth Healy", "2116 three trees ct., Orlando,Fl",[80,80,80],day);//My  students
    addstudents("Scott Wainman","fullsail, Winter park, Fl",[100,100,100],day);

    population();
    addstudents("Nikki Healy", "2116 Three trees ct., Orlando,Fl",[100,90,90],day);// my new student
        function displayinfo(){
            for(i=0; i<students.length;i++)
            {
                for(var p in students[i]){
                    console.log(p+":"+students[i][p]);
                }

                console.log('---------------------');

            }}
    displayinfo();
}());

