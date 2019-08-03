
$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
  }
  if (event.key === 'e') {
      // moveSwimmer();
      moveSwimmer(SwimTeam.move(datadata));
      // if moveSwimmer success, run CB
      // swimTeam.move(data);

    SwimTeam.move();
  }
});
var datadata;
const moveSwimmer = (cb) => {
  $.ajax({
    type: 'GET',
    url: 'http://127.0.0.1:3000',
    success: function(data) {
      datadata = data;
    }
  });
};


console.log('Client is running in the browser!');
