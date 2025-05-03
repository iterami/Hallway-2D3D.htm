'use strict';

function repo_drawlogic(){
    const properties = {
      'fillStyle': canvas_gradient({
        'args': [
          0,
          canvas_properties['height'] / 100,
          0,
          Math.max(
            canvas_properties['height'],
            canvas_properties['width']
          )
        ],
        'stops': [
          {},
          {
            'color': '#a99',
            'offset': 1,
          },
        ],
      }),
    };

    const side = Math.max(
      canvas_properties['height-half'],
      canvas_properties['width-half']
    );
    let loop_counter = 3;
    do{
        canvas_draw_path({
          'properties': properties,
          'translate': true,
          'vertices': [
            [
              'moveTo',
              0,
              0,
            ],
            [
              'rotate',
              loop_counter * (Math.PI / 2),
            ],
            [
              'lineTo',
              side,
              side,
            ],
            [
              'lineTo',
              -side,
              side,
            ],
          ],
          'x': canvas_properties['width-half'],
          'y': canvas_properties['height-half'],
        });
    }while(loop_counter--);
}

function repo_init(){
    core_repo_init({
      'title': 'Hallway-2D3D.htm',
    });
    canvas_init({
      'interval': false,
    });
}
