'use strict';

function draw_logic(){
    canvas_buffer.save();

    canvas_buffer.translate(
      canvas_x,
      canvas_y
    );

    // Rotate 90 degrees each time and draw a wall.
    var loop_counter = 3;
    do{
        canvas_buffer.rotate(rotate_math);

        canvas_draw_path({
          'vertices': [
            {
              'type': 'moveTo',
              'x': 0,
              'y': 0,
            },
            {
              'x': canvas_width,
              'y': canvas_width,
            },
            {
              'x': -canvas_width,
              'y': canvas_width,
            },
          ],
        });
    }while(loop_counter--);

    canvas_buffer.restore();
}

function repo_init(){
    canvas_init();
}

function resize_logic(){
    gradient = canvas_gradient({
      'height': canvas_height,
      'stops': [
        {},
        {
          'color': '#a99',
          'offset': 1,
        },
      ],
      'y': canvas_height / 20,
    });
    canvas_buffer.fillStyle = gradient;
}

var gradient = 0;
var rotate_math = math_degree * 90;
