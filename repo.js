'use strict';

function repo_drawlogic(){
    canvas.save();

    canvas.translate(
      canvas_properties['width-half'],
      canvas_properties['height-half']
    );

    let loop_counter = 3;
    do{
        canvas.rotate(1.5707963267948966);

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

    canvas.restore();
}

function repo_init(){
    core_repo_init({
      'title': 'Hallway-2D3D.htm',
    });
    canvas_init();
    canvas_setproperties({
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
    });
}

function repo_logic(){
}
