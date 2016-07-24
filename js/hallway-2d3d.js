'use strict';

function draw_logic(){
    canvas_buffer.save();

    // Create gradient fillstyle for all walls.
    var gradient = canvas_buffer.createLinearGradient(
      0,
      canvas_height / 20,
      0,
      canvas_height
    );
    gradient.addColorStop(
      0,
      '#000'
    );
    gradient.addColorStop(
      1,
      '#a99'
    );
    canvas_buffer.fillStyle = gradient;

    canvas_buffer.translate(
      canvas_x,
      canvas_y
    );

    // Rotate 90 degrees each time and draw a wall.
    var loop_counter = 3;
    var rotate_math = 90 * math_degree;
    do{
        canvas_buffer.rotate(rotate_math);

        canvas_buffer.beginPath();
        canvas_buffer.moveTo(
          0,
          0
        );
        canvas_buffer.lineTo(
          canvas_width,
          canvas_width
        );
        canvas_buffer.lineTo(
          -canvas_width,
          canvas_width
        );
        canvas_buffer.closePath();
        canvas_buffer.fill();
    }while(loop_counter--);

    canvas_buffer.restore();
}

function resize_logic(){
    canvas_draw();
}

window.onload = canvas_init;
