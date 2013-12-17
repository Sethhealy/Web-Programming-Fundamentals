/**
 * Created by sethhealy on 12/14/13.
 */

window.utils={};

utils.getTriArea=function(b,h){
  var area=.5*(b*h);

    return area;
};


utils.getCircle=function(r){
    var circle=(Math.PI)*(r)*(r);

    return circle;

};

utils.getRect=function(l,w,h){
    var rectangle=(l*w*h);

    return rectangle;
}







