/**
 * Created by sethhealy on 12/14/13.
 */

(function(){
function Book(){
    this.name="";
    this.isbn=0;
    this.author="";
    this.price=999;
}

     Book.prototype.read=function(){
    console.log("Hey thanks for reading. "+ this.name);
};



window.Book=Book;
}());













