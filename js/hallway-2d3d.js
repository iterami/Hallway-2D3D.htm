function resize(){
    document.getElementById('canvas').height = window.innerHeight;
    document.getElementById('canvas').width = window.innerWidth;

    // create gradient fillstyle for all walls
    var gradient = canvas.createLinearGradient(
      0,
      window.innerHeight / 20,
      0,
      window.innerHeight
    );
    gradient.addColorStop(
      0,
      '#000'
    );
    gradient.addColorStop(
      1,
      '#a99'
    );
    canvas.fillStyle = gradient;

    canvas.translate(
      window.innerWidth / 2,
      window.innerHeight / 2
    );

    // rotate 90 degrees each time and draw a wall
    var loop_counter = 3;
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
    }while(loop_counter--);
}

var canvas = document.getElementById('canvas').getContext('2d');

resize();

window.onresize = resize;
