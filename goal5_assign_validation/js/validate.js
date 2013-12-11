/*
     Developed by the JavaScript team at Fullsail
     Date: 1306
*/

(function(){
    var dom={submit:document.querySelector("#f_submit"),
             username:document.querySelector("#f_username"),
             email:document.querySelector("#f_email"),
             phone:document.querySelector("#f_phone"),
             password:document.querySelector("#f_password"),
             ssn:document.querySelector("#f_ssn")};
             dom.submit.addEventListener("click",onSubmit);

       function onSubmit(e){
        validateField(dom.username);
        validateField(dom.email);
        validateField(dom.phone);
        validateField(dom.password);
        validateField(dom.ssn);

        e.preventDefault();
        return false;
    }

    var validateField = function(inputName){
        var pattern;
        var pass;
        if (inputName === dom.username){
            pattern = /^[a-zA-Z\-]+$/;
             //pass = pattern.test(dom.username);
         }
        else if (inputName === dom.email){
            pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            // pass = pattern.test(dom.email);
        }
        else if (inputName=== dom.phone){
            pattern= /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/;
            // pass = pattern.test(dom.phone);

        }
        else if (inputName=== dom.password){
           pattern=/^[a-zA-Z]\w{3,14}$/;
           //  pass = pattern.test(dom.password);

        }
        else if (inputName===dom.ssn){
            pattern=/^\d{3}-\d{2}-\d{4}$/;
             //pass = pattern.test(dom.ssn);


        }
        pass = pattern.test(inputName.value);
        console.log(pass);

        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        }
    };

})();



