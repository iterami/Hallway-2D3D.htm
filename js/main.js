'use strict';

function repo_drawlogic(){
    canvas_buffer.save();

    canvas_buffer.translate(
      canvas_properties['width-half'],
      canvas_properties['height-half']
    );

    // Rotate 90 degrees each time and draw a wall.
    let loop_counter = 3;
    do{
        canvas_buffer.rotate(rotate_math);

        canvas_draw_path({
          'vertices': [
            {
              'type': 'moveTo',
            },
            {
              'x': canvas_properties['width'],
              'y': canvas_properties['width'],
            },
            {
              'x': -canvas_properties['width'],
              'y': canvas_properties['width'],
            },
          ],
        });
    }while(loop_counter--);

    canvas_buffer.restore();
}

function repo_init(){
    core_repo_init({
      'globals': {
        'rotate_math': math_degrees_to_radians({
          'degrees': 90,
        }),
      },
      'title': 'Hallway-2D3D.htm',
    });
    canvas_init();
}

function repo_resizelogic(){
    canvas_setproperties({
      'properties': {
        'fillStyle': canvas_gradient({
          'height': canvas_properties['height'],
          'stops': [
            {},
            {
              'color': '#a99',
              'offset': 1,
            },
          ],
          'y': canvas_properties['height'] / 20,
        }),
      },
    });
}
