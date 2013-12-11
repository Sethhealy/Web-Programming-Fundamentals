/**
 * Created by sethhealy on 12/5/13.
 */
/**
 * Created by sethhealy on 12/3/13.
 */

(function(){



//    var fighterone=["Kobal",20,100];
//    var fightertwo=["Kratos",20,100];
    var round=0;
    var button=document.querySelector("#fight_btn");
    var output=document.querySelector("#output");
    function fight(){
       var fighterone = {name:"Kobal", damage:20, health:100};
       var fightertwo= {name:"Kratos", damage:20,health:100};
        output.innerHTML=fighterone[0]+":"+fighterone[2]+" *START* "+fightertwo[0]+":"+fightertwo[2];
        for(var i=0; i<10;i++){
            var mindamage1= fighterone.damage*.5;
            var mindamage2= fightertwo.damage*.5;
            var f1=Math.floor(Math.random()*(fighterone[1]-mindamage1)+mindamage1);
            var f2=Math.floor(Math.random()*(fightertwo[1]-mindamage2)+mindamage2);
            fighterone[2]-=f1;
            fightertwo[2]-=f2;
            console.log(fighterone[0]+":"+fighterone[2]+""+fightertwo[0]+":"+fightertwo[2]);
            var results = winnercheck();
            console.log(results);
            if(results==="No Winner"){
                round++;
               output.innerHTML==fighterone[0]+":"+fighterone[2]+" *ROUND* "+round+"OVER*"+fightertwo[0]+":"+fightertwo[2];
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