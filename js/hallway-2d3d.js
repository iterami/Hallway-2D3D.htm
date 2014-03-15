function resize(){
    document.getElementById('canvas').width = window.innerWidth;

    document.getElementById('canvas').height = window.innerHeight;

    // create gradient fillstyle for all walls
    i = canvas.createLinearGradient(
      0,
      window.innerHeight / 20,
      0,
      window.innerHeight
    );
    i.addColorStop(0, '#000');
    i.addColorStop(1, '#a99');
    canvas.fillStyle = i;

    canvas.translate(
      window.innerWidth / 2,
      window.innerHeight / 2
    );

    // rotate 90 degrees each time and draw a wall
    i = 3;
    do{
        canvas.rotate(90 * (Math.PI / 180));

        canvas.beginPath();
        canvas.moveTo(
          0,
          0
        );
        canvas.lineTo(
          window.innerWidth,
          window.innerWidth
        );
        canvas.lineTo(
          -window.innerWidth,
          window.innerWidth
        );
        canvas.closePath();
        canvas.fill();
    }while(i--);
}

var canvas = document.getElementById('canvas').getContext('2d');
var i = 0;

resize();

window.onresize = resize;
