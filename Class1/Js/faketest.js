/**
 * Created by sethhealy on 12/14/13.
 */


(function(){


      var dom={name:document.querySelector("#name"),
               isbn:document.querySelector("#isbn"),
               author:document.querySelector("#author"),
               price:document.querySelector("#price"),
               button:document.querySelector("#next")};
        var books=[];
        var counter=0;
        var bookNames=["Titanic","Hobbit","Fullsail","Javascript","Eragon","How to train your dragon","Sharknado"];
        var authors=["Chris","Seth","Alan","Eric","Ryan","Richie","Manton"];

        dom.button.addEventListener("click",onClick);

        function onClick(e){
            console.log("Clicked");
            counter++;
           if(counter>books.length-1){
               counter=0;
           }

            updateHTML();
        }
        makeBooks(3);
            console.log(books);
        updateHTML();

        function makeBooks(n){


            for(var i=0; i<n; i++){
             var randyname=~~(Math.random()*bookNames.length);
             var randyauthors=~~(Math.random()*authors.length);

             var book= new Book();
              book.name = bookNames[randyname];
              book.author= authors[randyauthors];
              book.isbn=Math.random();
              book.price=~~(Math.random()*51+50);

              books.push(book);
            }
        }
         function updateHTML(){
             dom.name.innerHTML=books[counter].name;
             dom.author.innerHTML=books[counter].author;
             dom.isbn.innerHTML=books[counter].isbn;
             dom.price.innerHTML=books[counter].price;

         }








}());