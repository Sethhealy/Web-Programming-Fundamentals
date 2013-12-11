/**
 * Created by sethhealy on 12/10/13.
 */
//regular expressions or regexp
(function(){
    var dom={button:document.querySelector("button"),
             input:document.querySelector("#input"),
             output:document.querySelector("#output")};


    dom.button.addEventListener("click",onClick);

    function onClick(e){
        console.log(dom.input.value);
        //email//var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;  ////   /means regular expression
        var pattern=/^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/;
        var pass=pattern.test(dom.input.value);
        dom.output.innerHTML= pass;
    }
}());





































