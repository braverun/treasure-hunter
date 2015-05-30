var getRandomNumber = function(size) {
  return Math.floor(Math.random() * size);
};

var dimension = 400;

//Generates random numbers for x and y coordinates of treasure
var target = {
  x: getRandomNumber(dimension),
  y: getRandomNumber(dimension)
};

var clicks = 0;

$('#map').click(function (event) {
  clicks++; //Counts clicks
  getDistance(event, target);

});


var getDistance = function(event, target) {
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt((diffX*diffX) + (diffY*diffY));
};
