function get(i){
    return document.getElementById(i)
}

function resize(){
    width = get('canvas').width = window.innerWidth;
    height = get('canvas').height = window.innerHeight;

    x = width / 2;
    y = height / 2;

    i = canvas.createLinearGradient(
        0,
        height * .05,
        0,
        height
    );
    i.addColorStop(0,'#000');
    i.addColorStop(1,'#a99');
    canvas.fillStyle = i;

    i = 3;
    canvas.translate(x,y);
    do{
        canvas.rotate(rotate);
        canvas.beginPath();
        canvas.moveTo(
            0,
            0
        );
        canvas.lineTo(
            width,
            width
        );
        canvas.lineTo(
            -width,
            width
        );
        canvas.closePath();
        canvas.fill()
    }while(i--)
}

var canvas = get('canvas').getContext('2d');
var height = 0;
var i = 0;
var rotate = 90 * (Math.PI / 180);
var width = 0;
var x = 0;
var y = 0;

resize();

window.onresize = resize
