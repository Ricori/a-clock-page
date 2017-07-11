require('../scss/main.scss');

var maintp = require('../templates/main.html');
var Shifter = require('./Shifter');

window.onload = function(){ 
    document.body.innerHTML = maintp;
    Shifter.init();
    startTime();
    //Shifter.Shape.switchShape(Shifter.ShapeBuilder.letter("23:33:33"));
};

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    if(m < 10) m = "0" + m;
    if(s < 10) s = "0" + s;
    var day_or_night = (h > 11) ? "PM": "AM";
    if (h > 12) h -= 12;
    var timetext = h + ":" + m + ":" + s + " " + day_or_night;
    Shifter.Shape.switchShape(Shifter.ShapeBuilder.letter(timetext));
    setTimeout(function(){
        startTime();
    },5000);
}