var direct;

$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    direct = arrowPress[1];
    moveSwimmer(SwimTeam.move(datadata));
  }
  // if (event.key === 'e') {
  //     // moveSwimmer();
  //     moveSwimmer(SwimTeam.move(datadata));
  //     // if moveSwimmer success, run CB
  //     // swimTeam.move(data);

  //   SwimTeam.move();
  // }
});

const serverUrl = 'http://127.0.0.1:3000'
var datadata;

const moveSwimmer = (cb) => {
  $.ajax({
    type: 'GET',
    url: serverUrl,
    data: {direction: direct},
    success: function(data) {
      datadata = data.toLowerCase();
    }
  });
};


console.log('Client is running in the browser!');
