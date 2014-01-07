/**
 * Created by sethhealy on 12/3/13.
 */

(function(){

    console.log("FIGHT!!!!!");

    var fighterone=["Kobal",20,100];
    var fightertwo=["Kratos",20,100];
    var round=0;
    function fight(){
        alert(fighterone[0]+":"+fighterone[2]+" *START* "+fightertwo[0]+":"+fightertwo[2]);
        for(var i=0; i<10;i++){
            var mindamage1= fighterone[1]*.5;
            var mindamage2= fightertwo[1]*.5;
            var f1=Math.floor(Math.random()*(fighterone[1]-mindamage1)+mindamage1);
            var f2=Math.floor(Math.random()*(fightertwo[1]-mindamage2)+mindamage2);
            fighterone[2]-=f1;
            fightertwo[2]-=f2;
            console.log(fighterone[0]+":"+fighterone[2]+""+fightertwo[0]+":"+fightertwo[2]);
            var results = winnercheck();
            console.log(results);
            if(results==="No Winner"){
                round++;
                alert(fighterone[0]+":"+fighterone[2]+" *ROUND* "+round+"OVER*"+fightertwo[0]+":"+fightertwo[2]);
            }else{
                break; }
        }
    }
    function winnercheck(){
        if(fighterone[2]<1&&fightertwo[2]<1){
            result="You Both Die";
        } else if(fighterone[2]<1){
            result=fightertwo[0]+" WINS!!!!"
        } else if(fightertwo[2]<1){
            result= fighterone[0]+" WINS!!!!"
        }else{
            result="No Winner";
        }
        return result;
    }
    fight();


})();