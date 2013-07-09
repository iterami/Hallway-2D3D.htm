function resize(){
    width = window.innerWidth;
    document.getElementById('canvas').width = width;

    height = window.innerHeight;
    document.getElementById('canvas').height = height;

    /* create gradient fillstyle for all walls */
    i = canvas.createLinearGradient(
        0,
        height / 20,
        0,
        height
    );
    i.addColorStop(0, '#000');
    i.addColorStop(1, '#a99');
    canvas.fillStyle = i;

    canvas.translate(
        width / 2,
        height / 2
    );

    /* rotate 90 degrees each time and draw a wall */
    i = 3;
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
        canvas.fill();
    }while(i--);
}

var canvas = document.getElementById('canvas').getContext('2d');
var height = 0;
var i = 0;
var rotate = 90 * (Math.PI / 180);
var width = 0;

resize();

window.onresize = resize;
