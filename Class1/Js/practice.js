/**
 * Created by sethhealy on 12/15/13.
 */
(function(){
//5-10 there are 6 numbers so ur multiplying by 6 and adding 5 to get above 5

    // if it the lowest number is -2 you subtract 2 from the end

    //var z=0
    //for(var i=0; i<6;i+=2){////
    //z+=i;
//}
//console.log(z);

//prototype= adds functionality to an object.

//what is the method that will compare pattern to reg expression-you put pattern.test

    // practice for final


    function Student(){
    this.name="";
    this.address={street:"",city:"",state:""};
    this.grades=[];
    this.date="";
    this.avg=0;
    this.type="Beer";
}

  Student.prototype.average=function(){
      var total=0;
      for(i=0; i<this.grades.length; i++){
          total+=this.grades[i];

          total/this.grades.length;
}

      return total/this.grades.length;
    };

Student.prototype.drink=function(){
      console.log("i like to drink "+ this.type);
    };




   window.Student=Student;






}());











