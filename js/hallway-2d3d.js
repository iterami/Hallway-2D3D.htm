'use strict';

function draw_logic(){
    // Create gradient fillstyle for all walls.
    var gradient = buffer.createLinearGradient(
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
    buffer.fillStyle = gradient;

    buffer.translate(
      x,
      y
    );

    // Rotate 90 degrees each time and draw a wall.
    var loop_counter = 3;
    var rotate_math = 90 * (Math.PI / 180);
    do{
        buffer.rotate(rotate_math);

        buffer.beginPath();
        buffer.moveTo(
          0,
          0
        );
        buffer.lineTo(
          width,
          width
        );
        buffer.lineTo(
          -width,
          width
        );
        buffer.closePath();
        buffer.fill();
    }while(loop_counter--);
}

function resize_logic(){
    draw();
}

window.onload = init_canvas;
